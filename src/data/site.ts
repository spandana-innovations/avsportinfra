// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for brand, contact, navigation and services.
// Replace every [PLACEHOLDER] with real details before launch.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'AV Sports and Infrastructure',
  shortName: 'AV Sports',
  tagline: 'Best Driven Turfs & Sports Structures',
  domain: 'https://www.avsportsinfra.com',
  description:
    'AV Sports and Infrastructure builds FIFA-standard football turfs, courts, running tracks & turnkey sports facilities across India.',
  // --- Contact (placeholders) ---
  phone: '[PHONE]',
  phoneHref: 'tel:+910000000000',
  whatsapp: '910000000000', // digits only, country code first
  whatsappMsg: "Hi AV Sports, I'd like a quote for ",
  email: '[EMAIL]',
  address: '[ADDRESS]',
  city: 'Mumbai',
  hours: 'Mon–Sat, 9:30am–7:00pm',
  serviceArea: 'Mumbai & PAN-India',
  socials: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
};

export const whatsappLink = (prefill = '') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMsg + prefill)}`;

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const services = [
  {
    slug: 'football-turf',
    title: 'Football Turf & FIFA Grounds',
    navTitle: 'Football Turf & FIFA Grounds',
    h1: 'Football Turf & FIFA-Standard Football Ground Construction',
    short: 'FIFA-standard artificial football pitches, built to play.',
    metaTitle: 'Football Turf Construction Company in India',
    metaDescription:
      'FIFA-standard football turf construction & artificial football ground installation across India. Durable, UV-stable turf, expert base & drainage.',
    keyword: 'Football Turf Construction Company',
    icon: 'football',
    intro:
      'We build professional artificial football pitches to FIFA Quality and Quality Pro benchmarks — from 5-a-side turfs to full 11-a-side grounds. Every pitch starts with an engineered base and sub-surface drainage, then a UV-stable monofilament turf system with certified performance infill for consistent ball roll, grip and player safety.',
    specs: [
      '40–60 mm monofilament turf fibre',
      'Shock pad option for FIFA Quality Pro',
      'Silica sand + SBR/EPDM performance infill',
      'Laser-graded, compacted base',
      'Perimeter & herringbone drainage',
      'Tufted-in line markings',
    ],
    faqs: [
      ['How much does football turf cost in India?', 'Cost depends on size, turf grade, base condition and drainage. Share your dimensions and we’ll return a fixed quote.'],
      ['How long does installation take?', 'A standard 5-a-side turf is typically 3–6 weeks; full grounds take longer depending on civil work.'],
      ['Is it FIFA-approved?', 'We build to FIFA Quality / Quality Pro specifications; formal certification can be arranged for competition venues.'],
    ],
  },
  {
    slug: 'futsal',
    title: 'Futsal Grounds',
    navTitle: 'Futsal Grounds',
    h1: 'Futsal Ground Construction',
    short: 'Compact 5-a-side courts for clubs, schools and rooftops.',
    metaTitle: 'Futsal Ground Construction Company in India',
    metaDescription:
      'Professional futsal court construction — high-rebound surfaces for 5-a-side football, clubs, schools and rooftops. Turnkey builds across India.',
    keyword: 'Futsal Ground Construction Company',
    icon: 'futsal',
    intro:
      'Compact, fast and durable — our futsal courts suit clubs, schools, academies and rooftop venues. Choose a cushioned synthetic or hard-court surface with precise line markings, rebound boards and fencing, engineered for intense 5-a-side play.',
    specs: [
      'Synthetic turf or acrylic/PU surface',
      'Rebound-wall option',
      'Shock-absorbing base',
      'Integrated drainage for outdoor courts',
      'LED-ready for night play',
    ],
    faqs: [
      ['What size is a futsal court?', 'Standard play areas run roughly 25–42 m by 16–25 m; we tailor to your space.'],
      ['Can it go on a rooftop?', 'Yes — with load assessment, waterproofing and the right base system.'],
    ],
  },
  {
    slug: 'cricket-turf',
    title: 'Cricket Turf & Practice Nets',
    navTitle: 'Cricket Turf & Nets',
    h1: 'Cricket Turf & Practice Nets',
    short: 'Match turf and practice nets with engineered bounce.',
    metaTitle: 'Cricket Turf Construction Company & Practice Nets',
    metaDescription:
      'Cricket turf construction, box cricket and practice nets with engineered bounce and pace. Match and training surfaces built across India.',
    keyword: 'Cricket Turf Construction Company',
    icon: 'cricket',
    intro:
      'We construct cricket match turfs, box-cricket grounds and practice-net systems engineered for true bounce and pace. From artificial pitches to full practice facilities with steel-framed nets, we deliver surfaces that train and play like the real thing.',
    specs: [
      'Artificial or hybrid pitch systems',
      'Engineered sub-base for consistent bounce',
      'Run-up and surround turf',
      'Galvanised net cages',
      'Impact netting',
      'Roll-down or fixed bays',
    ],
    faqs: [
      ['Do you build box cricket grounds?', 'Yes — enclosed turf grounds with netting and floodlights are a core offering.'],
      ['Can nets be installed indoors?', 'Yes, both indoor and outdoor practice-net setups are available.'],
    ],
  },
  {
    slug: 'pickleball-court',
    title: 'Pickleball Courts',
    navTitle: 'Pickleball Courts',
    h1: 'Pickleball Court Construction',
    short: 'Regulation pickleball courts with cushioned acrylic finish.',
    metaTitle: 'Pickleball Court Construction Company in India',
    metaDescription:
      'Professional pickleball court construction across India — regulation dimensions, cushioned acrylic finish, expert base and markings.',
    keyword: 'Pickleball Court Construction Company',
    icon: 'court',
    intro:
      'We build regulation-standard pickleball courts, indoor or outdoor, on an engineered base with cushioned acrylic surfacing, precise line markings and optional fencing and floodlights.',
    specs: ['Acrylic / cushioned acrylic finish', 'Laser-levelled base', 'Regulation markings', 'Net posts & fittings', 'Fencing & lighting options'],
    faqs: [
      ['Indoor or outdoor?', 'Both — the surface system is chosen to suit.'],
      ['How long does a court take?', 'Most single courts are 2–4 weeks after base readiness.'],
    ],
  },
  {
    slug: 'basketball-court',
    title: 'Basketball Courts',
    navTitle: 'Basketball Courts',
    h1: 'Basketball Court Construction',
    short: 'Acrylic and modular basketball courts, indoor or outdoor.',
    metaTitle: 'Basketball Court Construction in India',
    metaDescription:
      'Professional basketball court construction across India — acrylic and modular surfaces, regulation markings, hoops and floodlighting.',
    keyword: 'Basketball Court Construction',
    icon: 'court',
    intro:
      'Acrylic hard-court or modular basketball courts built to regulation dimensions on an engineered base, with anti-slip multi-coat finish, markings, hoops and optional lighting.',
    specs: ['Acrylic or modular tile surface', 'Anti-slip multi-coat finish', 'Laser-levelled base', 'Regulation markings', 'Hoops, posts & fittings'],
    faqs: [
      ['Indoor or outdoor?', 'Both — we specify the surface accordingly.'],
      ['Half or full court?', 'We build both, to the space and budget.'],
    ],
  },
  {
    slug: 'tennis-court',
    title: 'Tennis Courts',
    navTitle: 'Tennis Courts',
    h1: 'Tennis Court Construction',
    short: 'Synthetic and acrylic tennis courts to ITF pace ratings.',
    metaTitle: 'Tennis Court Construction Company in India',
    metaDescription:
      'Professional tennis court construction across India — acrylic and synthetic surfaces to ITF pace ratings, with base, markings and fencing.',
    keyword: 'Tennis Court Construction Company',
    icon: 'court',
    intro:
      'Acrylic and synthetic tennis courts built to ITF pace ratings on an engineered base, with precise markings, net posts, fencing and floodlight options.',
    specs: ['Acrylic / synthetic / cushioned options', 'ITF pace rating', 'Laser-levelled base', 'Net posts & fittings', 'Fencing & lighting'],
    faqs: [
      ['Which surface should I choose?', 'We advise by level of play, climate and budget.'],
      ['Can you resurface an old court?', 'Yes — resurfacing and re-lining are part of our services.'],
    ],
  },
  {
    slug: 'badminton-court',
    title: 'Badminton Courts',
    navTitle: 'Badminton Courts',
    h1: 'Badminton Court Construction',
    short: 'Synthetic and wooden badminton flooring systems.',
    metaTitle: 'Badminton Court Construction in India',
    metaDescription:
      'Badminton court construction across India — synthetic and wooden sprung flooring, regulation markings, indoor and outdoor builds.',
    keyword: 'Badminton Court Construction',
    icon: 'court',
    intro:
      'Synthetic (PU/vinyl) and wooden sprung badminton flooring systems built to regulation, indoor or outdoor, with correct markings and fittings.',
    specs: ['Synthetic PU/vinyl or wooden sprung floor', 'Shock-absorbing sub-structure', 'Regulation markings', 'Posts & nets', 'Indoor or covered outdoor'],
    faqs: [
      ['Wooden or synthetic?', 'Wooden suits premium indoor halls; synthetic is durable and lower-maintenance.'],
      ['Single or multi-court hall?', 'We deliver both, with shared run-off and lighting design.'],
    ],
  },
  {
    slug: 'running-track',
    title: 'Running Tracks & EPDM Flooring',
    navTitle: 'Running Tracks & EPDM',
    h1: 'Synthetic Running Tracks & EPDM Sports Flooring',
    short: 'Synthetic athletic tracks and seamless EPDM flooring.',
    metaTitle: 'Synthetic Running Track & EPDM Flooring Contractor in India',
    metaDescription:
      'Synthetic running track construction and EPDM sports flooring across India — athletic tracks, play areas and gym surfaces. Seamless, UV-stable, certified.',
    keyword: 'Synthetic Running Track Construction',
    icon: 'track',
    intro:
      'We install synthetic athletic tracks and seamless EPDM flooring for schools, stadiums, gyms and play areas. From full 400 m tracks to practice straights and rubberised surfaces, our systems are built to IAAF-aligned specifications — shock-absorbing, slip-resistant and weatherproof.',
    specs: [
      'Full-pour PU or prefabricated track',
      'EPDM granule top layer',
      'SBR base mat',
      'Lane markings to standard',
      'Typical 10–15 mm thickness',
      'UV- and abrasion-resistant',
    ],
    faqs: [
      ['What’s the difference between EPDM and PU?', 'EPDM is the coloured rubber top layer; PU is the binder/full-pour system. We advise per use and budget.'],
      ['Do you build full 400 m tracks?', 'Yes — from practice straights to full multi-lane athletic tracks.'],
    ],
  },
  {
    slug: 'drainage-fencing-floodlighting',
    title: 'Drainage, Fencing & Floodlighting',
    navTitle: 'Drainage, Fencing & Lighting',
    h1: 'Sports Ground Drainage, Fencing & Floodlighting',
    short: 'All-weather, night-ready ground infrastructure.',
    metaTitle: 'Sports Ground Drainage, Fencing & Floodlight Installation',
    metaDescription:
      'Sports ground drainage, perimeter fencing and LED floodlight installation across India. All-weather, night-ready grounds engineered for play.',
    keyword: 'Sports Ground Drainage Contractor',
    icon: 'bolt',
    intro:
      'The infrastructure that makes a ground usable year-round. We design sub-surface and perimeter drainage for fast water clearance, install galvanised fencing and netting to contain play, and fit energy-efficient LED floodlighting to competition lux levels for night use.',
    specs: [
      'Herringbone & perimeter drainage',
      'Galvanised / PVC-coated fencing',
      'Ball-stop netting',
      'LED floodlights with lux design',
      'Poles, mounts & wiring',
    ],
    faqs: [
      ['Can you light an existing ground?', 'Yes — we retrofit LED floodlighting with a proper lux design.'],
      ['Will drainage fix waterlogging?', 'A correctly engineered sub-surface system clears water fast; we assess your site first.'],
    ],
  },
  {
    slug: 'turnkey-projects',
    title: 'Turnkey Projects',
    navTitle: 'Turnkey Projects',
    h1: 'Turnkey Sports Infrastructure Projects',
    short: 'Complete sports complexes, single point of accountability.',
    metaTitle: 'Turnkey Sports Infrastructure Contractor in India',
    metaDescription:
      'End-to-end sports infrastructure — design, civil work, surfacing, drainage, fencing & lighting for complete complexes. One contract, one accountable team.',
    keyword: 'Turnkey Sports Infrastructure Contractor',
    icon: 'layers',
    intro:
      'For multi-sport complexes, academies and institutions, we deliver the entire facility under one contract — feasibility and design, civil and earthworks, surfacing for every sport, drainage, fencing, lighting and handover. One point of accountability, one timeline, one quality standard.',
    specs: [
      'Feasibility & design',
      'Civil & earthworks',
      'Multi-sport surfacing',
      'Drainage, fencing & lighting',
      'Project management',
      'Play-ready handover',
    ],
    faqs: [
      ['Who is turnkey for?', 'Schools, universities, academies, townships, corporates and government projects.'],
      ['Do you manage the whole project?', 'Yes — one team is accountable from survey to handover.'],
    ],
  },
] as const;

export type Service = (typeof services)[number];

export const solutions = [
  { slug: 'schools-colleges', title: 'Schools & Colleges', h1: 'Sports Grounds for Schools & Colleges', angle: 'Safe, low-maintenance, multi-sport surfaces within institutional budgets and timelines.' },
  { slug: 'academies', title: 'Sports Academies', h1: 'Training-Grade Facilities for Sports Academies', angle: 'Performance surfaces, practice nets and courts built to develop athletes.' },
  { slug: 'clubs-complexes', title: 'Clubs & Complexes', h1: 'Multi-Sport Complexes for Clubs', angle: 'Revenue-ready turfs and courts with lighting for extended play hours.' },
  { slug: 'residential', title: 'Residential & Rooftop', h1: 'Rooftop & Residential Sports Turfs', angle: 'Space-smart turfs and courts for townships, societies and private homes.' },
  { slug: 'government', title: 'Government & Municipal', h1: 'Public Sports Infrastructure', angle: 'Turnkey, tender-compliant builds for municipal and government projects.' },
] as const;

export const processSteps = [
  { n: '01', title: 'Consultation & Site Survey', body: 'We assess the site, sport and budget on the ground.' },
  { n: '02', title: 'Design & Quotation', body: 'Layout, specification and a fixed, transparent quote.' },
  { n: '03', title: 'Construction & Installation', body: 'Base, drainage, surfacing and fit-out by our own teams.' },
  { n: '04', title: 'Handover & Maintenance', body: 'Play-ready delivery with an aftercare plan that protects your investment.' },
];

export const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '40+', label: 'Cities Served' },
  { value: 'FIFA', label: 'Standard Surfaces' },
  { value: '10+', label: 'Years of Engineering' },
];

export const whyUs = [
  { title: 'FIFA-standard engineering', body: 'Surfaces built to published performance specs — never shortcuts.' },
  { title: 'Single-point turnkey delivery', body: 'Civil, drainage, surfacing, fencing and lighting under one contract.' },
  { title: 'Warranty-backed materials', body: 'UV-stable turf, certified infill and tested base layers.' },
  { title: 'On-time handover', body: 'Scheduled milestones and transparent, fixed costing.' },
];

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: services.map((s) => ({ label: s.navTitle, href: `/services/${s.slug}` })),
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` })),
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];
