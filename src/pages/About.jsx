import { NavLink } from 'react-router-dom';
import {
  CheckCircle2,
  Eye,
  Fingerprint,
  Gauge,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Rocket,
  ShieldCheck,
} from 'lucide-react';

const milestones = [
  {
    year: '2021',
    phase: 'The Genesis',
    title: 'The Foundation',
    text: 'CPMS was born out of a specialized consultancy in Zurich, focusing on algorithm-driven scheduling for regional carriers.',
  },
  {
    year: '2023',
    phase: 'Scaling Up',
    title: 'Global Connectivity',
    text: 'Secured partnerships with three major international airlines, expanding our platform to handle trans-continental crew logistics.',
  },
  {
    year: '2024',
    phase: 'AI Integration',
    title: 'Predictive Logic',
    text: "Launched the industry's first real-time predictive fatigue monitoring system integrated into standard scheduling.",
  },
  {
    year: '2025',
    phase: 'The Future',
    title: 'Autonomous Operations',
    text: 'Implementing self-healing schedules that automatically re-route assets during weather disruptions.',
  },
];

const companyStats = [
  { value: '50+', label: 'Aviation Partners' },
  { value: '10k+', label: 'Crew Members' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '24/7', label: 'Global Support' },
  { value: '40%', label: 'Cost Reduction' },
  { value: 'ISO', label: 'Certified Security' },
];

const standards = [
  {
    icon: ShieldCheck,
    title: 'Reliability',
    text: 'Failure is not an option in aviation. Our systems are built with triple redundancy and military-grade encryption.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'We constantly challenge the status quo, integrating ML and predictive modeling into legacy flight flows.',
  },
  {
    icon: Gauge,
    title: 'Efficiency',
    text: 'Optimizing every second. From quick logins to rapid schedule generation, speed is our core metric.',
  },
  {
    icon: HeartHandshake,
    title: 'Aviation Safety',
    text: 'Safety first, always. Our algorithms prioritize crew rest and compliance with global aviation authorities.',
  },
];

const team = [
  {
    name: 'James Durand',
    role: 'Founder & CEO',
    text: 'Former Airline Operations Director with over 20 years of experience in global logistics and software engineering.',
  },
  {
    name: 'Sarah Lindstrom',
    role: 'CTO',
    text: 'Expert in distributed systems and AI. Previously led core platform development at a major European fintech.',
  },
  {
    name: 'James Durand',
    role: 'Founder & CEO',
    text: 'Former Airline Operations Director with over 20 years of experience in global logistics and software engineering.',
  },
];

const capabilities = [
  {
    icon: Fingerprint,
    title: 'Data Integrity',
    text: 'Single source of truth for all crew and flight data across global networks.',
  },
  {
    icon: Rocket,
    title: 'Unified Ecosystem',
    text: 'Seamless integration with existing ERP and flight planning tools via API.',
  },
  {
    icon: ShieldCheck,
    title: 'Proactive Compliance',
    text: 'Automated checks against union contracts and government regulations.',
  },
];

const certifications = ['SOC2 Type II', 'GDPR Ready', 'EASA Compliant', 'FAA Certified'];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="about-section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <p className="about-pill">
              <span aria-hidden="true" />
              About
            </p>
            <h1 id="about-title">
              <span>Built to Transform</span>
              <strong>Airline Operations</strong>
            </h1>
            <p className="about-hero-text">
              CPMS is dedicated to engineering high-precision logistics platforms
              that empower aviation leaders to navigate complexity with absolute
              clarity and reliability.
            </p>
            <div className="about-hero-actions">
              <NavLink className="about-button primary" to="/contact">
                Book a Demo
              </NavLink>
              <NavLink className="about-button secondary" to="/contact">
                Contact Team
              </NavLink>
            </div>
          </div>
          <div className="about-hero-media" aria-label="About CPMS image placeholder" />
        </div>
      </section>

      <section className="about-story-section" aria-labelledby="about-story-title">
        <div className="about-story-inner">
          <div className="about-story-copy">
            <h2 id="about-story-title">Our Story</h2>
            <p>
              From a small team of aerospace engineers to a global leader in crew
              logistics, our journey has always been defined by the pursuit of
              operational excellence. We saw the limitations of legacy systems and
              decided to build the future of the flight deck.
            </p>
            <blockquote>
              <p>
                “The goal wasn&apos;t just to manage crews, but to empower the humans
                behind every flight with data they can trust in real-time.”
              </p>
              <footer>
                <span aria-hidden="true">JD</span>
                <div>
                  <strong>James Durand</strong>
                  <small>Founder &amp; CEO</small>
                </div>
              </footer>
            </blockquote>
          </div>

          <ol className="about-timeline">
            {milestones.map((milestone) => (
              <li key={milestone.year}>
                <p>
                  <strong>{milestone.year}</strong>
                  <span>— {milestone.phase}</span>
                </p>
                <h3>{milestone.title}</h3>
                <span>{milestone.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-stats-section" aria-label="Company metrics">
        <div className="about-stats-inner">
          {companyStats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-standards-section" aria-labelledby="about-standards-title">
        <div className="about-standards-inner">
          <SectionHeading
            eyebrow="Lorem Ipsum"
            title="The CPMS Standards"
            text="Our values aren’t just posters on a wall; they are the architectural principles of our code and our culture."
          />
          <div className="about-standards-grid">
            {standards.map((standard) => (
              <article className="about-standard-card" key={standard.title}>
                <span aria-hidden="true">
                  <standard.icon size={16} strokeWidth={2.2} />
                </span>
                <h3>{standard.title}</h3>
                <p>{standard.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-purpose-section" aria-label="Company vision and mission">
        <div className="about-purpose-inner">
          <article className="about-purpose-card">
            <div className="about-purpose-title">
              <span aria-hidden="true">
                <MapPin size={18} strokeWidth={2.2} />
              </span>
              <Eye size={54} strokeWidth={1.4} aria-hidden="true" />
            </div>
            <h2>Our Vision</h2>
            <p>
              A future where aviation logistics are seamless, predictive, and
              human-centric, bridging the gap between technological power and
              operational reality.
            </p>
          </article>
          <article className="about-purpose-card">
            <div className="about-purpose-title">
              <span aria-hidden="true">
                <Rocket size={18} strokeWidth={2.2} />
              </span>
              <Rocket size={54} strokeWidth={1.4} aria-hidden="true" />
            </div>
            <h2>Our Mission</h2>
            <p>
              To provide the aviation industry with the world&apos;s most resilient and
              intelligent crew management infrastructure, ensuring every flight is
              staffed with precision and safety.
            </p>
          </article>
        </div>
      </section>

      <section className="about-team-section" aria-labelledby="about-team-title">
        <div className="about-team-inner">
          <SectionHeading
            eyebrow="Lorem Ipsum"
            title="The Executive Flight Deck"
            text="Lorem ipsum dolor sitor"
          />
          <div className="about-team-grid">
            {team.map((member, index) => (
              <article className="about-team-card" key={`${member.name}-${index}`}>
                <div className="about-team-photo" aria-label={`${member.name} photo placeholder`} />
                <div className="about-team-copy">
                  <h3>{member.name}</h3>
                  <strong>{member.role}</strong>
                  <p>{member.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-capabilities-section" aria-labelledby="about-capabilities-title">
        <div className="about-capabilities-inner">
          <div className="about-capabilities-copy">
            <p className="about-kicker">Lorem Ipsum</p>
            <h2 id="about-capabilities-title">Engineered for the Most Demanding Skies</h2>
            <p>
              Airlines trust CPMS because we understand that in aviation, there is no
              room for “good enough.” Every feature is battle-tested in high-stress
              environments.
            </p>
            <div className="about-certifications">
              {certifications.map((certification) => (
                <span key={certification}>
                  <CheckCircle2 size={16} strokeWidth={2.2} />
                  {certification}
                </span>
              ))}
            </div>
          </div>
          <div className="about-capability-list">
            {capabilities.map((capability) => (
              <article key={capability.title}>
                <span aria-hidden="true">
                  <capability.icon size={17} strokeWidth={2.2} />
                </span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
