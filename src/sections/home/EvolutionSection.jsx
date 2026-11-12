import "./EvolutionSection.css";

const stages = [
  {
    number: "01",
    period: "AT LEAST 3.5 BILLION YEARS AGO",
    title: "The first signs of life.",
    description:
      "Simple microscopic organisms inhabit the ancient Earth. Life begins a long history of adaptation, survival, and change.",
    label: "MICROBIAL LIFE",
    image: "/images/evolution/microbial-life.jpeg",
    alt: "Scientific reconstruction of early microscopic life in Earth's ancient oceans.",
  },
  {
    number: "02",
    period: "AROUND 600–540 MILLION YEARS AGO",
    title: "Life becomes more complex.",
    description:
      "Multicellular organisms diversify. The oceans become home to increasingly varied forms of life, including the ancestors of many animal groups.",
    label: "DIVERSIFICATION",
    image: "/images/evolution/marine-life.jpeg",
    alt: "Reconstruction of ancient marine organisms, including early animal life.",
  },
  {
    number: "03",
    period: "AROUND 470 MILLION YEARS AGO",
    title: "Life spreads onto land.",
    description:
      "Early plants establish themselves on land. Over time, fungi and animals also become part of terrestrial ecosystems.",
    label: "LIFE ON LAND",
    image: "/images/evolution/early-land-life.jpeg",
    alt: "Scientific reconstruction of early land plants in a prehistoric landscape.",
  },
  {
    number: "04",
    period: "AROUND 7 MILLION YEARS AGO ONWARD",
    title: "The human lineage emerges.",
    description:
      "The evolutionary lineage leading to humans develops in Africa. Different hominin species emerge, adapt, and sometimes coexist.",
    label: "HOMININ EVOLUTION",
    image: "/images/evolution/hominin-evolution.jpeg",
    alt: "Scientific reconstruction of an early hominin in an African landscape.",
  },
  {
    number: "05",
    period: "AROUND 300,000 YEARS AGO",
    title: "Homo sapiens appears.",
    description:
      "Our species emerges in Africa. Across generations, humans develop diverse cultures, technologies, languages, and ways of understanding the world.",
    label: "HOMO SAPIENS",
    image: "/images/evolution/early-homo-sapiens.jpeg",
    alt: "Scientific reconstruction of early Homo sapiens in prehistoric Africa.",
  },
];

export default function EvolutionSection() {
  return (
    <section className="home-evolution section-padding" id="evolution">
      <div className="container">
        <div className="home-evolution__heading">
          <div>
            <p className="eyebrow">THE STORY OF LIFE · ACROSS DEEP TIME</p>
            <h2>
              Life keeps
              <br />
              <em>changing.</em>
            </h2>
          </div>

          <p className="home-evolution__lead">
            Life on Earth is not a finished story. It is an extraordinary
            process of evolution, adaptation, extinction, and emergence that
            eventually led to us.
          </p>
        </div>

        <div className="evolution-intro">
          <span className="evolution-intro__label">A CONTINUOUS PROCESS</span>
          <p>
            Evolution has no predetermined destination. Every living thing
            belongs to a branching history shaped by changing environments and
            natural selection.
          </p>
        </div>

        <div className="evolution-grid">
          {stages.map((stage) => (
            <article className="evolution-card" key={stage.number}>
              <div className="evolution-card__visual">
                <img
                  className="evolution-card__image"
                  src={stage.image}
                  alt={stage.alt}
                  loading="lazy"
                  decoding="async"
                />

                <div className="evolution-card__image-overlay" />

                <span className="evolution-card__visual-index">
                  {stage.number} / 05
                </span>

                <span className="evolution-card__visual-label">
                  {stage.label}
                </span>
              </div>

              <div className="evolution-card__content">
                <p className="evolution-card__period">{stage.period}</p>

                <h3>{stage.title}</h3>

                <p className="evolution-card__description">
                  {stage.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="home-evolution__footer">
          <span>ONE PLANET · BILLIONS OF YEARS OF CHANGE</span>
          <span>EVOLUTION HAS NO FINAL CHAPTER ↗</span>
        </div>
      </div>
    </section>
  );
}
