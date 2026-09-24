import { motion } from 'framer-motion';
import './About.css';

const SKILLS = [
  { label: 'Adobe Premiere Pro', pct: 96 },
  { label: 'Adobe After Effects', pct: 90 },
  { label: 'Color Grading',       pct: 88 },
  { label: 'Motion Graphics',     pct: 85 },
  { label: 'DaVinci Resolve',     pct: 45 },
  { label: 'Sound Design',        pct: 75 },
];

export function About() {
  return (
    <section id="about" className="section about" aria-label="About Ankit Sengupta">
      <div className="container">
        <div className="about__grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
          >
            <span className="section-label about__eyebrow">About Me</span>
            <h2 className="about__title">
              The Editor<br />
              <span className="text-cyan">Behind</span><br />
              The Cyclops
            </h2>
            <div className="about__body">
              <p>
                I'm <strong>Ankit Sengupta</strong>, a New Delhi-based motion designer and video editor
                operating as <strong>Editor Cyclops</strong> — because I see content differently than
                everyone else. I engineer attention, not just edits.
              </p>
              <p>
                My core expertise is <strong>short-form content</strong>: Reels, Shorts, brand clips,
                and motion pieces built for today's platforms. I'm fluent in{' '}
                <strong>Devin Jatho-style editing</strong> — raw rhythm cuts, deliberate colour
                contrast, and beat-locked energy that turns a clip into a cultural moment.
              </p>
              <p>
                For the right projects, I bring that same precision to{' '}
                <strong>long-form productions</strong> with the depth and storytelling they deserve.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about__skills"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16,1,0.3,1] }}
            aria-label="Skill levels"
          >
            {SKILLS.map((s, i) => (
              <div key={s.label} className="skill-bar">
                <div className="skill-bar__header">
                  <span className="skill-bar__label">{s.label}</span>
                  <span className="skill-bar__pct">{s.pct}%</span>
                </div>
                <div className="skill-bar__track">
                  <motion.div
                    className="skill-bar__fill"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: s.pct / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 + i * 0.08, ease: [0.16,1,0.3,1] }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
