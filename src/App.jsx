import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Instagram, Play, ArrowRight, Video, Film, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const VIDS = [
  {id:'1vzexwyqV3GjlRpOYTBtrgo-Rx2bxwvvT',title:'Devin Jatho Style Edit',desc:'Raw rhythm-locked cuts, deliberate colour contrast, beat-synced motion — a full Devin Jatho-inspired edit. Premiere Pro & After Effects.',cat:'devin'},
  {id:'1EOL0p7s_Hgxd_bI40RCJ_t8ToBkrSA3Y',title:'Short-Form Showreel',desc:'Cinematic short-form motion design with dynamic transitions, bold typography, and hook-first editing — built to convert.',cat:'short'},
  {id:'1LwWn4T5LtjKuTO0mY92GBQhoZi6oan2g',title:'Europe Industrial Rev',desc:'Long-form cinematic production with an industrial aesthetic — precise colour grading and rhythmic pacing.',cat:'long'},
  {id:'1zt-pRELZKoZowVh1a1p_I2a9kDHPX5pn',title:'Short-Form Cinematic Edit',desc:'High-energy short-form edit with precision pacing, dynamic rhythm cuts and bold cinematic colour treatment.',cat:'short'},
  {id:'1XXkDvLQX0nvmRMZrRF7iOuKtkIdo3iu2',title:'Motion Graphics Edit',desc:'Short-form motion graphics piece with dynamic visuals and kinetic typography built in After Effects.',cat:'short'},
  {id:'1F6xYj6SaPMVhnvG4ksX8eTLZAGN77sXp',title:'WIP Concept Edit',desc:'Experimental short-form concept — hook structure and motion design study. Work in progress.',cat:'short'},
  {id:'1tl2M-sRxM8EKM3FT3B8m_K0wS1iTaO_p',title:'Featured Cinematic Edit',desc:'The newest and finest from Editor Cyclops — cinematic short-form storytelling with razor-sharp cuts, precision colour grading, and hook-first structure built to stop the scroll.',cat:'new'}
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [modalVideo, setModalVideo] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <Helmet>
        <title>Editor Cyclops — Ankit Sengupta | Motion Designer & Video Editor</title>
        <meta name="description" content="I'm Ankit Sengupta, a Mumbai-based motion designer and video editor specializing in Devin Jatho style short-form content, Reels, Shorts, and cinematic brand videos." />
        <meta name="keywords" content="Video Editor, Motion Designer, Devin Jatho style, Premiere Pro, After Effects, Mumbai, Short-form editor, Reels editor, Freelance Video Editor" />
        <meta property="og:title" content="Editor Cyclops — Ankit Sengupta" />
        <meta property="og:description" content="Premium motion design and video editing services in Mumbai. Specialized in high-retention short-form and cinematic edits." />
        <meta property="og:type" content="profile" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ankit Sengupta",
              "alternateName": "Editor Cyclops",
              "url": "https://github.com/ankit-sengupta05",
              "jobTitle": "Motion Designer & Video Editor",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressCountry": "IN"
              },
              "email": "mailto:ankit.sengupta05@gmail.com",
              "sameAs": [
                "https://www.instagram.com/editorcyclops/"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Navigation */}
      <nav style={styles.nav}>
        <a href="#" style={styles.navLogo}>
          <span style={styles.navPip}></span>
          Editor Cyclops
        </a>
        <div style={styles.navLinks}>
          <a href="#work" style={styles.navLink}>Work</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>
        <a href="mailto:ankit.sengupta05@gmail.com" style={styles.navCta}>
          <span>Hire Me</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <motion.div style={{ ...styles.heroOrb, ...styles.ho1, y }} />
        <motion.div style={{ ...styles.heroOrb, ...styles.ho2, y }} />
        <motion.div style={{ ...styles.heroOrb, ...styles.ho3, y }} />
        
        <div style={styles.heroGrid}></div>
        
        <motion.div 
          style={styles.heroContent}
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <div style={styles.heroText}>
            <motion.div variants={itemVariants} style={styles.heroEyebrow}>
              <div style={styles.heroEyebrowLine}></div>
              Motion Designer & Video Editor
            </motion.div>
            
            <motion.h1 variants={itemVariants} style={styles.heroName}>
              ANKIT SENGUPTA
              <span style={styles.heroNameGrad}>EDITOR CYCLOPS</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} style={styles.heroDesc}>
              I craft <strong>high-retention short-form content</strong>, cinematic long-form videos, and premium motion graphics. Specialized in the <strong>Devin Jatho style</strong>—raw rhythm cuts, deep contrast, and beat-locked energy.
            </motion.p>
            
            <motion.div variants={itemVariants} style={styles.heroBtns}>
              <a href="#work" style={styles.btnMain}>View Projects <ArrowRight size={14} /></a>
              <a href="mailto:ankit.sengupta05@gmail.com" style={styles.btnGhost}>Hire Me</a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Showcase */}
      <section id="work" className="sec" style={{ background: 'var(--bg2)' }}>
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="sec-eyebrow" style={{ color: 'var(--pink)' }}>
            <span>Selected Work</span><span className="el"></span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="sec-h2" style={{ marginBottom: 48 }}>
            FEATURED <span style={{ color: 'var(--pink)' }}>EDITS</span>
          </motion.h2>

          <motion.div variants={itemVariants} style={styles.vgrid}>
            {VIDS.map((v, i) => (
              <motion.div 
                key={v.id} 
                style={styles.vcard} 
                onClick={() => setModalVideo(v)}
                whileHover={{ y: -5, borderColor: 'var(--pink)', scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={styles.vcardFrameWrap}>
                  <iframe src={`https://drive.google.com/file/d/${v.id}/preview`} style={styles.iframe} title={v.title} loading="lazy"></iframe>
                  <div style={styles.vplayOverlay}></div>
                  <div style={styles.vplay}><Play fill="white" size={24} /></div>
                  <div style={{...styles.vbadge, ...(v.cat === 'new' ? styles.vbNew : v.cat === 'devin' ? styles.vbDevin : styles.vbShort)}}>
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
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={styles.contactInner}
        >
          <motion.div variants={itemVariants} style={styles.ctag}>
            Ready to Create?
          </motion.div>
          <motion.h2 variants={itemVariants} style={styles.contactH2}>
            LET'S <span style={styles.cg}>WORK</span> TOGETHER
          </motion.h2>
          <motion.p variants={itemVariants} style={styles.contactSub}>
            Got a Reel, Short, or brand video in mind? Reach out and let's craft something that stands out.
          </motion.p>
          
          <motion.div variants={itemVariants} style={styles.contactActions}>
            <a href="mailto:ankit.sengupta05@gmail.com" style={{...styles.caction, borderImage: 'linear-gradient(90deg, var(--pink), var(--purple)) 1'}}>
              <div style={styles.cactionIcon}><Mail size={24} color="var(--pink)" /></div>
              <div>
                <div style={styles.cactionLabel}>Send an Email</div>
                <div style={styles.cactionValue}>ankit.sengupta05@gmail.com</div>
              </div>
            </a>
            <a href="https://www.instagram.com/editorcyclops/" target="_blank" rel="noopener noreferrer" style={styles.caction}>
              <div style={{...styles.cactionIcon, background: 'rgba(253,29,29,0.1)'}}><Instagram size={24} color="#fd1d1d" /></div>
              <div>
                <div style={styles.cactionLabel}>DM on Instagram</div>
                <div style={styles.cactionValue}>@editorcyclops</div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footLogo}><span style={styles.navPip}></span>Editor Cyclops</div>
        <div style={styles.footCopy}>© 2026 Ankit Sengupta · All rights reserved</div>
      </footer>

      {/* Video Modal */}
      {modalVideo && (
        <div style={styles.modalBg} onClick={() => setModalVideo(null)}>
          <motion.div 
            style={styles.modalBox}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button style={styles.modalClose} onClick={() => setModalVideo(null)}>✕ Close</button>
            <div style={styles.modalIframeWrap}>
              <iframe src={`https://drive.google.com/file/d/${modalVideo.id}/preview?autoplay=1`} allow="autoplay; fullscreen" style={styles.iframeFull}></iframe>
            </div>
            <div style={styles.modalInfo}>
              <h3 style={styles.vcardTitle}>{modalVideo.title}</h3>
              <p style={styles.vcardDesc}>{modalVideo.desc}</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900, height: 64, 
    display: 'flex', alignItems: 'center', padding: '0 48px',
    background: 'rgba(6,6,13,0.96)', backdropFilter: 'blur(24px)', borderBottom: '1px solid var(--border)'
  },
  navLogo: {
    fontFamily: "'Archivo Black', sans-serif", fontSize: 14, letterSpacing: 3, textTransform: 'uppercase',
    color: 'var(--fg)', display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none'
  },
  navPip: {
    width: 9, height: 9, borderRadius: '50%', background: 'linear-gradient(135deg, var(--pink), var(--purple))',
    boxShadow: '0 0 10px var(--pink)'
  },
  navLinks: {
    display: 'flex', gap: 32, position: 'absolute', left: '50%', transform: 'translateX(-50%)'
  },
  navLink: {
    fontFamily: "'Cousine', monospace", fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase',
    color: 'var(--fg2)', textDecoration: 'none'
  },
  navCta: {
    fontFamily: "'Cousine', monospace", fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase',
    background: 'var(--pink)', color: '#fff', padding: '10px 24px', borderRadius: 2, marginLeft: 'auto',
    textDecoration: 'none', transition: 'box-shadow 0.3s'
  },
  hero: {
    position: 'relative', overflow: 'hidden', background: 'var(--bg)', minHeight: '100vh', 
    display: 'flex', alignItems: 'center', padding: '100px 48px 0'
  },
  heroOrb: {
    position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', mixBlendMode: 'screen'
  },
  ho1: { width: 560, height: 560, background: 'rgba(247,37,133,0.16)', top: -80, right: -60 },
  ho2: { width: 360, height: 360, background: 'rgba(0,229,255,0.12)', bottom: 60, right: 220 },
  ho3: { width: 280, height: 280, background: 'rgba(155,93,229,0.14)', top: '50%', left: '52%' },
  heroContent: {
    position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr', gap: 48, width: '100%'
  },
  heroEyebrow: {
    fontFamily: "'Cousine', monospace", fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
    color: 'var(--pink)', display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24
  },
  heroEyebrowLine: { width: 28, height: 1, background: 'var(--pink)' },
  heroName: {
    fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: 1, 
    letterSpacing: -2, marginBottom: 16
  },
  heroNameGrad: {
    display: 'block', background: 'linear-gradient(90deg, var(--cyan) 0%, var(--purple) 50%, var(--pink) 100%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
  },
  heroDesc: {
    fontSize: 16, fontWeight: 300, lineHeight: 1.82, color: 'var(--fg2)', maxWidth: 600, marginBottom: 36
  },
  heroBtns: { display: 'flex', gap: 16 },
  btnMain: {
    display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg, var(--pink), var(--purple))',
    color: '#fff', padding: '16px 36px', borderRadius: 2, fontFamily: "'Cousine', monospace", fontSize: 11,
    letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 32px rgba(247,37,133,0.3)'
  },
  btnGhost: {
    display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(255,255,255,0.15)',
    color: 'var(--fg)', padding: '16px 36px', borderRadius: 2, fontFamily: "'Cousine', monospace", fontSize: 11,
    letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none'
  },
  vgrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 16 },
  vcard: {
    background: 'var(--bg3)', borderRadius: 4, overflow: 'hidden', cursor: 'pointer',
    border: '1px solid var(--border)', display: 'flex', flexDirection: 'column'
  },
  vcardFrameWrap: { position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000', overflow: 'hidden' },
  iframe: { width: '100%', height: '100%', border: 'none', pointerEvents: 'none' },
  vplayOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,13,0.8) 0%, transparent 100%)' },
  vplay: {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 64, height: 64,
    borderRadius: '50%', background: 'rgba(247,37,133,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  vbadge: {
    position: 'absolute', top: 14, left: 14, fontFamily: "'Cousine', monospace", fontSize: 9, letterSpacing: 2,
    textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2, backdropFilter: 'blur(6px)'
  },
  vbShort: { background: 'rgba(247,37,133,0.9)', color: '#fff' },
  vbNew: { background: 'linear-gradient(135deg, var(--pink), var(--purple))', color: '#fff' },
  vbDevin: { background: 'rgba(255,190,11,0.95)', color: '#000' },
  vcardInfo: { padding: '18px 20px', borderTop: '1px solid var(--border)' },
  vcardTitle: { fontFamily: "'Archivo Black', sans-serif", fontSize: 17, marginBottom: 8, color: 'var(--fg)' },
  vcardDesc: { fontSize: 13, color: 'var(--fg3)', lineHeight: 1.6 },
  contactInner: { maxWidth: 820, margin: '0 auto', textAlign: 'center', zIndex: 2, position: 'relative' },
  ctag: { fontFamily: "'Cousine', monospace", fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: 14 },
  contactH2: { fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(44px, 7vw, 108px)', lineHeight: 0.88, marginBottom: 14 },
  cg: { background: 'linear-gradient(90deg, var(--pink), var(--orange), var(--yellow), var(--lime))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  contactSub: { fontSize: 16, color: 'var(--fg2)', maxWidth: 500, margin: '0 auto 48px' },
  contactActions: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  caction: {
    display: 'flex', alignItems: 'center', gap: 18, padding: '28px 32px', textDecoration: 'none', color: 'var(--fg)',
    border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg3)', transition: 'all 0.3s'
  },
  cactionIcon: { width: 52, height: 52, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(247,37,133,0.1)' },
  cactionLabel: { fontFamily: "'Cousine', monospace", fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: 4 },
  cactionValue: { fontSize: 15, fontWeight: 500 },
  footer: {
    padding: '26px 48px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', background: 'var(--bg)'
  },
  footLogo: { fontFamily: "'Archivo Black', sans-serif", fontSize: 13, letterSpacing: 2.5, textTransform: 'uppercase' },
  footCopy: { fontFamily: "'Cousine', monospace", fontSize: 10, letterSpacing: 1, color: 'var(--fg3)' },
  modalBg: {
    position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(3,3,10,0.97)', backdropFilter: 'blur(20px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16
  },
  modalBox: { width: '100%', maxWidth: 1100, position: 'relative', background: 'var(--bg2)', borderRadius: 8, overflow: 'hidden' },
  modalClose: {
    position: 'absolute', top: 16, right: 16, zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none',
    color: 'white', padding: '8px 16px', borderRadius: 4, cursor: 'pointer', fontFamily: "'Cousine', monospace"
  },
  modalIframeWrap: { width: '100%', aspectRatio: '16/9', background: '#000' },
  iframeFull: { width: '100%', height: '100%', border: 'none' },
  modalInfo: { padding: 24 }
};
