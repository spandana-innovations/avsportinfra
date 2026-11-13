// ─────────────────────────────────────────────────────────────────────────
// Blog content calendar.
// 7 articles, scheduled ~2 per month. Posts with a `date` in the past show as
// published; future-dated posts show in "Coming soon" and go live on/after
// their date (on the next deploy, or automatically in-browser via the index
// script). Images are Unsplash photo ids (see src/data/images.ts → u()).
// ─────────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string; // YYYY-MM-DD
  readMins: number;
  image: string; // Unsplash photo id
  keyword: string;
  excerpt: string;
  sections: { heading: string; body: string[] }[];
}

export const posts: BlogPost[] = [
  {
    slug: 'football-turf-cost-india',
    title: 'How Much Does Football Turf Construction Cost in India?',
    category: 'Football Turf',
    date: '2026-10-22',
    readMins: 6,
    image: '1522947961977-67fe74257c16',
    keyword: 'football turf construction cost india',
    excerpt:
      'A clear breakdown of what drives the price of an artificial football turf in India, from base work and drainage to turf grade, infill and lighting.',
    sections: [
      { heading: 'What actually determines the cost', body: [
        'The headline “per square foot” figure hides most of the real cost drivers. A football turf is a system, base, drainage, surfacing, markings, fencing and lighting, and each layer moves the number.',
        'The biggest variables are the size of the ground, the condition of the existing site, the grade of turf you choose, and whether you need floodlights and fencing for night play.' ] },
      { heading: 'The main cost components', body: [
        'Civil and base work: excavation, grading, compaction and a stable sub-base. On a poor or sloping site this can be the single largest line item.',
        'Drainage: perimeter and herringbone systems that clear monsoon rain fast. Skipping this is the most common, and most expensive, long-term mistake.',
        'Turf and infill: monofilament fibre (typically 40–60 mm) with silica sand and performance infill. FIFA Quality Pro systems with a shock pad sit at the top of the range.' ] },
      { heading: 'Turf grade: where the budget flexes most', body: [
        'A recreational 5-a-side turf and a FIFA Quality Pro match pitch can differ substantially in fibre quality, infill and the base they demand.',
        'If the ground is for a school or a pay-and-play business, a mid-grade monofilament turf usually gives the best balance of durability and value.' ] },
      { heading: 'How to get an accurate number', body: [
        'The only reliable quote comes from a site survey. Dimensions, soil condition, drainage needs and your intended use change the figure more than any brochure rate card.',
        'Share your site size and location with us and we’ll return a fixed, itemised quotation, no vague per-foot estimates.' ] },
    ],
  },
  {
    slug: 'fifa-standard-football-ground-guide',
    title: 'FIFA-Standard Football Grounds: Specs, Sizes & What They Cost',
    category: 'Football Turf',
    date: '2026-11-05',
    readMins: 7,
    image: '1676746610993-fa0c050d1f6d',
    keyword: 'fifa standard football ground construction',
    excerpt:
      'What “FIFA standard” really means, the pitch dimensions for each format, and the build decisions that separate a true match ground from a basic turf.',
    sections: [
      { heading: 'What “FIFA standard” means', body: [
        'FIFA publishes performance standards, FIFA Quality and the higher FIFA Quality Pro, that a turf system must meet on measures like ball roll, ball rebound, shock absorption and grip.',
        'Meeting these isn’t about one product; it’s about the whole system: the base, shock pad, fibre and infill working together, then tested on site.' ] },
      { heading: 'Pitch dimensions by format', body: [
        'Full 11-a-side pitches run roughly 100–110 m by 64–75 m for competition, with run-off margins around the field of play.',
        '7-a-side and 5-a-side grounds are far smaller and are what most urban turfs and academies actually build, we size the layout to your plot.' ] },
      { heading: 'The build decisions that matter', body: [
        'A shock pad under the turf is what most often separates a Quality Pro feel from a basic install, it governs player comfort and injury protection.',
        'Drainage and a laser-graded base are non-negotiable for consistent ball behaviour and all-weather play.' ] },
      { heading: 'Certification vs. “built to standard”', body: [
        'A venue can be built to FIFA specifications without paying for formal certification, which is right for most clubs and schools.',
        'Formal FIFA certification involves independent on-site testing and is worth it for competition venues. We can build to either level.' ] },
    ],
  },
  {
    slug: 'futsal-court-construction-guide',
    title: 'Futsal Court Construction: Size, Surface & Cost Guide',
    category: 'Futsal',
    date: '2026-11-19',
    readMins: 5,
    image: '1789060121008-a310f690c742',
    keyword: 'futsal ground construction',
    excerpt:
      'Everything you need to plan a futsal court, court dimensions, surface options, rooftop feasibility and what affects the budget.',
    sections: [
      { heading: 'Futsal court dimensions', body: [
        'A standard futsal play area runs roughly 25–42 m by 16–25 m; recreational and rooftop courts are often built smaller to fit the available space.',
        'We size the court and run-off to your plot while keeping markings true to the game.' ] },
      { heading: 'Choosing the surface', body: [
        'The two common choices are a cushioned synthetic turf and a hard acrylic/PU court. Turf plays softer and is forgiving; acrylic is fast and low-maintenance.',
        'Rebound boards, correct markings and the right base matter as much as the top surface for real futsal play.' ] },
      { heading: 'Rooftop and tight-site courts', body: [
        'Rooftops are popular for futsal, but need a load assessment, waterproofing and the right base build-up before any surface goes down.',
        'Fencing, netting and LED lighting turn a court into a night-ready, revenue-earning facility.' ] },
    ],
  },
  {
    slug: 'box-cricket-ground-construction-guide',
    title: 'Box Cricket Ground Construction: A Complete Guide',
    category: 'Cricket',
    date: '2026-12-03',
    readMins: 6,
    image: '1729027696167-0f3aa8e92e64',
    keyword: 'box cricket construction',
    excerpt:
      'How enclosed box-cricket grounds are built, from the turf and netting to lighting, and what makes them such a strong pay-and-play business.',
    sections: [
      { heading: 'What is box cricket', body: [
        'Box cricket is a fast, enclosed format played on a compact turf surrounded by netting, usually under floodlights, ideal for urban sites and corporate leagues.',
        'Because it packs play into a small footprint, it’s one of the most popular pay-and-play sports formats in Indian cities.' ] },
      { heading: 'The build', body: [
        'A box-cricket ground needs an engineered base, a durable turf surface with consistent bounce, high perimeter netting and a steel structure to carry it.',
        'LED floodlighting extends usable hours into the evening, which is when most bookings happen.' ] },
      { heading: 'Running it as a business', body: [
        'Night hours, multiple slots and league bookings drive the economics. Good lighting, drainage for all-weather play and durable turf protect your revenue.',
        'We build turnkey box-cricket grounds, surface, structure, netting and lighting, ready to book.' ] },
    ],
  },
  {
    slug: 'pickleball-court-cost-dimensions-india',
    title: 'Pickleball Court Construction: Cost & Dimensions in India',
    category: 'Pickleball',
    date: '2026-12-17',
    readMins: 5,
    image: '1711996151738-657bd95b7cdb',
    keyword: 'pickleball court construction cost india',
    excerpt:
      'Pickleball is booming in India. Here are the regulation court dimensions, surface options and the factors that shape construction cost.',
    sections: [
      { heading: 'Court dimensions', body: [
        'A pickleball court’s play area is 20 ft by 44 ft, the same for singles and doubles, with additional run-off space recommended around it.',
        'Many sites build two or more courts together to share fencing, lighting and run-off, which lowers the per-court cost.' ] },
      { heading: 'Surface options', body: [
        'Cushioned acrylic is the most popular finish, comfortable, grippy and low-maintenance. A well-prepared, laser-levelled base underneath is essential.',
        'Indoor or outdoor, the surface system is chosen to suit climate, level of play and budget.' ] },
      { heading: 'What drives the cost', body: [
        'Number of courts, base condition, surface grade, fencing and floodlights are the main variables.',
        'Share your site and we’ll return an itemised quote for single or multi-court builds.' ] },
    ],
  },
  {
    slug: 'epdm-vs-pu-running-tracks',
    title: 'EPDM vs PU Running Tracks: Which Should You Choose?',
    category: 'Running Tracks',
    date: '2027-01-07',
    readMins: 6,
    image: '1549896869-ca27eeffe4fb',
    keyword: 'epdm running track',
    excerpt:
      'EPDM and PU are the two terms you’ll hear for synthetic tracks. Here’s what each actually is, and how to choose for your facility and budget.',
    sections: [
      { heading: 'Clearing up the terms', body: [
        'They’re not strictly either/or. EPDM refers to the coloured rubber granules used in the top layer; PU (polyurethane) is the binder or full-pour system that holds everything together.',
        'A track is usually described by its construction type, spray-coat, sandwich, full-pour (PU) or prefabricated, with EPDM as the visible surface.' ] },
      { heading: 'Performance and durability', body: [
        'Full-pour PU systems offer the best performance and durability for competition and heavy use, at a higher cost.',
        'Spray-coat and sandwich systems are more economical and well-suited to schools and practice tracks.' ] },
      { heading: 'Choosing for your facility', body: [
        'The right choice depends on level of competition, expected footfall, climate and budget, not a one-size-fits-all answer.',
        'We assess your use case and specify the track and thickness that fit, built to IAAF-aligned standards.' ] },
    ],
  },
  {
    slug: 'turnkey-sports-complex-planning',
    title: 'Planning a Turnkey Sports Complex: A Step-by-Step Guide',
    category: 'Turnkey',
    date: '2027-01-21',
    readMins: 8,
    image: '1546717003-caee5f93a9db',
    keyword: 'turnkey sports infrastructure',
    excerpt:
      'Building a multi-sport complex is a big project. This step-by-step guide covers feasibility, design, phasing and the value of a single accountable partner.',
    sections: [
      { heading: 'Start with feasibility', body: [
        'Before any construction, map the site, the sports mix and the demand. Which formats will earn? What footfall and hours can the location support?',
        'Soil, drainage, access and power all shape what’s buildable and at what cost.' ] },
      { heading: 'Design and layout', body: [
        'A good master plan sequences pitches and courts to share drainage, fencing, lighting and circulation, which saves cost and improves flow.',
        'Plan for spectators, parking, changing rooms and future expansion from day one.' ] },
      { heading: 'Phasing the build', body: [
        'Large complexes are often phased so earlier facilities start earning while later ones are built. The master plan makes phasing clean.',
        'Civil, drainage and services are best done up front so later phases drop in without rework.' ] },
      { heading: 'Why a single turnkey partner matters', body: [
        'With one team accountable for design, civil work, surfacing, drainage, fencing and lighting, there’s one timeline, one quality standard and no finger-pointing between contractors.',
        'That single point of accountability is what keeps a multi-sport build on time and on budget. Talk to us about your project.' ] },
    ],
  },
];

posts.push({
  slug: 'olympic-vs-mini-olympic-training-pools',
  title: 'Olympic vs Mini-Olympic Training Pools: Sizes, Cost & What to Build',
  category: 'Swimming Pools',
  date: '2026-11-08',
  readMins: 6,
  image: '1664213644238-52e54838354b',
  keyword: 'swimming pool construction',
  excerpt:
    'Planning a training pool? Here’s the difference between a 50 m Olympic pool and a 25 m mini-Olympic pool, and how to choose for your athletes, site and budget.',
  sections: [
    { heading: 'Olympic vs mini-Olympic: the sizes', body: [
      'A full Olympic pool is 50 m long, usually 8–10 lanes wide, and is what competitive swimmers train and compete in. A mini or semi-Olympic pool is 25 m, half the length, and is the practical choice for most academies, schools and clubs.',
      'Both are true training pools: the 25 m “short course” is a recognised competition format in its own right, and fits far more sites and budgets than a 50 m build.' ] },
    { heading: 'What goes into a training pool', body: [
      'A proper training pool is an engineered system: a watertight RCC or shotcrete shell, circulation and filtration sized to the water volume, water treatment, competition lane lines, correct depth, starting blocks and an anti-slip deck.',
      'Get the structure and filtration right and the pool stays clear, safe and low-maintenance for years. Cut corners there and you pay for it every season.' ] },
    { heading: 'How to choose', body: [
      'Pick 50 m only if you are training for long-course competition and have the land and budget. For academies, schools, clubs and most training needs, a 25 m mini-Olympic pool delivers serious training value at a fraction of the footprint and cost.',
      'Indoor or outdoor changes the structure and filtration, not the swimming, we advise on both.' ] },
    { heading: 'Built end to end', body: [
      'We build training pools 0 to 100%, design, excavation, shell, plumbing, filtration, tiling, lane markings, deck and handover under one contract, so there is one team accountable for a competition-ready result.',
      'Tell us your site and the swimmers you are building for, and we’ll recommend the size and spec.' ] },
  ],
});

posts.push({
  slug: 'sports-flooring-types-epdm-pu-acrylic-tiles',
  title: 'Sports Flooring Types: EPDM, PU, Acrylic & Modular Tiles',
  category: 'Sports Flooring',
  date: '2026-11-11',
  readMins: 6,
  image: '1540080207997-ebe067608bd2',
  keyword: 'sports flooring',
  excerpt:
    'EPDM, PU, acrylic, synthetic, modular tiles, the sports-flooring options sound similar but behave very differently. Here’s how to choose for your sport and site.',
  sections: [
    { heading: 'EPDM rubber', body: [
      'EPDM is a coloured rubber granule surface, laid seamless over a base. It’s shock-absorbing and UV-stable, the go-to for running tracks, play areas and gym surfaces where cushioning matters.' ] },
    { heading: 'Polyurethane (PU)', body: [
      'PU is a poured, seamless system prized for durability and performance. Full-pour PU handles heavy and competition use and is common on premium tracks and multi-purpose halls.' ] },
    { heading: 'Acrylic court coatings', body: [
      'Acrylic is a multi-coat hard-court finish for tennis, basketball, pickleball and multi-sport courts, grippy, low-maintenance and available cushioned for more comfort.' ] },
    { heading: 'Interlocking modular tiles', body: [
      'Modular tiles click together over any firm, level base, quick to install, easy to lift and relay, and ideal for rooftops and temporary or multi-use courts.',
      'Not sure which fits? Tell us the sport, whether it’s indoor or outdoor, and the base you have, we’ll specify the right floor and install it.' ] },
  ],
});

posts.push({
  slug: 'synthetic-running-track-cost-india',
  title: 'Synthetic Running Track Cost in India: EPDM vs PU, 13mm vs 15mm',
  category: 'Running Tracks',
  date: '2026-11-12',
  readMins: 6,
  image: '1549896869-ca27eeffe4fb',
  keyword: 'running track construction cost india',
  excerpt:
    'What drives the cost of a synthetic athletic track, system type, thickness, base condition and length, and how to choose between EPDM and full-pour PU.',
  sections: [
    { heading: 'What drives the cost', body: [
      'The biggest factors are the track system (spray-coat, EPDM sandwich or full-pour PU), the thickness (commonly 13 mm or 15 mm), the condition of the base, and the length, a practice straight costs far less than a full 400 m, multi-lane oval.' ] },
    { heading: 'EPDM sandwich vs full-pour PU', body: [
      'A 13 mm EPDM sandwich system is economical and well-suited to schools and practice tracks. A full-pour PU system costs more but offers the best durability and performance for heavy and competition use.' ] },
    { heading: 'Don’t forget the base and drainage', body: [
      'A synthetic track is only as good as the base and drainage beneath it. Skipping proper civil works is the most common way a track fails early, and the most expensive to fix later.',
      'Share your length, location and intended use and we’ll return an itemised quote, built to World Athletics-aligned specs.' ] },
  ],
});

export const byDateDesc = [...posts].sort((a, b) => b.date.localeCompare(a.date));
