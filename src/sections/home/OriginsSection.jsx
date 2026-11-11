import "./OriginsSection.css";

const origins = [
  {
    number: "01",
    date: "13.8 BILLION YEARS AGO",
    title: "A universe begins.",
    description:
      "The universe expands from an extremely hot, dense beginning. Stars and galaxies eventually emerge, creating the elements that make planets and life possible.",
    marker: "THE UNIVERSE",
  },
  {
    number: "02",
    date: "4.54 BILLION YEARS AGO",
    title: "Our world takes shape.",
    description:
      "Earth forms from material orbiting the young Sun. Over immense stretches of time, its surface, oceans, atmosphere, and environments transform.",
    marker: "PLANET EARTH",
  },
  {
    number: "03",
    date: "AT LEAST 3.5 BILLION YEARS AGO",
    title: "Life finds a way.",
    description:
      "Early evidence of life appears on Earth. Over billions of years, living organisms diversify, evolve, and reshape the planet.",
    marker: "LIFE",
  },
  {
    number: "04",
    date: "ABOUT 300,000 YEARS AGO",
    title: "Our species emerges.",
    description:
      "Homo sapiens evolves in Africa. Across generations, humans develop increasingly complex tools, knowledge, languages, and ways of living.",
    marker: "HUMANITY",
  },
  {
    number: "05",
    date: "THE AGE OF INGENUITY",
    title: "Humanity begins to transform its world.",
    description:
      "From stone tools and controlled fire to agriculture, writing, machines, and computing, human discoveries and inventions continually reshape civilization.",
    marker: "DISCOVERY & INVENTION",
  },
];

export default function OriginsSection() {
  return (
    <section className="home-origins section-padding" id="origins">
      <div className="container">
        <div className="home-origins__heading">
          <div>
            <p className="eyebrow">BEFORE THE INVENTIONS · THE BIGGER STORY</p>

            <h2>
              Everything
              <br />
              begins <em>somewhere.</em>
            </h2>
          </div>

          <p className="home-origins__lead">
            Before the objects we use and the ideas we depend on, there was a
            much longer story. This is the journey from the beginning of the
            universe to the rise of human ingenuity.
          </p>
        </div>

        <div className="origins-overview">
          <div className="origins-overview__item">
            <span>13.8B</span>
            <p>Years since the universe began</p>
          </div>

          <div className="origins-overview__item">
            <span>4.54B</span>
            <p>Years since Earth formed</p>
          </div>

          <div className="origins-overview__item">
            <span>3.5B+</span>
            <p>Years of evidence for life</p>
          </div>

          <div className="origins-overview__item">
            <span>300K</span>
            <p>Years since early Homo sapiens</p>
          </div>
        </div>

        <div className="origins-journey">
          {origins.map((origin) => (
            <article className="origins-stage" key={origin.number}>
              <div className="origins-stage__number">{origin.number}</div>

              <div className="origins-stage__marker">
                <span />
              </div>

              <div className="origins-stage__content">
                <p className="origins-stage__date">{origin.date}</p>
                <h3>{origin.title}</h3>
                <p className="origins-stage__description">
                  {origin.description}
                </p>
              </div>

              <span className="origins-stage__label">{origin.marker}</span>
            </article>
          ))}
        </div>

        <div className="home-origins__footer">
          <span>FROM COSMIC ORIGINS TO HUMAN CREATIVITY</span>
          <span>THE STORY OF EVERYTHING CONTINUES ↗</span>
        </div>
      </div>
    </section>
  );
}
