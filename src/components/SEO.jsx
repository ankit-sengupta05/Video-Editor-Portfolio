import { Helmet } from 'react-helmet-async';

const SITE_URL     = 'https://editorcyclops.vercel.app';
const SITE_NAME    = 'Editor Cyclops — Ankit Sengupta';
const GITHUB_IMG   = 'https://github.com/ankit-sengupta05.png';

const TITLE       = 'Editor Cyclops — Ankit Sengupta | Video Editor & Motion Designer New Delhi';
const DESCRIPTION = 'Ankit Sengupta (Editor Cyclops) is a New Delhi-based video editor and motion designer specializing in Devin Jatho style short-form content, high-retention Reels and Shorts, cinematic brand videos, After Effects motion graphics, and Premiere Pro color grading. Hire a top freelance video editor in New Delhi, India.';

const KEYWORDS = [
  /* Brand */
  'Editor Cyclops', 'Ankit Sengupta', 'ankit.sengupta05',
  'editorcyclops', 'Editor Cyclops New Delhi',
  /* Role */
  'Video Editor New Delhi', 'Motion Designer New Delhi', 'Freelance Video Editor India',
  'Video Editor India', 'Motion Designer India', 'Video Editor for Hire',
  'Best Video Editor New Delhi', 'Professional Video Editor',
  /* Style-specific — high-intent queries */
  'Devin Jatho Style Editor', 'Devin Jatho Video Editor', 'Devin Jatho Edit',
  'Short-Form Video Editor', 'Reels Editor New Delhi', 'YouTube Shorts Editor India',
  'High Retention Video Editor', 'Hook First Editing', 'Beat Sync Video Editor',
  /* Tools */
  'Premiere Pro Editor India', 'After Effects Motion Designer India',
  'DaVinci Resolve Colorist', 'Cinematic Color Grading',
  /* Content type */
  'Cinematic Video Editor', 'Brand Video Editor', 'Social Media Video Editor',
  'Showreel Editor', 'Motion Graphics Designer India',
  /* Local / GEO */
  'Video Editor in New Delhi', 'Freelance Editor Delhi',
  'Video Production Services New Delhi', 'Hire Video Editor Online India',
  /* Related searches */
  'Best Reels Editor 2025', 'YouTube Shorts Specialist India',
  'Content Creator Editor', 'Instagram Reels Editor',
].join(', ');

const VIDEOS = [
  { id: '1tl2M-sRxM8EKM3FT3B8m_K0wS1iTaO_p', name: 'The Cyclops Standard',    desc: 'Cinematic short-form storytelling with razor-sharp cuts and precision colour grading.',                           date: '2025-12-01', duration: 'PT1M10S' },
  { id: '1vzexwyqV3GjlRpOYTBtrgo-Rx2bxwvvT', name: 'Devin Jatho Style Edit',  desc: 'Raw rhythm-locked cuts, deliberate colour contrast, beat-synced motion. Premiere Pro & After Effects.',         date: '2025-10-15', duration: 'PT1M30S' },
  { id: '1EOL0p7s_Hgxd_bI40RCJ_t8ToBkrSA3Y', name: 'Short-Form Showreel',     desc: 'Cinematic short-form motion design with dynamic transitions and hook-first editing.',                           date: '2025-09-01', duration: 'PT0M59S' },
  { id: '1LwWn4T5LtjKuTO0mY92GBQhoZi6oan2g', name: 'Europe Industrial Rev',   desc: 'Long-form cinematic production with an industrial aesthetic and precise rhythmic pacing.',                     date: '2025-08-20', duration: 'PT3M15S' },
  { id: '1zt-pRELZKoZowVh1a1p_I2a9kDHPX5pn', name: 'Cinematic Precision Edit', desc: 'High-energy short-form edit with dynamic rhythm cuts and bold cinematic colour treatment.',                   date: '2025-11-05', duration: 'PT0M45S' },
  { id: '1XXkDvLQX0nvmRMZrRF7iOuKtkIdo3iu2', name: 'Motion Graphics Suite',   desc: 'Dynamic visuals and kinetic typography built entirely in After Effects.',                                      date: '2025-07-12', duration: 'PT0M30S' },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    /* ── Person ── */
    {
      '@type':       'Person',
      '@id':         `${SITE_URL}/#person`,
      name:          'Ankit Sengupta',
      alternateName: ['Editor Cyclops', 'editorcyclops', 'ankit-sengupta05'],
      description:   'New Delhi-based freelance video editor and motion designer. Specializes in Devin Jatho style short-form content, high-retention Reels, brand videos, and After Effects motion graphics.',
      url:           SITE_URL,
      email:         'ankit.sengupta05@gmail.com',
      image:         GITHUB_IMG,
      jobTitle:      'Motion Designer & Video Editor',
      knowsAbout: [
        'Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design',
        'Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve',
        'Devin Jatho Style Editing', 'Short-Form Content', 'Cinematic Editing',
        'High-Retention Content', 'Social Media Video Production',
        'Reels Editing', 'YouTube Shorts Editing', 'Brand Video Production',
      ],
      address: {
        '@type':           'PostalAddress',
        addressLocality:   'New Delhi',
        addressRegion:     'Delhi',
        addressCountry:    'IN',
        postalCode:        '400001',
      },
      sameAs: [
        'https://www.instagram.com/editorcyclops/',
        'https://github.com/ankit-sengupta05',
        'https://linkedin.com/in/Sengupta-ankit',
      ],
    },

    /* ── WebSite ── */
    {
      '@type':       'WebSite',
      '@id':         `${SITE_URL}/#website`,
      url:           SITE_URL,
      name:          SITE_NAME,
      description:   DESCRIPTION,
      publisher:     { '@id': `${SITE_URL}/#person` },
      inLanguage:    'en-IN',
      potentialAction: {
        '@type':  'SearchAction',
        target:   { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },

    /* ── LocalBusiness / Service ── covers local GEO queries */
    {
      '@type':           ['LocalBusiness', 'ProfessionalService'],
      '@id':             `${SITE_URL}/#business`,
      name:              'Editor Cyclops — Ankit Sengupta',
      image:             GITHUB_IMG,
      url:               SITE_URL,
      email:             'ankit.sengupta05@gmail.com',
      description:       'Premium freelance video editing and motion design services in New Delhi, India. Specializing in Devin Jatho style short-form content, brand videos, Reels, and cinematic productions.',
      priceRange:        '₹₹',
      currenciesAccepted:'INR, USD',
      paymentAccepted:   'UPI, Bank Transfer, PayPal',
      areaServed:        [
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'AdministrativeArea', name: 'Delhi' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
      ],
      serviceType: [
        'Video Editing', 'Motion Graphics Design',
        'Short-Form Content Production', 'Brand Video Production',
        'Color Grading', 'Reels & Shorts Editing',
      ],
      address: {
        '@type':           'PostalAddress',
        addressLocality:   'New Delhi',
        addressRegion:     'Delhi',
        addressCountry:    'IN',
      },
      geo: {
        '@type':    'GeoCoordinates',
        latitude:   28.6139,
        longitude:  77.2090,
      },
      openingHoursSpecification: {
        '@type':     'OpeningHoursSpecification',
        dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens:       '09:00',
        closes:      '21:00',
      },
      sameAs: ['https://www.instagram.com/editorcyclops/'],
    },

    /* ── BreadcrumbList ── */
    {
      '@type':    'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',         item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Work',         item: `${SITE_URL}/#work` },
        { '@type': 'ListItem', position: 3, name: 'The Standard', item: `${SITE_URL}/#standard` },
        { '@type': 'ListItem', position: 4, name: 'About',        item: `${SITE_URL}/#about` },
        { '@type': 'ListItem', position: 5, name: 'Contact',      item: `${SITE_URL}/#contact` },
      ],
    },

    /* ── FAQPage ── covers conversational / GEO queries */
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name:    'Who is Editor Cyclops?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Editor Cyclops is the professional alias of Ankit Sengupta, a New Delhi-based freelance video editor and motion designer. He specializes in high-retention short-form content, Devin Jatho style editing, Reels, YouTube Shorts, brand videos, and After Effects motion graphics.',
          },
        },
        {
          '@type': 'Question',
          name:    'What is Devin Jatho style video editing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Devin Jatho style editing is a premium short-form video editing technique characterized by raw rhythm cuts aligned precisely to music beats, deliberate colour contrast, and dynamic motion graphics — pioneered by influencer Devin Jatho. Ankit Sengupta (Editor Cyclops) is a specialist in this style.',
          },
        },
        {
          '@type': 'Question',
          name:    'How do I hire a video editor in New Delhi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can hire Ankit Sengupta (Editor Cyclops), a professional freelance video editor based in New Delhi, India, by emailing ankit.sengupta05@gmail.com or DMing @editorcyclops on Instagram. He is available for short-form, long-form, brand videos, motion graphics, and Reels editing projects.',
          },
        },
        {
          '@type': 'Question',
          name:    'What video editing software does Editor Cyclops use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Editor Cyclops (Ankit Sengupta) uses Adobe Premiere Pro, Adobe After Effects, and DaVinci Resolve for professional video editing, color grading, and motion graphics production.',
          },
        },
        {
          '@type': 'Question',
          name:    'Does Ankit Sengupta edit YouTube Shorts and Instagram Reels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Ankit Sengupta (Editor Cyclops) specializes in short-form content editing for YouTube Shorts, Instagram Reels, and TikTok — focusing on hook-first structure, high-retention pacing, and beat-locked visual rhythm to maximize engagement.',
          },
        },
      ],
    },

    /* ── VideoObject schemas for each work piece ── */
    ...VIDEOS.map(v => ({
      '@type':           'VideoObject',
      '@id':             `${SITE_URL}/#video-${v.id}`,
      name:              `${v.name} — Editor Cyclops`,
      description:       `${v.desc} Created by Ankit Sengupta (Editor Cyclops), New Delhi-based video editor and motion designer.`,
      thumbnailUrl:      `https://drive.google.com/thumbnail?id=${v.id}&sz=w800`,
      uploadDate:        v.date,
      duration:          v.duration,
      contentUrl:        `https://drive.google.com/file/d/${v.id}/view`,
      embedUrl:          `https://drive.google.com/file/d/${v.id}/preview`,
      publisher:         { '@id': `${SITE_URL}/#person` },
      creator:           { '@id': `${SITE_URL}/#person` },
      inLanguage:        'en',
      keywords:          'video editing, motion design, Devin Jatho style, New Delhi video editor, Editor Cyclops',
    })),
  ],
};

export function SEO() {
  return (
    <Helmet>
      {/* ── Core ── */}
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords"    content={KEYWORDS} />
      <meta name="author"      content="Ankit Sengupta" />
      <meta name="creator"     content="Ankit Sengupta" />
      <meta name="publisher"   content="Editor Cyclops" />
      <meta name="robots"      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot"   content="index, follow" />
      <meta name="bingbot"     content="index, follow" />
      <link rel="canonical"    href={SITE_URL} />

      {/* ── Hreflang ── */}
      <link rel="alternate" hrefLang="en"    href={SITE_URL} />
      <link rel="alternate" hrefLang="en-IN" href={SITE_URL} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={SITE_URL} />
      <meta property="og:title"       content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image"       content={GITHUB_IMG} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"   content="Editor Cyclops — Ankit Sengupta Portfolio" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_IN" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* ── Twitter / X Cards ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@editorcyclops" />
      <meta name="twitter:creator"     content="@editorcyclops" />
      <meta name="twitter:url"         content={SITE_URL} />
      <meta name="twitter:title"       content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image"       content={GITHUB_IMG} />
      <meta name="twitter:image:alt"   content="Editor Cyclops — Ankit Sengupta" />

      {/* ── GEO / Local SEO tags ── */}
      <meta name="geo.region"    content="IN-DL" />
      <meta name="geo.placename" content="New Delhi, Delhi, India" />
      <meta name="geo.position"  content="28.6139;77.2090" />
      <meta name="ICBM"          content="28.6139, 77.2090" />
      <meta name="DC.title"      content={TITLE} />
      <meta name="DC.creator"    content="Ankit Sengupta" />
      <meta name="DC.subject"    content="Video Editing, Motion Design, New Delhi" />
      <meta name="DC.description" content={DESCRIPTION} />
      <meta name="DC.language"   content="en-IN" />
      <meta name="DC.coverage"   content="New Delhi, Delhi, India, Worldwide" />

      {/* ── PWA / App ── */}
      <meta name="theme-color"            content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="Editor Cyclops" />
      <meta name="application-name"       content="Editor Cyclops" />
      <meta name="format-detection"       content="telephone=no" />
      <meta name="referrer"               content="strict-origin-when-cross-origin" />

      {/* ── Preconnect performance hints ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://drive.google.com" />
      <link rel="dns-prefetch" href="https://drive.google.com" />

      {/* ── Article-level meta for crawlers ── */}
      <meta property="article:author"    content="Ankit Sengupta" />
      <meta property="article:published_time" content="2026-09-12T00:00:00+05:30" />
      <meta property="article:modified_time"  content="2026-09-12T00:00:00+05:30" />
      <meta property="article:tag" content="video editor" />
      <meta property="article:tag" content="motion designer" />
      <meta property="article:tag" content="New Delhi" />

      {/* ── Full JSON-LD structured data graph ── */}
      <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
    </Helmet>
  );
}
