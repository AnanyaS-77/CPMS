import { NavLink } from 'react-router-dom';

export function Banner() {
  return (
    <section className="banner">
      <div className="banner-inner">
        <div className="banner-copy">
          <p className="banner-pill">
            <span />
            Aviation Operations Platform
          </p>
          <h1>
            <span className="heading-line">Real-Time Crew</span>
            <span className="heading-line">
              Management <span className="text-accent">for</span>
            </span>
            <span className="heading-line text-accent">Modern Airlines</span>
          </h1>
          <p className="banner-text">
            Plan, assign, and monitor crew operations with full visibility. Eliminate
            scheduling conflicts and improve operational efficiency with a centralized platform.
          </p>
          <div className="banner-actions">
            <NavLink className="hero-button primary" to="/contact">
              Book a Demo
            </NavLink>
            <NavLink className="hero-button ghost" to="/contact">
              Login
            </NavLink>
          </div>
        </div>

        <div className="banner-media" aria-label="Image placeholder" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="content-section" id="features">
        <p className="section-kicker">Features</p>
        <h2>Built to keep airline crew operations coordinated.</h2>
      </section>
      <section className="content-section" id="solutions">
        <p className="section-kicker">Solutions</p>
        <h2>One workspace for scheduling, visibility, and action.</h2>
      </section>
    </main>
  );
}
