import React from "react";

export default function EntryImage({ image, className = "" }) {
  if (!image?.src) return null;

  const imageClass = [
    "entry-image",
    image.kind ? `entry-image--${image.kind}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={imageClass}>
      <img
        src={image.src}
        alt={image.alt || ""}
        loading={image.kind === "hero" ? "eager" : "lazy"}
      />

      {(image.caption || image.credit) && (
        <figcaption className="entry-image__caption">
          {image.caption && (
            <span className="entry-image__description">{image.caption}</span>
          )}

          {image.credit && (
            <span className="entry-image__credit">{image.credit}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
