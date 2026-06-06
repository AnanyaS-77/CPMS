import { NavLink } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

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
          <NavLink className="product-hero-button secondary" to="/#features">
            <Play size={15} strokeWidth={2.1} />
            View Live Product
          </NavLink>
        </div>

        <div className="product-hero-preview" aria-label="CPMS product preview placeholder" />
      </div>
    </section>
  );
}

export default function Product() {
  return (
    <main>
      <ProductHero />
    </main>
  );
}
