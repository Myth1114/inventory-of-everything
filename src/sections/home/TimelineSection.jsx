import { Link } from "react-router-dom";
import timeline from "../../data/timeline";
import "./TimelineSection.css";

export default function TimelineSection() {
  return (
    <section className="home-timeline section-padding" id="timeline">
      <div className="container">
        <div className="home-timeline__heading">
          <div>
            <p className="eyebrow">A BRIEF HISTORY · ACROSS TIME</p>
            <h2>
              Ideas move
              <br />
              <em>through time.</em>
            </h2>
          </div>

          <p className="home-timeline__lead">
            Human ingenuity is an ongoing story. Follow a few milestones that
            changed how people make, communicate, build, and understand the
            world.
          </p>
        </div>

        <div className="timeline-list">
          {timeline.map((timeline) => (
            <article className="timeline-item" key={timeline.number}>
              <div className="timeline-item__date">
                <span>{timeline.date}</span>
              </div>

              <div className="timeline-item__marker" aria-hidden="true">
                <span />
              </div>

              <div className="timeline-item__content">
                <p className="timeline-item__era">{timeline.era}</p>
                <h3>{timeline.title}</h3>
                <p className="timeline-item__description">
                  {timeline.description}
                </p>

                <Link
                  className="timeline-item__link"
                  to={`/worlds/${timeline.worldSlug}`}
                >
                  {timeline.world}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <span className="timeline-item__number" aria-hidden="true">
                {timeline.number}
              </span>
            </article>
          ))}
        </div>

        <div className="home-timeline__footer">
          <span>SELECTED MOMENTS IN HUMAN HISTORY</span>
          <span>THE STORY CONTINUES ↗</span>
        </div>
      </div>
    </section>
  );
}
