// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for brand, contact, navigation and services.
// Replace every [PLACEHOLDER] with real details before launch.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'AV Sports and Infrastructure',
  shortName: 'AV Sports',
  tagline: 'Best Driven Turfs & Sports Structures',
  domain: 'https://www.avsportsinfrastructure.com',
  description:
    'AV Sports and Infrastructure builds FIFA-standard football turfs, courts, running tracks & turnkey sports facilities across India.',
  // --- Contact ---
  phone: '+91 93724 49834',
  phoneHref: 'tel:+919372449834',
  whatsapp: '919372449834', // digits only, country code first
  whatsappMsg: "Hi AV Sports, I'd like a quote for ",
  email: 'avsportsinfrastructure@gmail.com',
  address: "523, Loha Bhavan, P. D'Mello Rd, Masjid, Opp. Carnac Bandar, Mumbai 400 009",
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

// Named contacts (from the business card)
export const contacts = [
  { name: 'Atul', phone: '+91 93724 49834', href: 'tel:+919372449834' },
  { name: 'Vicky', phone: '+91 99679 10616', href: 'tel:+919967910616' },
];

// Branch offices
export const branches = ['Vasai', 'Rewa (MP)', 'Banaras (UP)', 'Guwahati'];

// Analytics & verification — fill these in to switch them on.
export const analytics = {
  ga4: '',             // GA4 Measurement ID, e.g. 'G-XXXXXXXXXX'
  gscVerification: '', // Google Search Console meta-tag token
};

export const whatsappLink = (prefill = '') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMsg + prefill)}`;

export type NavItem = { label: string; href: string; icon?: string; children?: NavItem[] };

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
      'We supply and install professional artificial football turf — from 5-a-side and 7-a-side pitches to full 9 and 11-a-side grounds — built to FIFA Quality and Quality Pro benchmarks. Every pitch starts with an engineered base and sub-surface drainage, then a UV-stable 40–60 mm monofilament turf with performance infill for consistent ball roll, grip and player safety. We deliver it turnkey, or supply FIFA-grade turf for your own installation.',
    specs: [
      '40–60 mm monofilament turf (50 mm FIFA-grade supply)',
      '5, 7, 9 & 11-a-side formats',
      'Shock pad option for FIFA Quality Pro',
      'Silica sand + SBR/EPDM performance infill',
      'WMM base + perimeter & herringbone drainage',
      'Fencing, floodlighting & line markings',
    ],
    faqs: [
      ['Do you supply turf as well as install it?', 'Yes — we supply FIFA-grade artificial football turf and install it turnkey (base, drainage, fencing and lighting), or supply the turf for your own team.'],
      ['How much does football turf cost in India?', 'Cost depends on size, turf grade, base condition and drainage. Share your dimensions and we’ll return a fixed quote.'],
      ['How long does installation take?', 'A standard 5-a-side turf is typically 3–6 weeks; full grounds take longer depending on civil work.'],
      ['Is it built to FIFA standards?', 'We build to FIFA Quality / Quality Pro specifications. We do not claim formal FIFA certification unless a project is independently tested and certified.'],
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
    slug: 'volleyball-court',
    title: 'Volleyball Courts',
    navTitle: 'Volleyball Courts',
    h1: 'Volleyball Court Construction',
    short: 'Indoor and outdoor volleyball courts built to regulation.',
    metaTitle: 'Volleyball Court Construction Company in India',
    metaDescription:
      'Volleyball court construction across India — indoor and outdoor, regulation dimensions, synthetic or acrylic surfacing, posts, nets and markings.',
    keyword: 'Volleyball Court Construction',
    icon: 'volleyball',
    intro:
      'We build regulation volleyball courts — indoor halls and outdoor courts — on an engineered base with synthetic or acrylic surfacing, correct markings, posts and nets. Durable, true-bounce surfaces for schools, clubs and academies.',
    specs: ['Regulation 18 m x 9 m court + run-off', 'Synthetic / acrylic / cushioned surface', 'Shock-absorbing base', 'Posts, nets & antennae', 'Indoor or outdoor build'],
    faqs: [
      ['Indoor or outdoor?', 'Both — the surface and base are specified to suit.'],
      ['Can you add it to a multi-sport layout?', 'Yes — volleyball is a common inclusion in multi-sport courts and complexes.'],
    ],
  },
  {
    slug: 'multi-sport-court',
    title: 'Multi-Sport Courts',
    navTitle: 'Multi-Sport Courts',
    h1: 'Multi-Sport Court Construction',
    short: 'One court, many sports — flexible markings and surfacing.',
    metaTitle: 'Multi-Sport Court Construction in India',
    metaDescription:
      'Multi-sport court construction across India — a single surface marked and equipped for basketball, volleyball, badminton, tennis and more. Space-smart and cost-efficient.',
    keyword: 'Multi Sports Court Construction',
    icon: 'multisport',
    intro:
      'A multi-sport court packs several games into one surface — basketball, volleyball, badminton, tennis and more — with multi-coloured markings and shared fencing and lighting. It is the space-smart, cost-efficient choice for schools, societies and community grounds.',
    specs: ['Acrylic / synthetic multi-game surface', 'Multi-colour overlaid markings', 'Shared posts & convertible nets', 'Laser-levelled base', 'Fencing & floodlighting options'],
    faqs: [
      ['How many sports on one court?', 'Commonly basketball + volleyball + badminton, tennis where space allows — we plan the markings to your mix.'],
      ['Is it harder to maintain?', 'No — it is one surface; the overlaid markings are hard-wearing acrylic.'],
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
      'We construct synthetic athletic tracks for schools, stadiums and academies — full 400 m tracks, practice straights and training ovals — built to World Athletics-aligned specifications. Choose an EPDM sandwich system or a full-pour polyurethane (PU) track: shock-absorbing, slip-resistant, UV-stable and weatherproof.',
    specs: [
      '400 m tracks, straights & training ovals',
      'EPDM 13 mm sandwich & 15 mm systems',
      'Full-pour polyurethane (PU) option',
      'SBR base mat + EPDM granule top',
      'Lane markings to standard',
      'Track resurfacing & re-lining',
    ],
    faqs: [
      ['What’s the difference between EPDM and PU?', 'EPDM is the coloured rubber top layer; PU is the binder / full-pour system. A 13 mm EPDM sandwich suits schools and practice; full-pour PU suits heavy and competition use.'],
      ['Do you build full 400 m tracks?', 'Yes — from practice straights to full multi-lane 400 m athletic tracks, to World Athletics-aligned specs.'],
      ['Can you resurface an existing track?', 'Yes — resurfacing and re-lining of worn synthetic tracks is part of our service.'],
    ],
  },
  {
    slug: 'sports-flooring',
    title: 'Sports Flooring',
    navTitle: 'Sports Flooring',
    h1: 'Sports Flooring: EPDM, PU, Acrylic & Modular Tiles',
    short: 'Synthetic, rubber, acrylic and interlocking tile flooring.',
    metaTitle: 'Sports Flooring Company in India | EPDM, PU & Acrylic',
    metaDescription:
      'Sports flooring across India — EPDM rubber, PU, acrylic and synthetic surfaces, interlocking modular tiles, SBR and turf-protection tiles. Indoor and outdoor, supplied and installed.',
    keyword: 'Sports Flooring Company in India',
    icon: 'flooring',
    intro:
      'From seamless EPDM rubber and poured polyurethane to acrylic court coatings and interlocking modular tiles, we supply and install the right sports floor for the surface and the sport. Indoor or outdoor, we also fit SBR play surfaces and turf-protection tiles — all on a properly prepared base.',
    specs: [
      'EPDM rubber & PU sports flooring',
      'Acrylic / synthetic court surfaces',
      'Interlocking modular sports tiles',
      'SBR flooring & turf-protection tiles',
      'Indoor & outdoor systems',
      'Anti-slip, shock-absorbing, UV-stable',
    ],
    faqs: [
      ['Which flooring should I choose?', 'It depends on the sport, indoor vs outdoor, foot traffic and budget — we specify EPDM, PU, acrylic or modular tiles to suit.'],
      ['Do you supply and install?', 'Yes — we supply the material and install it on a prepared base, as a turnkey floor.'],
      ['Are modular tiles good for rooftops?', 'Yes — interlocking tiles are quick to lay and ideal for rooftops and existing hard bases.'],
    ],
  },
  {
    slug: 'swimming-pools',
    title: 'Swimming Pools',
    navTitle: 'Swimming Pools',
    h1: 'Olympic & Training Swimming Pool Construction',
    short: 'Olympic and mini-Olympic training pools, built end to end.',
    metaTitle: 'Swimming Pool Construction Company in India',
    metaDescription:
      'Olympic size and mini-Olympic training swimming pool construction across India — turnkey from design to handover. Competition lanes, filtration and finishing.',
    keyword: 'Swimming Pool Construction Company',
    icon: 'pool',
    intro:
      'From a full 50 m Olympic pool to a 25 m mini-Olympic trainer, we build the whole thing — nothing outsourced, nothing left half-finished. We cast the watertight shell, size the filtration and circulation to the water, then finish with tiling, competition lane markings, starting blocks and a safe anti-slip deck. What you get is a pool that is ready to train serious swimmers from the first length.',
    specs: [
      'Olympic (50 m) & mini-Olympic (25 m) sizes',
      'RCC / shotcrete pool shell',
      'Competition lane lines & markings',
      'Filtration, circulation & water treatment',
      'Anti-slip deck, tiling & finishing',
      'Starting blocks & depth to training spec',
    ],
    faqs: [
      ['What pool sizes do you build?', 'Full Olympic (50 m, typically 8–10 lanes) and mini / semi-Olympic (25 m) training pools, sized to your site and purpose.'],
      ['Is it a complete, turnkey build?', 'Yes — 0 to 100%: structure, plumbing, filtration, tiling, lane markings, deck and handover under one contract.'],
      ['Indoor or outdoor pools?', 'Both. We advise on structure, filtration and finishing to suit the location and usage.'],
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
    slug: 'civil-works',
    title: 'Civil Works & Base Preparation',
    navTitle: 'Civil Works & Base Prep',
    h1: 'Sports Ground Civil Works & Base Preparation',
    short: 'The groundwork a good surface stands on.',
    metaTitle: 'Sports Ground Civil Works & Base Preparation Contractor',
    metaDescription:
      'Sports ground civil construction across India — excavation, earthwork, leveling, WMM base, sub-base and field drainage. The engineered groundwork every turf and track needs.',
    keyword: 'Sports Ground Civil Construction',
    icon: 'civil',
    intro:
      'Every great surface starts underground. We handle the civil works that make a ground last — excavation and earthwork, cut-and-fill leveling, a compacted sub-base and WMM (wet-mix-macadam) base, and the sub-surface drainage that keeps it playable through the monsoon. Get this right and the turf, court or track above it performs for years.',
    specs: [
      'Excavation & earthwork',
      'Grading, cut & fill leveling',
      'Compacted sub-base',
      'WMM (wet-mix-macadam) base',
      'Sub-surface & field drainage',
      'Laser-graded, load-tested finish',
    ],
    faqs: [
      ['Why does base preparation matter so much?', 'An uneven or poorly drained base causes dips, waterlogging and premature surface failure. The base is what the warranty really rests on.'],
      ['Do you do only the civil works?', 'Yes — we can deliver the civil and base package alone, or as part of a turnkey build.'],
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
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Contact', href: '/contact', icon: 'phone' },
];

// ── Location / service-area pages ──────────────────────────────────────────
// Service-area pages for a PAN-India contractor. Each has unique copy; we don't
// claim specific local projects we can't evidence.
export interface Location { slug: string; city: string; region: string; blurb: string; }

export const locations: Location[] = [
  { slug: 'mumbai', city: 'Mumbai', region: 'Maharashtra', blurb: 'Our home turf. AV Sports is based in Mumbai (Masjid), and we build football turfs, courts, running tracks and complete sports facilities right across the city and MMR — from school grounds to rooftop arenas.' },
  { slug: 'maharashtra', city: 'Maharashtra', region: 'India', blurb: 'From Mumbai and Pune to Nagpur, we deliver sports infrastructure across Maharashtra — turfs, courts, athletic tracks and turnkey complexes, with a local base and statewide reach.' },
  { slug: 'pune', city: 'Pune', region: 'Maharashtra', blurb: "Pune's academies, schools and clubs are building serious sports facilities — and we construct them, from FIFA-standard football turf to EPDM running tracks and multi-sport courts." },
  { slug: 'delhi', city: 'Delhi NCR', region: 'India', blurb: "We bring turnkey sports infrastructure to Delhi NCR — football turfs, courts, running tracks and sports flooring, engineered for the capital's schools, clubs and residential projects." },
  { slug: 'bangalore', city: 'Bangalore', region: 'Karnataka', blurb: "Bangalore's sports and fitness boom needs the right surfaces. We build football turfs, pickleball and multi-sport courts, running tracks and pools across the city." },
  { slug: 'hyderabad', city: 'Hyderabad', region: 'Telangana', blurb: 'From academy pitches to community courts, we deliver sports infrastructure across Hyderabad — turf, courts, flooring and turnkey facilities built to last.' },
  { slug: 'chennai', city: 'Chennai', region: 'Tamil Nadu', blurb: 'We construct sports facilities across Chennai — football turfs, cricket nets, courts and athletic tracks — engineered for the coastal climate with proper drainage and UV-stable surfaces.' },
  { slug: 'ahmedabad', city: 'Ahmedabad', region: 'Gujarat', blurb: "Ahmedabad's schools, societies and clubs trust engineered sports surfaces. We build turfs, courts, running tracks and sports flooring across the city." },
  { slug: 'surat', city: 'Surat', region: 'Gujarat', blurb: 'We deliver football turfs, multi-sport courts and sports flooring across Surat — turnkey builds for schools, academies and residential projects.' },
  { slug: 'jaipur', city: 'Jaipur', region: 'Rajasthan', blurb: "From school grounds to club courts, we construct sports infrastructure across Jaipur — turf, courts, tracks and flooring, built for the region's climate." },
  { slug: 'lucknow', city: 'Lucknow', region: 'Uttar Pradesh', blurb: 'We bring turnkey sports facilities to Lucknow — football turfs, courts, running tracks and pools for schools, academies and communities.' },
  { slug: 'kolkata', city: 'Kolkata', region: 'West Bengal', blurb: "Kolkata's clubs and schools are upgrading their grounds. We build football turfs, courts, athletic tracks and sports flooring across the city." },
  { slug: 'nagpur', city: 'Nagpur', region: 'Maharashtra', blurb: 'In the heart of Maharashtra, we construct sports infrastructure across Nagpur — turfs, courts, tracks and turnkey complexes.' },
  { slug: 'indore', city: 'Indore', region: 'Madhya Pradesh', blurb: 'We deliver sports facilities across Indore — football turfs, multi-sport courts, running tracks and flooring for schools, clubs and societies.' },
  { slug: 'kochi', city: 'Kochi', region: 'Kerala', blurb: 'From Kochi across Kerala, we build football turfs, courts and athletic tracks engineered for the coastal, high-rainfall climate with serious drainage.' },
];
