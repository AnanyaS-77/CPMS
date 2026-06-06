import { NavLink } from 'react-router-dom';
import {
  Activity,
  BarChart3,
  BellRing,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Clock3,
  DollarSign,
  Eye,
  LayoutDashboard,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  Users,
  UsersRound,
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

const crewRows = [
  ['A. Smith', 'Captain', 'JFK', 'Active', '72h'],
  ['M. Patel', 'First Officer', 'LAX', 'Standby', '64h'],
  ['K. Lee', 'Purser', 'ORD', 'Active', '58h'],
  ['A. Silva', 'Cabin Crew', 'MIA', 'Rostered', '55h'],
  ['D. Brown', 'Captain', 'JFK', 'Active', '80h'],
  ['S. Kim', 'First Officer', 'SFO', 'Leave', '32h'],
  ['L. Torres', 'Senior Cabin', 'LAX', 'Active', '68h'],
  ['R. Chen', 'Cabin Crew', 'ORD', 'Training', '24h'],
];

const calendarDays = Array.from({ length: 30 }, (_, index) => index + 1);

const calendarMarks = {
  2: 'cyan',
  3: 'cyan',
  4: 'cyan',
  7: 'blue',
  8: 'blue',
  10: 'green',
  11: 'green',
  12: 'green',
  15: 'yellow',
  16: 'yellow',
  18: 'cyan',
  19: 'cyan',
  22: 'blue',
  23: 'blue',
  24: 'blue',
};

const utilizationRows = [
  ['Cockpit', 92, 'navy'],
  ['Cabin', 80, 'cyan'],
  ['Ground', 66, 'navy'],
  ['Ops', 56, 'cyan'],
  ['Training', 43, 'navy'],
];

const workflowSteps = [
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

const airlineReasons = [
  'Faster scheduling decisions',
  'Reduced manual workload',
  'Improved crew utilization',
  'Compliance with aviation regulations',
  'Real-time operational control',
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

function StatusBadge({ status }) {
  return <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>;
}

function DashboardOverviewCard() {
  return (
    <article className="preview-card dashboard-card">
      <div className="preview-card-header">
        <div>
          <Activity size={18} />
          <h3>Dashboard Overview</h3>
        </div>
      </div>
      <div className="line-chart" aria-label="Flight and crew activity trends over the past 7 days">
        <div className="line-scale">
          <span>200</span>
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>
        <div className="line-plot">
          <span className="line-grid l1" />
          <span className="line-grid l2" />
          <span className="line-grid l3" />
          <span className="line-grid l4" />
          <span className="line-grid l5" />
          <svg viewBox="0 0 520 190" role="img" aria-hidden="true">
            <path
              className="trend-line navy-line"
              d="M0 66 C60 50 92 56 118 54 C160 58 176 98 218 84 C256 70 256 20 306 22 C384 24 444 34 520 60"
            />
            <path
              className="trend-line cyan-line"
              d="M0 146 C66 139 100 142 136 142 C180 144 196 154 230 150 C278 142 284 132 330 134 C392 136 455 140 520 145"
            />
          </svg>
          <div className="line-days">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>
      </div>
      <p>Flight and crew activity trends over the past 7 days.</p>
    </article>
  );
}

function CrewListCard() {
  return (
    <article className="preview-card crew-list-card">
      <div className="preview-card-header">
        <div>
          <Users size={18} />
          <h3>Crew List</h3>
        </div>
      </div>
      <table className="crew-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Base</th>
            <th>Status</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {crewRows.map(([name, role, base, status, hours]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{role}</td>
              <td>{base}</td>
              <td>
                <StatusBadge status={status} />
              </td>
              <td>{hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Full crew database with real-time status and duty tracking.</p>
    </article>
  );
}

function ScheduleCalendarCard() {
  return (
    <article className="preview-card calendar-card">
      <div className="preview-card-header">
        <div>
          <CalendarDays size={18} />
          <h3>Schedule Calendar</h3>
        </div>
        <span>April 2026</span>
      </div>
      <div className="calendar-grid" aria-label="April 2026 schedule calendar">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <span className="weekday" key={`${day}-${index}`}>
            {day}
          </span>
        ))}
        <span className="calendar-empty" />
        <span className="calendar-empty" />
        {calendarDays.map((day) => (
          <span className="calendar-day" key={day}>
            {day}
            {calendarMarks[day] ? <i className={`day-mark ${calendarMarks[day]}`} /> : null}
          </span>
        ))}
      </div>
      <p>Visual scheduling calendar with color-coded duty blocks and conflict detection.</p>
    </article>
  );
}

function DepartmentUtilizationCard() {
  return (
    <article className="preview-card department-card">
      <div className="preview-card-header">
        <div>
          <BarChart3 size={18} />
          <h3>Analytics — Utilization by Department</h3>
        </div>
      </div>
      <div className="horizontal-chart" aria-label="Utilization by department">
        <div className="horizontal-grid">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        {utilizationRows.map(([label, value, color]) => (
          <div className="horizontal-row" key={label}>
            <span>{label}</span>
            <strong className={color} style={{ '--width': `${value}%` }} />
          </div>
        ))}
        <div className="horizontal-scale">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>
      <p>Department-level crew utilization percentages for performance optimization.</p>
    </article>
  );
}

function ProductPreview() {
  return (
    <section className="product-preview" id="features">
      <div className="product-preview-inner">
        <div className="product-preview-heading">
          <p>Product Preview</p>
          <h2>Built for Real Operations</h2>
          <span>A purpose-built platform that mirrors how your operations team actually works.</span>
        </div>

        <div className="preview-grid">
          <DashboardOverviewCard />
          <CrewListCard />
          <ScheduleCalendarCard />
          <DepartmentUtilizationCard />
        </div>
      </div>
    </section>
  );
}

function HowCpmsWorks() {
  return (
    <section className="workflow-section">
      <div className="workflow-inner">
        <div className="workflow-heading">
          <p>How It Works</p>
          <h2>How CPMS Works</h2>
          <span>A structured operational loop from monitoring to optimization.</span>
        </div>

        <div className="workflow-steps">
          {workflowSteps.map((step, index) => (
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

function AirlineChoice() {
  return (
    <section className="airline-choice-section" id="solutions">
      <div className="airline-choice-inner">
        <div className="airline-choice-copy">
          <p className="choice-kicker">Why CPMS</p>
          <h2>Why Airlines Choose CPMS</h2>
          <p>
            CPMS empowers operations teams to move faster, reduce errors, and stay
            compliant. All from a single, unified platform trusted by aviation leaders
            worldwide.
          </p>

          <div className="choice-stat">
            <strong>40%</strong>
            <span>Reduction in scheduling time</span>
          </div>
        </div>

        <div className="choice-list" aria-label="CPMS operational advantages">
          {airlineReasons.map((reason) => (
            <div className="choice-list-item" key={reason}>
              <span aria-hidden="true">
                <CheckCircle2 size={16} strokeWidth={2.5} />
              </span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
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
      <ProductPreview />
      <HowCpmsWorks />
      <AirlineChoice />
    </main>
  );
}
