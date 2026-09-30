import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Work.css';

const SHORT_VIDS = [
  {
    id: '1tl2M-sRxM8EKM3FT3B8m_K0wS1iTaO_p',
    title: 'The Cyclops Standard',
    desc: 'Cinematic short-form storytelling with razor-sharp cuts and precision colour grading — the signature style.',
    cat: 'featured', date: '2025-12-01', duration: 'PT1M10S', format: 'portrait'
  },
  {
    id: '1vzexwyqV3GjlRpOYTBtrgo-Rx2bxwvvT',
    title: 'Devin Jatho Style Edit',
    desc: 'Raw rhythm-locked cuts, deliberate colour contrast, beat-synced motion. Premiere Pro & After Effects.',
    cat: 'devin', date: '2025-10-15', duration: 'PT1M30S', format: 'portrait'
  },
  {
    id: '1EOL0p7s_Hgxd_bI40RCJ_t8ToBkrSA3Y',
    title: 'Short-Form Showreel',
    desc: 'Cinematic short-form motion design with dynamic transitions and hook-first editing — built to convert.',
    cat: 'short', date: '2025-09-01', duration: 'PT0M59S', format: 'portrait'
  },
  {
    id: '1LwWn4T5LtjKuTO0mY92GBQhoZi6oan2g',
    title: 'Europe Industrial Rev',
    desc: 'Short-form cinematic production with an industrial aesthetic and precise rhythmic pacing.',
    cat: 'short', date: '2025-08-20', duration: 'PT3M15S', format: 'portrait'
  },
  {
    id: '1zt-pRELZKoZowVh1a1p_I2a9kDHPX5pn',
    title: 'Cinematic Precision Edit',
    desc: 'High-energy short-form edit with dynamic rhythm cuts and bold cinematic colour treatment.',
    cat: 'short', date: '2025-11-05', duration: 'PT0M45S', format: 'portrait'
  },
  {
    id: '1XXkDvLQX0nvmRMZrRF7iOuKtkIdo3iu2',
    title: 'Motion Graphics Suite',
    desc: 'Dynamic visuals and kinetic typography built entirely in After Effects.',
    cat: 'short', date: '2025-07-12', duration: 'PT0M30S', format: 'portrait'
  },
];

const LONG_VIDS = [
  {
    id: '1-y5B4JkjhcRauKmw3fgp8uphxvpjhT_3',
    title: 'Editing Workflow Explainer',
    desc: 'A comprehensive breakdown showcasing how I professionally edit videos, from raw cuts to the final cinematic polish.',
    cat: 'featured', date: '2026-10-01', duration: 'PT5M00S', format: 'landscape'
  }
];

export const videoSchemas = [...SHORT_VIDS, ...LONG_VIDS].map(v => ({
  "@type": "VideoObject",
  "name": v.title, "description": v.desc,
  "thumbnailUrl": `https://drive.google.com/thumbnail?id=${v.id}&sz=w800`,
  "uploadDate": v.date, "duration": v.duration,
  "contentUrl":  `https://drive.google.com/file/d/${v.id}/view`,
  "embedUrl":    `https://drive.google.com/file/d/${v.id}/preview`,
}));

function getCardClass(index, activeIndex, format) {
  const diff = index - activeIndex;
  let baseClass = `vcard vcard--${format}`;
  if (diff === 0)       return `${baseClass} vcard--active`;
  if (Math.abs(diff) === 1) return `${baseClass} vcard--side`;
  return `${baseClass} vcard--far`;
}

function VideoCarousel({ vids, title, outlineTitle, setModalVideo, unmutedId, setUnmutedId }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef    = useRef(null);
  const dragStart   = useRef(null);
  const isDragging  = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[activeIndex];
    if (!card) return;
    const trackRect  = track.parentElement.getBoundingClientRect();
    const cardRect   = card.getBoundingClientRect();
    const offset     = cardRect.left - trackRect.left - (trackRect.width - cardRect.width) / 2;
    track.scrollLeft += offset;
  }, [activeIndex]);

  const prev = useCallback(() => setActiveIndex(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setActiveIndex(i => Math.min(vids.length - 1, i + 1)), [vids.length]);

  const onDragStart = (e) => {
    dragStart.current  = e.touches ? e.touches[0].clientX : e.clientX;
    isDragging.current = false;
  };
  const onDragMove = (e) => {
    if (dragStart.current === null) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    if (Math.abs(x - dragStart.current) > 10) isDragging.current = true;
  };
  const onDragEnd = (e) => {
    if (!isDragging.current || dragStart.current === null) { dragStart.current = null; return; }
    const x    = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart.current - x;
    if (diff > 50)       next();
    else if (diff < -50) prev();
    dragStart.current  = null;
    isDragging.current = false;
  };

  return (
    <div className="carousel-section" style={{ marginBottom: '80px' }}>
      <div className="work__header">
        <motion.h2
          className="work__title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
        >
          {title}<br />
          <span className="work__title-outline">{outlineTitle}</span>
        </motion.h2>
      </div>

      <div className="carousel-nav">
        <div className="carousel-dots" role="tablist" aria-label="Video navigation">
          {vids.map((v, i) => (
            <button
              key={v.id}
              className={`carousel-dot ${i === activeIndex ? 'carousel-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to ${v.title}`}
              role="tab"
              aria-selected={i === activeIndex}
            />
          ))}
        </div>
        <div className="carousel-nav-hint">Drag to browse</div>
        <div className="carousel-arrows">
          <button className="carousel-arrow" onClick={prev} disabled={activeIndex === 0} aria-label="Previous video">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="carousel-arrow" onClick={next} disabled={activeIndex === vids.length - 1} aria-label="Next video">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="carousel-outer">
        <div className="carousel-viewport" role="region" aria-label="Video carousel" aria-live="polite">
          <div
            ref={trackRef}
            className="carousel-track-3d"
            style={{ overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onTouchStart={onDragStart}
            onTouchMove={onDragMove}
            onTouchEnd={onDragEnd}
          >
            {vids.map((v, i) => (
              <motion.div
                key={v.id}
                className={getCardClass(i, activeIndex, v.format)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                aria-label={v.title}
                aria-current={i === activeIndex ? 'true' : undefined}
              >
                <div className={`vcard__frame vcard__frame--${v.format}`}>
                  <div
                    className="vcard__shield"
                    onClick={() => { if (!isDragging.current) { setActiveIndex(i); setModalVideo(v); } }}
                    role="button"
                    aria-label={`Play ${v.title}`}
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && setModalVideo(v)}
                  />
                  <video
                    className="vcard__iframe"
                    src={`https://drive.google.com/uc?export=download&id=${v.id}`}
                    autoPlay
                    loop
                    muted={unmutedId !== v.id}
                    playsInline
                    title={v.title}
                    poster={`https://drive.google.com/thumbnail?id=${v.id}&sz=w800`}
                  />
                  <img
                    className="vcard__thumb"
                    src={`https://drive.google.com/thumbnail?id=${v.id}&sz=w800`}
                    alt={`Thumbnail for ${v.title}`}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    draggable="false"
                  />
                  <div className="vcard__overlay" />
                  <div className="vcard__play" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#000"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <div className={`vcard__badge ${v.cat === 'featured' ? 'vcard__badge--featured' : ''}`}>
                    {v.cat === 'featured' ? '★ Featured' : v.cat === 'devin' ? '★ Devin Style' : v.cat === 'long' ? '🎬 Long-Form' : '⚡ Short-Form'}
                  </div>
                  <button 
                    className="vcard__unmute-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setUnmutedId(unmutedId === v.id ? null : v.id);
                    }}
                    aria-label={unmutedId === v.id ? "Mute video" : "Unmute video"}
                  >
                    {unmutedId === v.id ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                    )}
                  </button>
                </div>
                <div className="vcard__info">
                  <div className="vcard__type">{v.cat.toUpperCase()}</div>
                  <h3 className="vcard__title">{v.title}</h3>
                  <p className="vcard__desc">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const [modalVideo, setModalVideo] = useState(null);
  const [unmutedId, setUnmutedId] = useState(null);

  useEffect(() => {
    if (modalVideo) setUnmutedId(null);
  }, [modalVideo]);

  return (
    <section id="work" className="section work" aria-label="Featured work">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.span>

        <VideoCarousel
          vids={SHORT_VIDS}
          title="Short-Form"
          outlineTitle="Edits"
          setModalVideo={setModalVideo}
          unmutedId={unmutedId}
          setUnmutedId={setUnmutedId}
        />

        <VideoCarousel
          vids={LONG_VIDS}
          title="Long-Form"
          outlineTitle="Edits"
          setModalVideo={setModalVideo}
          unmutedId={unmutedId}
          setUnmutedId={setUnmutedId}
        />
      </div>

      <AnimatePresence>
        {modalVideo && (
          <motion.div
            className="modal-bg"
            onClick={() => setModalVideo(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className={`modal-box modal-box--${modalVideo.format}`}
              initial={{ scale: 0.94, y: 24, opacity: 0 }}
              animate={{ scale: 1,    y: 0,  opacity: 1 }}
              exit={{ scale: 0.94, y: 24, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setModalVideo(null)} aria-label="Close modal">
                ✕ Close
              </button>
              <div className={`modal-iframe-wrap modal-iframe-wrap--${modalVideo.format}`}>
                <video
                  className="modal-iframe"
                  src={`https://drive.google.com/uc?export=download&id=${modalVideo.id}`}
                  autoPlay
                  controls
                  playsInline
                  title={modalVideo.title}
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
