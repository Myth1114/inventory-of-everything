import "./IntroSection.css";

export default function IntroSection() {
  return (
    <section className="home-intro section-padding">
      <div className="container">
        <p className="eyebrow">A different way to explore</p>

        <h2>
          Not everything has been <em>discovered.</em>
          <br />
          Not everything has been <em>understood.</em>
        </h2>

        <p>
          The world is full of things we use, ideas we depend on, and
          discoveries that changed how we live. This is an ongoing archive of
          the stories, science, people, and connections behind them.
        </p>
      </div>
    </section>
  );
}
