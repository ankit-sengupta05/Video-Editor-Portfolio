import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#work',     label: 'Work'     },
  { href: '#standard', label: 'Method'   },
  { href: '#about',    label: 'About'    },
  { href: '#contact',  label: 'Contact'  },
];

const GMAIL_LINK = 'https://mail.google.com/mail/?view=cm&fs=1&to=ankit.sengupta05@gmail.com';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
        role="banner"
      >
        <div className="navbar__inner">
          <a className="navbar__logo" href="#top" aria-label="Editor Cyclops — Home">
            <span className="navbar__logo-pip" />
            Editor&nbsp;Cyclops
          </a>

          <nav className="navbar__links" aria-label="Primary navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <button key={href} className="navbar__link" onClick={() => handleNav(href)}>
                {label}
              </button>
            ))}
          </nav>

          <div className="navbar__cta">
            <a
              href={GMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__hire-btn hide-mobile"
              aria-label="Hire Me"
            >
              Hire Me
            </a>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <span className={`hamburger__line ${menuOpen ? 'hamburger__line--open-1' : ''}`} />
              <span className={`hamburger__line ${menuOpen ? 'hamburger__line--open-2' : ''}`} />
              <span className={`hamburger__line ${menuOpen ? 'hamburger__line--open-3' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="mobile-menu__nav">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.button
                  key={href}
                  className="mobile-menu__link"
                  onClick={() => handleNav(href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {label}
                </motion.button>
              ))}
              <a
                href={GMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-menu__hire-btn"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
