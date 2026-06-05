import { NavLink } from 'react-router-dom';
import {
  CircleAlert,
  Clock3,
  DollarSign,
  Eye,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from 'lucide-react';

const benefits = [
  { icon: DollarSign, label: 'Reduce Operational Costs' },
  { icon: ShieldCheck, label: 'Ensure Regulatory Compliance' },
  { icon: Eye, label: 'Real-Time Visibility' },
  { icon: SlidersHorizontal, label: 'Smarter Scheduling' },
];

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '10,000+', label: 'Crew Managed' },
  { value: '50+', label: 'Airlines' },
  { value: '24/7', label: 'Support' },
];

const bars = [
  { label: 'Cockpit', value: 88 },
  { label: 'Cabin', value: 76 },
  { label: 'Ground', value: 63 },
  { label: 'Training', value: 45 },
];

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

function BenefitsStrip() {
  return (
    <section className="benefits-strip" aria-label="Platform benefits">
      <div className="benefits-inner">
        {benefits.map((benefit) => (
          <div className="benefit-item" key={benefit.label}>
            <span className="benefit-icon" aria-hidden="true">
              <benefit.icon size={22} strokeWidth={2.3} />
            </span>
            <span>{benefit.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CrewUtilizationCard() {
  return (
    <article className="utilization-card" aria-label="Crew utilization dashboard">
      <div className="utilization-header">
        <div>
          <span className="chart-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <h3>Crew Utilization</h3>
        </div>
        <span className="header-crop" aria-hidden="true">
          This
        </span>
      </div>

      <div className="chart-area">
        <div className="chart-scale" aria-hidden="true">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>
        <div className="chart-plot">
          <span className="grid-line line-100" />
          <span className="grid-line line-75" />
          <span className="grid-line line-50" />
          <span className="grid-line line-25" />
          <span className="grid-line line-0" />
          {bars.map((bar) => (
            <div className="bar-column" key={bar.label}>
              <span className="bar" style={{ '--bar-height': `${bar.value}%` }} />
              <span className="bar-label">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="utilization-stats">
        <div>
          <Clock3 size={18} />
          <strong>9.2h</strong>
          <span>Avg Duty</span>
        </div>
        <div>
          <Users size={18} />
          <strong>284</strong>
          <span>On Duty</span>
        </div>
        <div>
          <CircleAlert size={18} />
          <strong>3</strong>
          <span>Alerts</span>
        </div>
      </div>
    </article>
  );
}

function PlatformOverview() {
  return (
    <section className="platform-overview">
      <div className="overview-inner">
        <div className="overview-copy">
          <p className="overview-kicker">Platform Overview</p>
          <h2>All-in-One Crew Operations Platform</h2>
          <p>
            CPMS is a centralized system that helps airlines manage crew scheduling,
            tracking, and performance in real time. Built for operational teams to make
            faster, smarter decisions.
          </p>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <CrewUtilizationCard />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Banner />
      <BenefitsStrip />
      <PlatformOverview />
    </main>
  );
}
