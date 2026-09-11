import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work, videoSchemas } from './components/Work';
import { Standard } from './components/Standard';
import { About } from './components/About';

function Contact() {
  return (
    <section id="contact" className="section contact" aria-label="Contact">
      <div className="contact__orb" aria-hidden="true" />
      <div className="container contact__inner">
        <span className="section-label contact__eyebrow">Ready to Create?</span>
        <h2 className="contact__title">
          Let's Work<br />
          <span className="text-cyan">Together</span>
        </h2>
        <p className="contact__sub">
          Got a Reel, Short, or brand video in mind? Reach out and let's craft something that stands out.
        </p>
        <div className="contact__cards">
          <a href="mailto:ankit.sengupta05@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__card" aria-label="Email Me">
            <div className="contact__icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--cyan)" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <div className="contact__label">Send an Email</div>
              <div className="contact__value">ankit.sengupta05@gmail.com</div>
              <div className="contact__hint">Usually responds within 24 hours</div>
            </div>
            <div className="contact__arrow">→</div>
          </a>
          <a href="https://www.instagram.com/editorcyclops/" target="_blank" rel="noopener noreferrer" className="contact__card" aria-label="DM on Instagram">
            <div className="contact__icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--cyan)" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 11-7.072 7.072 5 5 0 017.072-7.072z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
              </svg>
            </div>
            <div>
              <div className="contact__label">DM on Instagram</div>
              <div className="contact__value">@editorcyclops</div>
              <div className="contact__hint">For quick chats & collaboration</div>
            </div>
            <div className="contact__arrow">→</div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '32px 5%', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-card)', flexWrap: 'wrap', gap: 16 }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 2, display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-primary)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan)' }}></span>
        Editor Cyclops
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 1, color: 'var(--text-muted)' }}>
        © 2026 Ankit Sengupta · All rights reserved
      </div>
    </footer>
  );
}

export default function App() {
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

      <Navbar />
      <Hero />
      <Work />
      <Standard />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
