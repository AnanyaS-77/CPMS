import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Gauge,
  Globe2,
  LayoutDashboard,
  Radar,
  Route,
  Search,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react';

const precisionFeatures = [
  {
    icon: CalendarCheck,
    title: 'Smart Scheduling',
    text: 'AI-driven shift allocation considering fatigue, qualifications, and rest periods.',
    bullets: ['Auto-Conflict Resolution', 'Seniority Calculations'],
  },
  {
    icon: BarChart3,
    title: 'Dynamic Analytics',
    text: 'Real-time performance heatmaps and predictive operational bottlenecks.',
    bullets: ['Pilot Utilization KPIs', 'Cost-Per-Leg Analysis'],
  },
  {
    icon: ShieldCheck,
    title: 'Automated Compliance',
    text: 'Integrated FAA/EASA rule checking for every scheduled flight leg.',
    bullets: ['Digital Audit Logs', 'Certification Tracking'],
  },
  {
    icon: Globe2,
    title: 'Global Connectivity',
    text: 'Seamless API integration with existing ATC and carrier networks.',
    bullets: ['Real-time Hub Sync', 'Offline Crew Mobile App'],
  },
];

const ganttHighlights = [
  {
    icon: Gauge,
    title: 'Real-time Rest Monitoring',
    text: "Instant visual alerts when a crew member's duty day approaches mandatory rest limits.",
  },
  {
    icon: SlidersHorizontal,
    title: 'Multi-layered Filters',
    text: 'Pivot your view by fleet type, crew rank, or base location in milliseconds.',
  },
];

const intelligenceItems = [
  {
    icon: Radar,
    title: 'Immutable Audit Trail',
    text: 'Every schedule change is timestamped and attributed, ensuring 100% accountability for regulatory bodies.',
  },
  {
    icon: Search,
    title: 'Root Cause Discovery',
    text: 'Drill down into delays to identify recurring patterns in ground operations or crew transit.',
  },
];

function FeatureCard({ feature }) {
  return (
    <article className="feature-precision-card">
      <span className="feature-card-icon" aria-hidden="true">
        <feature.icon size={17} strokeWidth={2.2} />
      </span>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
      <ul>
        {feature.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

function DashboardChart() {
  return (
    <article className="feature-chart-card" aria-label="Dashboard overview chart">
      <div className="feature-chart-title">
        <LayoutDashboard size={15} strokeWidth={2.2} />
        <span>Dashboard Overview</span>
      </div>
      <div className="feature-chart-body">
        <div className="feature-chart-scale" aria-hidden="true">
          <span>200</span>
          <span>150</span>
          <span>100</span>
          <span>50</span>
        </div>
        <div className="feature-chart-plot">
          <span className="feature-chart-grid g1" />
          <span className="feature-chart-grid g2" />
          <span className="feature-chart-grid g3" />
          <span className="feature-chart-grid g4" />
          <svg viewBox="0 0 500 178" role="img" aria-label="Seven day crew activity trends">
            <path
              className="feature-chart-line primary"
              d="M0 58 C42 46 78 43 112 54 C146 67 168 94 204 79 C239 64 236 28 278 26 C338 24 390 35 442 45 C466 50 486 57 500 63"
            />
            <path
              className="feature-chart-line secondary"
              d="M0 140 C52 136 86 136 126 133 C168 130 190 144 232 135 C272 126 312 131 354 133 C406 136 458 139 500 137"
            />
          </svg>
          <div className="feature-chart-days" aria-hidden="true">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
      <p>Flight and crew activity trends over the past 7 days.</p>
    </article>
  );
}

export default function Feature() {
  return (
    <main className="feature-page">
      <section className="feature-hero" aria-labelledby="feature-title">
        <div className="feature-hero-inner">
          <p className="feature-pill">
            <span aria-hidden="true" />
            Industry Excellence
          </p>
          <h1 id="feature-title">
            <span>Next-Generation</span>
            <strong>Crew Management</strong>
          </h1>
          <p>
            Orchestrate complex aviation logistics with precision. Our platform
            synchronizes Zulu time, crew rest requirements, and mission-critical
            scheduling in a single pane of glass.
          </p>
          <div className="feature-hero-actions">
            <NavLink className="feature-button primary" to="#precision">
              Explore all Features
              <ArrowRight size={15} strokeWidth={2.3} />
            </NavLink>
            <NavLink className="feature-button secondary" to="/product">
              Technical Specs
            </NavLink>
          </div>
        </div>
      </section>

      <section className="feature-precision-section" id="precision" aria-labelledby="precision-title">
        <div className="feature-section-inner">
          <div className="feature-section-heading">
            <p>How It Works</p>
            <h2 id="precision-title">Engineered for Precision</h2>
            <span>
              Advanced tools designed specifically for the rigorous demands of aviation
              operations and crew safety.
            </span>
          </div>
          <div className="feature-precision-grid">
            {precisionFeatures.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="feature-gantt-section" aria-labelledby="gantt-title">
        <div className="feature-split-inner">
          <div className="feature-split-copy">
            <p className="feature-kicker">Mission Critical</p>
            <h2 id="gantt-title">High-Performance Gantt Visualization</h2>
            <p>
              Manage hundreds of crew members across thousands of flight hours with
              our proprietary Gantt engine. Built for 60fps performance, even with
              high data density.
            </p>
            <div className="feature-highlight-list">
              {ganttHighlights.map((item) => (
                <article className="feature-highlight-item" key={item.title}>
                  <item.icon size={18} strokeWidth={2.2} aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <DashboardChart />
        </div>
      </section>

      <section className="feature-intelligence-section" aria-labelledby="intelligence-title">
        <div className="feature-split-inner intelligence">
          <div className="feature-placeholder" aria-label="Predictive heatmap placeholder" />
          <div className="feature-split-copy">
            <p className="feature-kicker">Intelligence</p>
            <h2 id="intelligence-title">Predictive Heatmaps & Audits</h2>
            <p>
              Anticipate disruptions before they occur. Our analytics engine uses
              historical data to predict delays and suggest proactive crew staging
              at key hubs.
            </p>
            <div className="feature-highlight-list">
              {intelligenceItems.map((item) => (
                <article className="feature-highlight-item" key={item.title}>
                  <item.icon size={18} strokeWidth={2.2} aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
