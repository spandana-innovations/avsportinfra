// ─────────────────────────────────────────────────────────────────────────
// Live imagery, streamed from the Unsplash CDN (free license).
// Each value is an Unsplash photo id; build a sized URL with `u()`.
// To swap an image: replace the id (the part after `photo-`) with another.
// ─────────────────────────────────────────────────────────────────────────

const BASE = 'https://images.unsplash.com/photo-';

/** Build a responsive, auto-format Unsplash URL. */
export const u = (id: string, w = 1200, h?: number, q = 75) =>
  `${BASE}${id}?auto=format&fit=crop&w=${w}&q=${q}` + (h ? `&h=${h}` : '');

export const pageImages = {
  heroBg: '1676746610993-fa0c050d1f6d',
  heroCard: '1602432141202-e8b683524997',
  about: '1705593136686-d5f32b611aa9',
  cta: '1706675780107-7c43cc487928',
  projects: [
    '1546717003-caee5f93a9db',
    '1522947961977-67fe74257c16',
    '1549896869-ca27eeffe4fb',
    '1499510318569-1a3d67dc3976',
    '1746053301234-f7f95dc669e0',
    '1768554630751-6448593749eb',
  ],
};

// Per service: [hero, gallery-1, gallery-2]
export const serviceImages: Record<string, string[]> = {
  'football-turf': ['1522947961977-67fe74257c16', '1517769798-ff41bc33467e', '1638868699118-73af322e79c9'],
  'futsal': ['1789060121008-a310f690c742', '1793929590042-06dbc8fdda46', '1712325485668-6b6830ba814e'],
  'cricket-turf': ['1729027696167-0f3aa8e92e64', '1746053301234-f7f95dc669e0', '1568215232210-c572b857d8df'],
  'pickleball-court': ['1547934045-2942d193cb49', '1665855031742-a87f5964adf1', '1749578291886-44a514bd12a6'],
  'swimming-pools': ['1591593232755-30f372ac0431', '1530549387789-4c1017266635', '1631356552355-08dfe9d8c533'],
  'sports-flooring': ['1540080207997-ebe067608bd2', '1602357280104-742c517a1d82', '1779403193049-67a911acf09c'],
  'volleyball-court': ['1731221180372-57e35146bf20', '1559369064-c4d65141e408', '1479859546309-cd77fa21c8f6'],
  'multi-sport-court': ['1527767654427-1790d8ff3745', '1510846699902-9211b99dac11', '1573294184805-e3044b161ace'],
  'civil-works': ['1630288214173-a119cf823388', '1712711649566-16c7cfcf341c', '1691047489143-79b91c648c85'],
  'basketball-court': ['1761767891805-e02480aab3a9', '1768554630751-6448593749eb', '1608245449230-4ac19066d2d0'],
  'tennis-court': ['1761404984667-16d6c9158c59', '1499510318569-1a3d67dc3976', '1554068865-24cecd4e34b8'],
  'badminton-court': ['1775993167284-8e6a6e56ab69', '1775993167393-f2add1f8eec2', '1626224583764-f87db24ac4ea'],
  'running-track': ['1549896869-ca27eeffe4fb', '1474546652694-a33dd8161d66', '1502904550040-7534597429ae'],
  'drainage-fencing-floodlighting': ['1679391029864-d46f366a456b', '1716561388086-cbc1e07f9f65', '1676746610993-fa0c050d1f6d'],
  'turnkey-projects': ['1546717003-caee5f93a9db', '1705593136686-d5f32b611aa9', '1605154431790-9304b3753113'],
};
