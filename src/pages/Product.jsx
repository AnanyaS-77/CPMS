import { NavLink } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  BellRing,
  CalendarDays,
  Check,
  ClipboardList,
  Clock3,
  Eye,
  LayoutDashboard,
  Monitor,
  Plane,
  Play,
  ShieldCheck,
  TrendingUp,
  UserCircle,
  Users,
  UsersRound,
  Zap,
} from 'lucide-react';

const workflowItems = [
  { number: '01', label: 'Dashboard', tone: 'blue' },
  { number: '02', label: 'Crew Management', tone: 'cyan' },
  { number: '03', label: 'Scheduling', tone: 'blue' },
  { number: '04', label: 'Monitoring', tone: 'cyan' },
  { number: '05', label: 'Reports', tone: 'blue' },
];

const overviewChecks = [
  'Unified crew data across all departments',
  'Real-time status and duty tracking',
  'Automated conflict detection and alerts',
  'Regulatory compliance built into every workflow',
];

const moduleItems = [
  { icon: UsersRound, label: 'Crew Management', tag: 'Core', tone: 'blue', active: true },
  { icon: Activity, label: 'Real-Time Monitoring & Alerts', tag: 'Live', tone: 'cyan' },
  { icon: Activity, label: 'Real-Time Monitoring & Alerts', tag: 'Live', tone: 'cyan' },
  { icon: UserCircle, label: 'Crew Profiles', tag: 'Records', tone: 'blue' },
  { icon: BarChart3, label: 'Analytics & Reporting', tag: 'Insights', tone: 'blue' },
];

const moduleBenefits = [
  'Manage pilots and cabin crew',
  'View availability and status',
  'Organize by roles and departments',
];

const productProcessSteps = [
  {
    icon: LayoutDashboard,
    title: 'Monitor Operations',
    text: 'Use a real-time dashboard to track crew and flights.',
    tone: 'blue',
  },
  {
    icon: UsersRound,
    title: 'Manage Crew',
    text: 'Search, filter, and organize crew members by role and status.',
    tone: 'cyan',
  },
  {
    icon: CalendarDays,
    title: 'Assign Schedules',
    text: 'Create and manage schedules using a visual calendar interface.',
    tone: 'blue',
  },
  {
    icon: BellRing,
    title: 'Track & Resolve Issues',
    text: 'Receive instant alerts and resolve conflicts in real time.',
    tone: 'cyan',
  },
  {
    icon: TrendingUp,
    title: 'Analyze Performance',
    text: 'Use reports and analytics to continuously optimize operations.',
    tone: 'blue',
  },
];

const integrationLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];

const integrations = [
  {
    icon: Plane,
    tag: 'Flight Ops',
    text: 'Aircraft Communications Addressing and Reporting System',
    tone: 'blue',
  },
  {
    icon: Users,
    tag: 'HR Systems',
    text: 'Human Capital Management for crew payroll and records',
    tone: 'cyan',
  },
  {
    icon: BarChart3,
    tag: 'Data',
    text: 'Official Airline Guide schedule and flight data feeds',
    tone: 'blue',
  },
  {
    icon: ClipboardList,
    tag: 'Compliance',
    text: 'Regulatory duty time rules and compliance automation',
    tone: 'cyan',
  },
  {
    icon: Monitor,
    tag: 'Ops Control',
    text: 'Airline Information Management System integration',
    tone: 'blue',
  },
  {
    icon: Bell,
    tag: 'Notifications',
    text: 'Automated alerts and crew notification workflows',
    tone: 'cyan',
  },
];

const efficiencyCards = [
  {
    icon: Clock3,
    title: 'Reduce Manual Effort',
    value: '70%',
    metric: 'Less admin time',
    text: 'Automate repetitive scheduling tasks and eliminate manual spreadsheet management.',
    tone: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Improve Crew Utilization',
    value: '18%',
    metric: 'Utilization improvement',
    text: 'Maximize crew hours with intelligent scheduling that minimizes idle time and overwork.',
    tone: 'cyan',
  },
  {
    icon: ShieldCheck,
    title: 'Ensure Compliance',
    value: '100%',
    metric: 'Regulatory coverage',
    text: 'Built-in rules automatically flag violations before they happen.',
    tone: 'blue',
  },
  {
    icon: Zap,
    title: 'Faster Decisions',
    value: '4×',
    metric: 'Faster response time',
    text: 'Real-time dashboards give ops managers the data they need to act in seconds, not hours.',
    tone: 'cyan',
  },
  {
    icon: Eye,
    title: 'Real-Time Visibility',
    value: '360°',
    metric: 'Operational visibility',
    text: 'Every team sees the same live data eliminating communication gaps across departments.',
    tone: 'blue',
  },
];

function ProductHero() {
  return (
    <section className="product-hero">
      <div className="product-hero-inner">
        <p className="product-hero-pill">
          <span aria-hidden="true" />
          Aviation Operations Software
        </p>

        <h1>
          <span className="product-heading-line">A Complete Crew Management</span>
          <span className="product-heading-line">
            System <strong>for Airline Operations</strong>
          </span>
        </h1>

        <p className="product-hero-text">
          CPMS gives airlines full control over crew planning, scheduling, tracking,
          and performance, all in one unified platform.
        </p>

        <div className="product-hero-actions">
          <NavLink className="product-hero-button primary" to="/contact">
            Book a Demo
            <ArrowRight size={16} strokeWidth={2.4} />
          </NavLink>
          <NavLink className="product-hero-button secondary" to="/features">
            <Play size={15} strokeWidth={2.1} />
            View Live Product
          </NavLink>
        </div>

        <div className="product-hero-preview" aria-label="CPMS product preview placeholder" />
      </div>
    </section>
  );
}

function ProductSystemOverview() {
  return (
    <section className="product-system-section">
      <div className="product-system-inner">
        <div className="product-system-copy">
          <p className="product-section-kicker">System Overview</p>
          <h2>Built for Real-Time Crew Operations</h2>
          <p>
            CPMS connects every part of crew management into a single workflow from
            planning and scheduling to monitoring and reporting. Eliminate silos,
            reduce delays, and keep your operation running at peak efficiency.
          </p>

          <ul className="product-check-list">
            {overviewChecks.map((item) => (
              <li key={item}>
                <span aria-hidden="true">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <article className="workflow-card">
          <p>Operational Workflow</p>
          <div className="workflow-card-list">
            {workflowItems.map((item) => (
              <div className={`workflow-card-item ${item.tone}`} key={item.label}>
                <span>{item.number}</span>
                <strong>{item.label}</strong>
                <ArrowRight size={18} strokeWidth={1.8} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function ProductCoreModules() {
  return (
    <section className="product-modules-section">
      <div className="product-modules-inner">
        <div className="product-modules-heading">
          <p className="product-section-kicker">Core Modules</p>
          <h2>Everything You Need to Manage Crew</h2>
          <span>Five integrated modules covering the complete crew operations lifecycle.</span>
        </div>

        <div className="product-modules-showcase">
          <div className="module-list" aria-label="CPMS modules">
            {moduleItems.map((item, index) => (
              <article className={item.active ? 'module-list-item active' : 'module-list-item'} key={`${item.label}-${index}`}>
                <span className={`module-list-icon ${item.tone}`} aria-hidden="true">
                  <item.icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <h3>{item.label}</h3>
                  <small className={item.tone}>{item.tag}</small>
                </div>
                {item.active ? <ArrowRight size={18} strokeWidth={1.8} /> : null}
              </article>
            ))}
          </div>

          <article className="module-detail-card">
            <div className="module-detail-preview" aria-label="Crew management module preview placeholder" />
            <div className="module-detail-content">
              <span className="module-detail-icon" aria-hidden="true">
                <UsersRound size={22} strokeWidth={2} />
              </span>
              <div>
                <h3>Crew Management</h3>
                <p>
                  Centralized crew database with powerful filtering, search, and role-based
                  organization.
                </p>
                <ul>
                  {moduleBenefits.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ProductWorkflow() {
  return (
    <section className="workflow-section product-workflow-section">
      <div className="workflow-inner">
        <div className="workflow-heading">
          <p>How It Works</p>
          <h2>How CPMS Works</h2>
          <span>A structured operational loop from monitoring to optimization.</span>
        </div>

        <div className="workflow-steps">
          {productProcessSteps.map((step, index) => (
            <article className="workflow-step" key={step.title}>
              <span className={`workflow-icon ${step.tone}`} aria-hidden="true">
                <step.icon size={22} strokeWidth={2.1} />
              </span>
              <small>Step {index + 1}</small>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductIntegrations() {
  return (
    <section className="product-integrations-section">
      <div className="product-integrations-inner">
        <div className="product-integrations-copy">
          <p className="product-section-kicker">Integrations</p>
          <h2>Seamlessly Integrates with Your Systems</h2>
          <p>
            CPMS works with existing airline systems including flight operations
            platforms, HR systems, regulatory compliance tools, and data providers
            with a robust API layer for custom connections.
          </p>
          <div className="integration-labels" aria-label="Integration categories">
            {integrationLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>

        <div className="integration-grid">
          {integrations.map((integration) => (
            <article className="integration-card" key={integration.tag}>
              <span className={`integration-icon ${integration.tone}`} aria-hidden="true">
                <integration.icon size={18} strokeWidth={2} />
              </span>
              <div>
                <h3>
                  Header <small className={integration.tone}>{integration.tag}</small>
                </h3>
                <p>{integration.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductEfficiency() {
  return (
    <section className="product-efficiency-section">
      <div className="product-efficiency-inner">
        <div className="product-efficiency-heading">
          <p className="product-section-kicker">Why CPMS</p>
          <h2>Designed for Operational Efficiency</h2>
          <span>Measurable outcomes from day one.</span>
        </div>

        <div className="efficiency-grid">
          {efficiencyCards.map((card) => (
            <article className="efficiency-card" key={card.title}>
              <div className="efficiency-card-top">
                <span className={`efficiency-icon ${card.tone}`} aria-hidden="true">
                  <card.icon size={20} strokeWidth={2} />
                </span>
                <div>
                  <strong>{card.value}</strong>
                  <small>{card.metric}</small>
                </div>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Product() {
  return (
    <main>
      <ProductHero />
      <ProductSystemOverview />
      <ProductCoreModules />
      <ProductWorkflow />
      <ProductIntegrations />
      <ProductEfficiency />
    </main>
  );
}
