import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Instagram, Play, ArrowRight, Menu, X, Scissors, MonitorPlay, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const VIDS = [
  { id: '1vzexwyqV3GjlRpOYTBtrgo-Rx2bxwvvT', title: 'Devin Jatho Style Edit', desc: 'Raw rhythm-locked cuts, deliberate colour contrast, beat-synced motion.', cat: 'devin', date: '2025-10-15', duration: 'PT1M30S' },
  { id: '1EOL0p7s_Hgxd_bI40RCJ_t8ToBkrSA3Y', title: 'Short-Form Showreel', desc: 'Cinematic short-form motion design with dynamic transitions and hook-first editing.', cat: 'short', date: '2025-09-01', duration: 'PT0M59S' },
  { id: '1LwWn4T5LtjKuTO0mY92GBQhoZi6oan2g', title: 'Europe Industrial Rev', desc: 'Long-form cinematic production with an industrial aesthetic and precise pacing.', cat: 'long', date: '2025-08-20', duration: 'PT3M15S' },
  { id: '1zt-pRELZKoZowVh1a1p_I2a9kDHPX5pn', title: 'Cinematic Precision Edit', desc: 'High-energy short-form edit with dynamic rhythm cuts and bold cinematic color.', cat: 'short', date: '2025-11-05', duration: 'PT0M45S' },
  { id: '1XXkDvLQX0nvmRMZrRF7iOuKtkIdo3iu2', title: 'Motion Graphics Suite', desc: 'Dynamic visuals and kinetic typography built in After Effects.', cat: 'short', date: '2025-07-12', duration: 'PT0M30S' },
  { id: '1tl2M-sRxM8EKM3FT3B8m_K0wS1iTaO_p', title: 'The Cyclops Standard', desc: 'Cinematic short-form storytelling with razor-sharp cuts and precision color grading.', cat: 'new', date: '2025-12-01', duration: 'PT1M10S' }
];

/* Custom Cursor Component */
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hover-target')) setIsHovering(true);
      else setIsHovering(false);
    };
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, width: 32, height: 32, borderRadius: '50%',
        border: '2px solid var(--cyan)', pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'difference'
      }}
      animate={{
        x: mousePosition.x - 16, y: mousePosition.y - 16,
        scale: isHovering ? 2.5 : 1, backgroundColor: isHovering ? 'var(--cyan)' : 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};

/* Magnetic Button Component */
const MagneticButton = ({ children, style, href, target, rel, ariaLabel, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };
  const reset = () => setPosition({ x: 0, y: 0 });

  const Wrapper = href ? motion.a : motion.button;
  return (
    <Wrapper
      href={href} target={target} rel={rel} aria-label={ariaLabel} onClick={onClick}
      ref={ref} onMouseMove={handleMouse} onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ ...style, display: 'inline-flex', cursor: 'none', border: href ? style.border : 'none', background: href ? style.background : 'transparent' }}
      className="hover-target"
    >
      {children}
    </Wrapper>
  );
};

/* Staggered Text Component */
const StaggeredText = ({ text, style, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em', ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ overflow: 'hidden', display: 'inline-block' }}
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: delay + i * 0.05, ease: [0.33, 1, 0.68, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

/* Mobile Menu Component */
const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4, ease: 'circOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 800, background: 'var(--bg2)',
            display: 'flex', flexDirection: 'column', padding: '100px 48px', gap: 32
          }}
        >
          <a href="#work" onClick={toggleMenu} style={styles.mobileNavLink}>Work</a>
          <a href="#standard" onClick={toggleMenu} style={styles.mobileNavLink}>The Standard</a>
          <a href="#contact" onClick={toggleMenu} style={styles.mobileNavLink}>Contact</a>
          <a href="mailto:ankit.sengupta05@gmail.com" onClick={toggleMenu} style={{ ...styles.mobileNavLink, color: 'var(--cyan)' }}>Hire Me</a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  const [modalVideo, setModalVideo] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // Generate VideoObject schemas
  const videoSchemas = VIDS.map(v => ({
    "@type": "VideoObject",
    "name": v.title,
    "description": v.desc,
    "thumbnailUrl": "https://editorcyclops.vercel.app/thumbnail.jpg",
    "uploadDate": v.date,
    "duration": v.duration,
    "contentUrl": `https://drive.google.com/file/d/${v.id}/preview`,
    "embedUrl": `https://drive.google.com/file/d/${v.id}/preview`
  }));

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Editor Cyclops — Ankit Sengupta | Motion Designer & Video Editor</title>
        <meta name="description" content="Ankit Sengupta is a Mumbai-based motion designer and video editor specializing in Devin Jatho style short-form content, cinematic brand videos, and high-retention edits." />
        <meta name="keywords" content="Video Editor, Motion Designer, Devin Jatho style, Premiere Pro, After Effects, Mumbai, Short-form editor, Cinematic Editing" />
        <link rel="canonical" href="https://editorcyclops.vercel.app/" />
        
        {/* Open Graph / Social */}
        <meta property="og:title" content="Editor Cyclops — Premium Motion Design & Editing" />
        <meta property="og:description" content="Cinematic video editing and motion design by Ankit Sengupta. Specializing in high-retention short-form content." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://editorcyclops.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "name": "Ankit Sengupta",
                "alternateName": "Editor Cyclops",
                "url": "https://editorcyclops.vercel.app/",
                "jobTitle": "Motion Designer & Video Editor",
                "knowsAbout": ["Video Editing", "Motion Graphics", "Adobe Premiere Pro", "Adobe After Effects", "Devin Jatho Style", "Short-Form Content", "Cinematic Editing"],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Mumbai",
                  "addressCountry": "IN"
                },
                "email": "mailto:ankit.sengupta05@gmail.com",
                "sameAs": ["https://www.instagram.com/editorcyclops/", "https://github.com/ankit-sengupta05"]
              },
              ...videoSchemas
            ]
          })}
        </script>
      </Helmet>

      <CustomCursor />

      {/* Navigation */}
      <motion.nav style={styles.nav} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <a href="#" style={styles.navLogo} aria-label="Home" className="hover-target">
          <span style={styles.navPip}></span>
          Editor Cyclops
        </a>
        <div style={styles.navLinks} className="hide-mobile">
          <a href="#work" style={styles.navLink} className="hover-target">Work</a>
          <a href="#standard" style={styles.navLink} className="hover-target">The Standard</a>
          <a href="#contact" style={styles.navLink} className="hover-target">Contact</a>
        </div>
        <MagneticButton href="mailto:ankit.sengupta05@gmail.com" style={styles.navCta} ariaLabel="Hire Me via Email">
          Hire Me
        </MagneticButton>
        <button className="hover-target" style={styles.burgerBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
          {isMobileMenuOpen ? <X size={28} color="var(--fg)" /> : <Menu size={28} color="var(--fg)" />}
        </button>
      </motion.nav>
      
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={() => setIsMobileMenuOpen(false)} />

      {/* Hero Section */}
      <section style={styles.hero}>
        <motion.div style={{ ...styles.heroOrb, y: yOrb }} />
        <motion.div style={{ ...styles.heroGrid, y: yBg }} />
        
        <div style={styles.heroContent}>
          <div style={styles.heroEyebrow}>
            <div style={styles.heroEyebrowLine}></div>
            Motion Designer & Video Editor
          </div>
          
          <h1 style={styles.heroName}>
            <StaggeredText text="ANKIT SENGUPTA" style={{ color: 'var(--fg)' }} />
            <StaggeredText text="EDITOR CYCLOPS" style={{ color: 'var(--cyan)', textShadow: '0 0 30px var(--cyan-glow)' }} delay={0.2} />
          </h1>
          
          <motion.p style={styles.heroDesc} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
            I craft <strong>high-retention short-form content</strong> and premium motion graphics. Specialized in raw rhythm cuts, deep contrast, and beat-locked energy.
          </motion.p>
          
          <motion.div style={styles.heroBtns} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
            <MagneticButton href="#work" style={styles.btnMain} ariaLabel="View Projects">
              View Projects <ArrowRight size={14} />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* The Cyclops Standard Section */}
      <section id="standard" className="sec" style={{ position: 'relative', zIndex: 10, background: 'var(--bg)' }}>
        <div className="sec-eyebrow">
          <span>Methodology</span><span className="el"></span>
        </div>
        
        <StaggeredText text="THE CYCLOPS STANDARD" style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(32px, 5vw, 72px)', marginBottom: 64, textTransform: 'uppercase', color: 'var(--fg)' }} />
        
        <div style={styles.standardGrid}>
          <motion.div style={styles.standardCard} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={styles.standardIcon}><Scissors size={32} color="var(--cyan)" /></div>
            <h3 style={styles.standardTitle}>Raw Rhythm Cuts</h3>
            <p style={styles.standardDesc}>Every cut is intentional. I edit to the exact frequency of the audio, ensuring the visual pacing locks perfectly with the beat, forcing the viewer to keep watching.</p>
          </motion.div>

          <motion.div style={styles.standardCard} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div style={styles.standardIcon}><MonitorPlay size={32} color="var(--cyan)" /></div>
            <h3 style={styles.standardTitle}>Deliberate Contrast</h3>
            <p style={styles.standardDesc}>I don't just color grade; I engineer visual hierarchy. Deep blacks and vibrant highlights pull the viewer's eye exactly where it needs to be every single frame.</p>
          </motion.div>

          <motion.div style={styles.standardCard} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <div style={styles.standardIcon}><Zap size={32} color="var(--cyan)" /></div>
            <h3 style={styles.standardTitle}>Beat-Synced Motion</h3>
            <p style={styles.standardDesc}>Typography and motion graphics aren't afterthoughts. They are built into the edit dynamically to emphasize hooks and boost audience retention organically.</p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase - DRAG CAROUSEL */}
      <section id="work" className="sec" style={{ background: 'var(--bg2)', position: 'relative', zIndex: 10, overflow: 'hidden' }}>
        <div className="sec-eyebrow">
          <span>Selected Work</span><span className="el"></span>
        </div>
        
        <StaggeredText text="FEATURED EDITS" style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(40px, 6vw, 84px)', marginBottom: 24, textTransform: 'uppercase' }} />
        <p style={{ color: 'var(--fg2)', marginBottom: 48, fontSize: 14 }}>&lt; Drag to explore &gt;</p>

        <motion.div ref={carouselRef} style={styles.carouselContainer} whileTap={{ cursor: "grabbing" }}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -carouselWidth }} 
            style={styles.carouselInner}
          >
            {VIDS.map((v, i) => (
              <motion.div 
                key={v.id} 
                style={styles.vcard} 
                className="hover-target"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, borderColor: 'var(--cyan)' }}
              >
                <div style={styles.vcardFrameWrap}>
                  <div style={styles.clickShield} onClick={() => setModalVideo(v)}></div>
                  <iframe src={`https://drive.google.com/file/d/${v.id}/preview?autoplay=1&mute=1`} style={styles.iframe} title={v.title} loading="lazy" aria-label={`Preview of ${v.title}`}></iframe>
                  <div style={styles.vbadge}>
                    {v.cat === 'devin' ? '★ Devin Style' : v.cat === 'new' ? '★ Featured' : '⚡ Edit'}
                  </div>
                </div>
                <div style={styles.vcardInfo}>
                  <h3 style={styles.vcardTitle}>{v.title}</h3>
                  <p style={styles.vcardDesc}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sec" style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.div style={{ ...styles.cg1, y: yOrb }} />
        
        <div style={styles.contactInner}>
          <div className="sec-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="el" style={{ flex: 'none', width: '10%' }}></span>
            <span>Ready to Create?</span>
            <span className="el" style={{ flex: 'none', width: '10%' }}></span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <StaggeredText text="LET'S WORK TOGETHER" style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(32px, 6vw, 84px)', textAlign: 'center', color: 'var(--cyan)' }} />
          </div>
          
          <motion.p style={styles.contactSub} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            Got a Reel, Short, or brand video in mind? Reach out and let's craft something that stands out.
          </motion.p>
          
          <motion.div style={styles.contactActions} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <MagneticButton href="mailto:ankit.sengupta05@gmail.com" style={styles.caction} ariaLabel="Send an Email">
              <div style={styles.cactionIcon}><Mail size={24} color="var(--cyan)" /></div>
              <div>
                <div style={styles.cactionLabel}>Send an Email</div>
                <div style={styles.cactionValue}>ankit.sengupta05@gmail.com</div>
              </div>
            </MagneticButton>
            
            <MagneticButton href="https://www.instagram.com/editorcyclops/" target="_blank" rel="noopener noreferrer" style={styles.caction} ariaLabel="DM on Instagram">
              <div style={styles.cactionIcon}><Instagram size={24} color="var(--cyan)" /></div>
              <div>
                <div style={styles.cactionLabel}>DM on Instagram</div>
                <div style={styles.cactionValue}>@editorcyclops</div>
              </div>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footLogo}><span style={styles.navPip}></span>Editor Cyclops</div>
        <div style={styles.footCopy}>© 2026 Ankit Sengupta · All rights reserved</div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div style={styles.modalBg} onClick={() => setModalVideo(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div 
              style={styles.modalBox}
              initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button style={styles.modalClose} className="hover-target" onClick={() => setModalVideo(null)} aria-label="Close Modal">✕ Close</button>
              <div style={styles.modalIframeWrap}>
                <iframe src={`https://drive.google.com/file/d/${modalVideo.id}/preview?autoplay=1`} allow="autoplay; fullscreen" style={styles.iframeFull} title={modalVideo.title} aria-label={`Watching ${modalVideo.title}`}></iframe>
              </div>
              <div style={styles.modalInfo}>
                <h3 style={{ ...styles.vcardTitle, fontSize: 'clamp(18px, 4vw, 24px)' }}>{modalVideo.title}</h3>
                <p style={{ ...styles.vcardDesc, fontSize: 15, marginTop: 8 }}>{modalVideo.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900, height: 72, 
    display: 'flex', alignItems: 'center', padding: '0 5%',
    background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)'
  },
  navLogo: { fontFamily: "'Archivo Black', sans-serif", fontSize: 14, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--fg)', display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' },
  navPip: { width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 12px var(--cyan)' },
  navLinks: { display: 'flex', gap: 40, position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
  navLink: { fontFamily: "'Cousine', monospace", fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--fg2)', textDecoration: 'none', transition: 'color 0.3s' },
  navCta: { fontFamily: "'Cousine', monospace", fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', background: 'var(--cyan)', color: '#000', padding: '12px 28px', borderRadius: 2, marginLeft: 'auto', textDecoration: 'none', fontWeight: 'bold' },
  burgerBtn: { background: 'none', border: 'none', marginLeft: 'auto', display: 'none', zIndex: 901 }, // Display logic handled via CSS classes conceptually or media queries (in index.css we hide-mobile on desktop and show burger on mobile)
  mobileNavLink: { fontFamily: "'Archivo Black', sans-serif", fontSize: 32, color: 'var(--fg)', textTransform: 'uppercase', textDecoration: 'none' },
  hero: { position: 'relative', overflow: 'hidden', background: 'var(--bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 5% 0' },
  heroGrid: { position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(ellipse 80% 100% at 50% 40%, black 20%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 100% at 50% 40%, black 20%, transparent 80%)' },
  heroOrb: { position: 'absolute', width: '50vw', height: '50vw', maxWidth: 600, maxHeight: 600, background: 'var(--cyan-dim)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none', mixBlendMode: 'screen', top: '20%', left: '30%' },
  heroContent: { position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(20px, 4vw, 32px)', width: '100%', maxWidth: 1200, margin: '0 auto' },
  heroEyebrow: { fontFamily: "'Cousine', monospace", fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', color: 'var(--cyan)', display: 'flex', alignItems: 'center', gap: 16 },
  heroEyebrowLine: { width: 40, height: 1, background: 'var(--cyan)' },
  heroName: { fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(40px, 8vw, 120px)', lineHeight: 0.95, letterSpacing: -2, marginBottom: 8, display: 'flex', flexDirection: 'column' },
  heroDesc: { fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 300, lineHeight: 1.8, color: 'var(--fg2)', maxWidth: 640 },
  heroBtns: { display: 'flex', gap: 20, marginTop: 24, flexWrap: 'wrap' },
  btnMain: { alignItems: 'center', gap: 12, background: 'var(--cyan)', color: '#000', padding: '16px 36px', borderRadius: 2, fontFamily: "'Cousine', monospace", fontSize: 12, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 'bold' },
  standardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 },
  standardCard: { padding: 40, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 4 },
  standardIcon: { marginBottom: 24, padding: 16, background: 'var(--cyan-dim)', display: 'inline-flex', borderRadius: 8 },
  standardTitle: { fontFamily: "'Archivo Black', sans-serif", fontSize: 24, marginBottom: 16, color: 'var(--fg)' },
  standardDesc: { fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7 },
  carouselContainer: { width: '100%', overflow: 'hidden', cursor: 'grab' },
  carouselInner: { display: 'flex', gap: 24, width: 'max-content' },
  vcard: { background: 'var(--bg)', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', width: 'clamp(300px, 80vw, 450px)', flexShrink: 0 },
  vcardFrameWrap: { position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000', overflow: 'hidden' },
  clickShield: { position: 'absolute', inset: 0, zIndex: 5, cursor: 'pointer' },
  iframe: { width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }, // Pointer events none so it doesn't trap drag
  vbadge: { position: 'absolute', top: 16, left: 16, fontFamily: "'Cousine', monospace", fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', padding: '6px 14px', borderRadius: 2, background: 'rgba(0,0,0,0.8)', border: '1px solid var(--cyan)', color: 'var(--cyan)', zIndex: 4 },
  vcardInfo: { padding: '24px', borderTop: '1px solid var(--border)' },
  vcardTitle: { fontFamily: "'Archivo Black', sans-serif", fontSize: 20, marginBottom: 10, color: 'var(--fg)', letterSpacing: -0.5 },
  vcardDesc: { fontSize: 14, color: 'var(--fg2)', lineHeight: 1.7 },
  cg1: { position: 'absolute', width: '60vw', height: '60vw', maxWidth: 800, maxHeight: 800, borderRadius: '50%', filter: 'blur(150px)', background: 'var(--cyan-dim)', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' },
  contactInner: { maxWidth: 860, margin: '0 auto', textAlign: 'center', zIndex: 2, position: 'relative' },
  contactSub: { fontSize: 'clamp(15px, 2.5vw, 18px)', color: 'var(--fg2)', maxWidth: 540, margin: '0 auto 56px', lineHeight: 1.8 },
  contactActions: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 },
  caction: { alignItems: 'center', gap: 20, padding: 'clamp(20px, 4vw, 32px)', color: 'var(--fg)', textAlign: 'left', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg3)', width: '100%' },
  cactionIcon: { width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cyan-dim)', flexShrink: 0 },
  cactionLabel: { fontFamily: "'Cousine', monospace", fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: 6 },
  cactionValue: { fontSize: 'clamp(13px, 2vw, 16px)', fontWeight: 500, color: 'var(--fg)' },
  footer: { padding: '32px 5%', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg2)', flexWrap: 'wrap', gap: 16 },
  footLogo: { fontFamily: "'Archivo Black', sans-serif", fontSize: 13, letterSpacing: 2.5, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10 },
  footCopy: { fontFamily: "'Cousine', monospace", fontSize: 11, letterSpacing: 1, color: 'var(--fg3)' },
  modalBg: { position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' },
  modalBox: { width: '100%', maxWidth: 1200, position: 'relative', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden' },
  modalClose: { position: 'absolute', top: 10, right: 10, zIndex: 10, background: 'rgba(0,0,0,0.7)', border: '1px solid var(--border)', color: 'var(--fg)', padding: '8px 16px', borderRadius: 2, fontFamily: "'Cousine', monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: 2 },
  modalIframeWrap: { width: '100%', aspectRatio: '16/9', background: '#000' },
  iframeFull: { width: '100%', height: '100%', border: 'none' },
  modalInfo: { padding: 'clamp(16px, 4vw, 32px)', borderTop: '1px solid var(--border)' }
};

/* Handle dynamic mobile menu styles inject */
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (max-width: 900px) {
      .hide-mobile { display: none !important; }
      nav button { display: block !important; }
      nav > a.hover-target[href^="mailto"] { display: none !important; }
    }
  `;
  document.head.appendChild(style);
}
