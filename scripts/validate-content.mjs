import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import entries from "../src/data/entries.js";
import worlds from "../src/data/world.js";
import categories from "../src/data/categories.js";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const contentDirectory = path.join(projectRoot, "src/content/entries");

const errors = [];
const warnings = [];
const ids = new Set();
const contentPaths = new Set();
console.log("\nValidating The Inventory of Everything...\n");

// Check unique IDs and required metadata
for (const entry of entries) {
  if (!entry.id) {
    errors.push("An entry is missing its ID.");
    continue;
  }
  if (typeof entry.featured !== "boolean") {
    errors.push(
      `Entry "${entry.id}" must have a Boolean featured value (true or false).`
    );
  }
  if (ids.has(entry.id)) {
    errors.push(`Duplicate entry ID: "${entry.id}".`);
  }

  ids.add(entry.id);
  const worldExists = worlds.some((world) => world.slug === entry.worldSlug);

  if (!worldExists) {
    errors.push(
      `Entry "${entry.id}" references unknown world "${entry.worldSlug}".`
    );
  }

  const matchingCategory = categories.find(
    (category) => category.id === entry.categoryId
  );

  if (!matchingCategory) {
    errors.push(
      `Entry "${entry.id}" references unknown category "${entry.categoryId}".`
    );
  } else if (matchingCategory.worldSlug !== entry.worldSlug) {
    errors.push(
      `Entry "${entry.id}" belongs to world "${entry.worldSlug}", but its category "${entry.categoryId}" belongs to "${matchingCategory.worldSlug}".`
    );
  }

  if (!entry.title) {
    errors.push(`Entry "${entry.id}" is missing a title.`);
  }
  const allowedTypes = [
    "invention",
    "discovery",
    "material",
    "system",
    "object",
    "concept",
  ];

  if (!allowedTypes.includes(entry.type)) {
    errors.push(`Entry "${entry.id}" has an invalid type: "${entry.type}".`);
  }
  if (!entry.worldSlug) {
    errors.push(`Entry "${entry.id}" is missing worldSlug.`);
  }

  if (!entry.categoryId) {
    errors.push(`Entry "${entry.id}" is missing categoryId.`);
  }

  if (!entry.period) {
    errors.push(`Entry "${entry.id}" is missing period.`);
  }

  if (!entry.summary || entry.summary.trim().length < 20) {
    errors.push(
      `Entry "${entry.id}" must have a summary of at least 20 characters.`
    );
  }

  if (!Array.isArray(entry.tags) || entry.tags.length === 0) {
    errors.push(`Entry "${entry.id}" must have at least one tag.`);
  }
  if (Array.isArray(entry.tags)) {
    const normalizedTags = entry.tags.map((tag) =>
      typeof tag === "string" ? tag.trim().toLowerCase() : ""
    );

    if (normalizedTags.some((tag) => !tag)) {
      errors.push(`Entry "${entry.id}" contains an empty or invalid tag.`);
    }

    if (new Set(normalizedTags).size !== normalizedTags.length) {
      errors.push(`Entry "${entry.id}" contains duplicate tags.`);
    }
  }
  if (!entry.contentPath) {
    errors.push(`Entry "${entry.id}" is missing contentPath.`);
    continue;
  }

  const normalizedPath = entry.contentPath.replaceAll("\\", "/");
  if (contentPaths.has(normalizedPath)) {
    errors.push(
      `Duplicate contentPath: "${normalizedPath}" is used by multiple entries.`
    );
  }

  contentPaths.add(normalizedPath);

  if (
    normalizedPath.startsWith("/") ||
    normalizedPath.split("/").includes("..")
  ) {
    errors.push(`Unsafe contentPath for "${entry.id}".`);
    continue;
  }

  const articlePath = path.join(contentDirectory, normalizedPath);

  if (!fs.existsSync(articlePath)) {
    errors.push(`Markdown file missing for "${entry.id}": ${normalizedPath}`);
    continue;
  }

  const content = fs.readFileSync(articlePath, "utf8").trim();

  if (entry.status === "published" && !content) {
    errors.push(`Published entry "${entry.id}" has an empty Markdown file.`);
  } else if (entry.status === "published") {
    const headings = content.match(/^#{1,3}\s+.+$/gm) ?? [];
    const words = content.split(/\s+/).filter(Boolean);
    if (!/^##\s+Sources and Further Reading\s*$/im.test(content)) {
      errors.push(
        `Published entry "${entry.id}" is missing a "Sources and Further Reading" section.`
      );
    }
    if (headings.length < 2) {
      errors.push(
        `Published entry "${entry.id}" must have at least 2 headings.`
      );
    }

    if (words.length < 100) {
      errors.push(
        `Published entry "${entry.id}" has only ${words.length} words; at least 100 are required.`
      );
    }
  }

  if (entry.status === "draft" && !content) {
    warnings.push(`Draft "${entry.id}" has an empty Markdown file.`);
  }

  if (!["published", "draft"].includes(entry.status)) {
    errors.push(
      `Entry "${entry.id}" has an invalid status: "${entry.status}".`
    );
  }
}

// Check relationships between entries

for (const entry of entries) {
  if (
    entry.relatedEntryIds !== undefined &&
    !Array.isArray(entry.relatedEntryIds)
  ) {
    errors.push(`"${entry.id}" must have relatedEntryIds as an array.`);
    continue;
  }

  if (entry.relatedEntryIds?.includes(entry.id)) {
    errors.push(`"${entry.id}" cannot reference itself as a related entry.`);
  }
  for (const relatedId of entry.relatedEntryIds ?? []) {
    const relatedEntry = entries.find((item) => item.id === relatedId);

    if (!relatedEntry) {
      errors.push(`"${entry.id}" references unknown entry "${relatedId}".`);
    } else if (relatedEntry.status !== "published") {
      warnings.push(
        `"${entry.id}" references "${relatedId}", which is not published.`
      );
    }
  }
}

console.log(`Checked ${entries.length} entries.`);

for (const warning of warnings) {
  console.warn(`WARNING: ${warning}`);
}

if (errors.length > 0) {
  console.error("\nValidation failed:");

  for (const error of errors) {
    console.error(`- ${error}`);
  }

  process.exitCode = 1;
} else {
  console.log("\nValidation passed. No errors found.");
}

if (warnings.length > 0) {
  console.log(`\n${warnings.length} warning(s) need attention.`);
}
