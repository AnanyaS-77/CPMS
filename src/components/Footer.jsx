import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Plane, X, Zap } from 'lucide-react';

const footerLinks = [
  [
    { label: 'Products', path: '/product' },
    { label: 'Features', path: '/features' },
    { label: 'Solutions', path: '/#solutions' },
  ],
  [
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/contact' },
    { label: 'Contact', path: '/contact' },
  ],
];

const socialLinks = [
  { label: 'X', href: 'https://x.com', icon: X },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
];

function FooterLink({ link }) {
  if (link.path.includes('#')) {
    return (
      <a href={link.path} className="footer-link">
        {link.label}
      </a>
    );
  }

  return (
    <NavLink to={link.path} className="footer-link">
      {link.label}
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <div className="footer-cta-inner">
          <p className="footer-cta-pill">
            <Zap size={14} strokeWidth={2.4} />
            Ready to Transform Your Operations?
          </p>
          <h2 id="footer-cta-title">Take Control of Your Crew Operations</h2>
          <p>See how CPMS can streamline your airline operations.</p>
          <div className="footer-cta-actions">
            <NavLink className="footer-button primary" to="/contact">
              Get in Touch with us
            </NavLink>
            <NavLink className="footer-button secondary" to="/contact">
              Request Demo
            </NavLink>
          </div>
        </div>
      </section>

      <section className="footer-main" aria-label="Footer navigation">
        <div className="footer-main-inner">
          <div className="footer-top">
            <div className="footer-brand-block">
              <NavLink className="footer-brand" to="/">
                <span className="footer-brand-icon" aria-hidden="true">
                  <Plane size={17} />
                </span>
                <span>CPMS</span>
              </NavLink>
              <p>
                Crew Planning & Management System. The modern operations platform
                for airlines and aviation companies.
              </p>
            </div>

            <nav className="footer-links" aria-label="Footer links">
              {footerLinks.map((column, index) => (
                <div className="footer-link-column" key={index}>
                  {column.map((link) => (
                    <FooterLink link={link} key={link.label} />
                  ))}
                </div>
              ))}
            </nav>
          </div>

          <div className="footer-bottom">
            <p>© 2026 CPMS. All rights reserved.</p>
            <div className="footer-social" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  className="footer-social-link"
                  key={social.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <social.icon size={17} strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
