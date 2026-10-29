import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const GMAIL_LINK = 'https://mail.google.com/mail/?view=cm&fs=1&to=ankit.sengupta05@gmail.com';

const SOCIALS = [
  { label: 'Instagram',  href: 'https://www.instagram.com/editorcyclops/', icon: '◈' },
  { label: 'GitHub',     href: 'https://github.com/ankit-sengupta05',       icon: '⌥' },
  { label: 'Email',      href: GMAIL_LINK,                                   icon: '◉' },
];

const STATS = [
  { value: '5+',  label: 'Key Clients' },
  { value: '3+',  label: 'Yrs Editing' },
  { value: '100%',label: 'Satisfied'   },
];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const particles = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        a: Math.random() * 0.35 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,255,${p.a})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,229,255,${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="top" className="hero" aria-label="Editor Cyclops — Ankit Sengupta">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
      <div className="hero__orb hero__orb--tl" aria-hidden="true" />
      <div className="hero__orb hero__orb--br" aria-hidden="true" />

      <div className="container hero__content">
        <motion.div {...fadeUp(0.1)}>
          <span className="hero__available">
            <span className="hero__available-dot" aria-hidden="true" />
            Available for New Projects
          </span>
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          itemProp="name"
        >
          Ankit
          <br />
          <span className="hero__name-sub">Sengupta</span>
        </motion.h1>

        <motion.div className="hero__role" {...fadeUp(0.4)} aria-label="Specializations">
          <TypeAnimation
            sequence={[
              'Motion Designer & Video Editor',           2200,
              'Devin Jatho Style Specialist',             2200,
              'Short-Form Content Creator',               2200,
              'Cinematic Brand Storyteller',              2200,
              'After Effects & Premiere Pro Expert',      2200,
              'High-Retention Reels & Shorts Editor',     2200,
            ]}
            wrapper="span"
            speed={65}
            repeat={Infinity}
            style={{ display: 'block' }}
          />
        </motion.div>

        <motion.p className="hero__bio" {...fadeUp(0.5)}>
          Based in <strong>New Delhi, India</strong> — I operate as <strong>Editor Cyclops</strong>{' '}
          crafting cinematic short-form content, high-retention edits, and premium motion graphics
          for brands and creators who demand the best. I see content differently.
        </motion.p>

        <motion.div className="hero__actions" {...fadeUp(0.6)}>
          <a
            href="#work"
            className="btn btn-primary"
            onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
            aria-label="View featured work"
          >
            View Work
          </a>
          <a
            href={GMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            aria-label="Hire me"
          >
            Hire Me ↗
          </a>
        </motion.div>

        <motion.div className="hero__socials" {...fadeUp(0.75)} aria-label="Social links">
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={label}
              title={label}
            >
              <span aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </motion.div>

        <motion.div className="hero__stats" {...fadeUp(0.9)} aria-label="Key stats">
          {STATS.map(({ value, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}
