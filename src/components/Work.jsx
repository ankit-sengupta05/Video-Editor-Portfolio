import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import './Work.css';

const VIDS = [
  { id: '1tl2M-sRxM8EKM3FT3B8m_K0wS1iTaO_p', title: 'The Cyclops Standard', desc: 'Cinematic short-form storytelling with razor-sharp cuts and precision colour grading — the signature style.', cat: 'featured', date: '2025-12-01', duration: 'PT1M10S' },
  { id: '1vzexwyqV3GjlRpOYTBtrgo-Rx2bxwvvT', title: 'Devin Jatho Style Edit',  desc: 'Raw rhythm-locked cuts, deliberate colour contrast, beat-synced motion. Premiere Pro & After Effects.', cat: 'devin',    date: '2025-10-15', duration: 'PT1M30S' },
  { id: '1EOL0p7s_Hgxd_bI40RCJ_t8ToBkrSA3Y', title: 'Short-Form Showreel',      desc: 'Cinematic short-form motion design with dynamic transitions and hook-first editing — built to convert.', cat: 'short',    date: '2025-09-01', duration: 'PT0M59S' },
  { id: '1LwWn4T5LtjKuTO0mY92GBQhoZi6oan2g', title: 'Europe Industrial Rev',    desc: 'Long-form cinematic production with an industrial aesthetic and precise rhythmic pacing.', cat: 'long',     date: '2025-08-20', duration: 'PT3M15S' },
  { id: '1zt-pRELZKoZowVh1a1p_I2a9kDHPX5pn', title: 'Cinematic Precision Edit', desc: 'High-energy short-form edit with dynamic rhythm cuts and bold cinematic colour treatment.', cat: 'short',    date: '2025-11-05', duration: 'PT0M45S' },
  { id: '1XXkDvLQX0nvmRMZrRF7iOuKtkIdo3iu2', title: 'Motion Graphics Suite',    desc: 'Dynamic visuals and kinetic typography built entirely in After Effects.', cat: 'short',    date: '2025-07-12', duration: 'PT0M30S' },
];

export const videoSchemas = VIDS.map(v => ({
  "@type": "VideoObject",
  "name": v.title, "description": v.desc,
  "thumbnailUrl": "https://editorcyclops.vercel.app/og.jpg",
  "uploadDate": v.date, "duration": v.duration,
  "contentUrl": `https://drive.google.com/file/d/${v.id}/preview`,
  "embedUrl":   `https://drive.google.com/file/d/${v.id}/preview`,
}));

function VideoCard({ v, onClick }) {
  return (
    <motion.div
      className="vcard"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
      aria-label={v.title}
    >
      <div className="vcard__frame">
        <div className="vcard__shield" onClick={() => onClick(v)} role="button" aria-label={`Play ${v.title}`} />
        <video
          src={`https://drive.google.com/uc?export=download&id=${v.id}`}
          className="vcard__iframe"
          title={v.title}
          autoPlay
          loop
          muted
          playsInline
          aria-label={`Preview of ${v.title}`}
        />
        <div className="vcard__overlay" />
        <div className="vcard__play" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#000"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <div className={`vcard__badge ${v.cat === 'featured' ? 'vcard__badge--featured' : ''}`}>
          {v.cat === 'featured' ? '★ Featured' : v.cat === 'devin' ? '★ Devin Style' : v.cat === 'long' ? '🎬 Long-Form' : '⚡ Short-Form'}
        </div>
      </div>
      <div className="vcard__info">
        <div className="vcard__type">{v.cat.toUpperCase()}</div>
        <h3 className="vcard__title">{v.title}</h3>
        <p className="vcard__desc">{v.desc}</p>
      </div>
    </motion.div>
  );
}

export function Work() {
  const [modalVideo, setModalVideo] = useState(null);
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const update = () => setCarouselWidth(el.scrollWidth - el.offsetWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section id="work" className="section work" aria-label="Featured work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
        >
          <span className="section-label">Selected Work</span>
        </motion.div>

        <div className="work__header">
          <motion.h2
            className="work__title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          >
            Featured<br /><span style={{ WebkitTextStroke: '1px var(--cyan)', color: 'transparent' }}>Edits</span>
          </motion.h2>
          <div className="work__hint">← Drag to explore</div>
        </div>

        {/* Draggable Carousel */}
        <motion.div className="carousel-wrap" ref={carouselRef} whileTap={{ cursor: 'grabbing' }}>
          <motion.div
            className="carousel-track"
            drag="x"
            dragConstraints={{ right: 0, left: -carouselWidth }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          >
            {VIDS.map(v => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <VideoCard v={v} onClick={setModalVideo} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            className="modal-bg"
            onClick={() => setModalVideo(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-box"
              style={{ position: 'relative' }}
              initial={{ scale: 0.94, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 24, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setModalVideo(null)} aria-label="Close">
                ✕ Close [ESC]
              </button>
              <div className="modal-iframe-wrap">
                <iframe
                  className="modal-iframe"
                  src={`https://drive.google.com/file/d/${modalVideo.id}/preview?autoplay=1`}
                  allow="autoplay; fullscreen"
                  title={modalVideo.title}
                  aria-label={`Playing ${modalVideo.title}`}
                />
              </div>
              <div className="modal-info">
                <h3 className="modal-title">{modalVideo.title}</h3>
                <p className="modal-desc">{modalVideo.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
