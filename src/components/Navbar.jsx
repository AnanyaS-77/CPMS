import { NavLink } from 'react-router-dom';
import { Menu, Plane, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Product', path: '/product' },
  { label: 'Features', path: '/features' },
  { label: 'Solutions', path: '/#solutions' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink className="brand" to="/" onClick={() => setIsOpen(false)}>
          <span className="brand-icon" aria-hidden="true">
            <Plane size={18} />
          </span>
          <span>CPMS</span>
        </NavLink>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={isOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) =>
            item.path.includes('#') ? (
              <a key={item.label} className="nav-link" href={item.path} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="navbar-actions">
          <NavLink className="nav-button outline" to="/contact">
            Login
          </NavLink>
          <NavLink className="nav-button filled" to="/contact">
            Book a Demo
          </NavLink>
        </div>
      </div>
    </header>
  );
}
