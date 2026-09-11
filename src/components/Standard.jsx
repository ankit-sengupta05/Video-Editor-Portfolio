import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Standard.css';

const MARQUEE_ITEMS = [
  'Raw Rhythm Cuts', 'Deliberate Contrast', 'Beat-Synced Motion',
  'Color Science', 'Hook-First Editing', 'Cinematic Storytelling',
  'Motion Graphics', 'Premiere Pro', 'After Effects', 'DaVinci Resolve',
];

const PRINCIPLES = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="var(--cyan)" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: 'Raw Rhythm Cuts',
    desc: 'Every cut is intentional — placed at the exact beat frequency. I engineer visual pacing that locks with audio and forces the viewer to keep watching, frame by frame.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="var(--cyan)" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Deliberate Contrast',
    desc: "I don't just color grade — I engineer visual hierarchy. Deep blacks and vibrant highlights guide the viewer's eye to exactly the right place at exactly the right moment.",
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="var(--cyan)" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Beat-Synced Motion',
    desc: 'Typography and motion graphics are built into the edit as a structural layer — not decoration. Kinetic energy tuned to maximize audience retention and hook delivery.',
  },
];

export function Standard() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY   = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const titleX = useTransform(scrollYProgress, [0, 1], ['-2%', '2%']);

  return (
    <section id="standard" className="section standard" ref={ref} aria-label="The Cyclops Standard">
      {/* Parallax ghost text */}
      <motion.div className="standard__bg-text" style={{ y: bgY }} aria-hidden="true">
        CYCLOPS
      </motion.div>

      {/* Marquee ticker */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      <div className="container standard__content">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          Methodology
        </motion.span>

        <motion.h2
          className="standard__title"
          style={{ x: titleX }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
        >
          The Cyclops<br />
          <span className="text-cyan">Standard</span>
        </motion.h2>

        <div className="standard__grid">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.num}
              className="standard__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16,1,0.3,1] }}
            >
              <span className="standard__num" aria-hidden="true">{p.num}</span>
              <div className="standard__icon">{p.icon}</div>
              <h3 className="standard__card-title">{p.title}</h3>
              <p className="standard__card-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
