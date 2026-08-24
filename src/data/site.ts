export const site = {
  name: 'SREEVATSAV PRASATH',
  role: 'MECHANICAL ENGINEER',
  tagline: 'Buried in CAD and machining tolerances by day; chasing form, flow, and function through sketches and simulations by night.',
  subTagline: 'Machines are stories. Every bolt, every curve a small piece of intent.',
  rev: 'REV 2026',
  phone: '+91 8867650302',
  email: 'sreevatsavprasath@gmail.com',
  socials: [
    { label: '@sreevatttsav', href: 'https://instagram.com/sreevatttsav' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
  resumeUrl: '/renders/resume.pdf',
};

export interface Flagship {
  sheet: string;
  id: string;
  title: string;
  subtitle: string;
  status?: string;
  stamp?: string;
  classified?: boolean;
  summary: string;
  story: { heading: string; body: string }[];
  specs: { item: string; part: string; material: string; qty: string; note: string }[];
  dims: { value: string; label: string }[];
  shots: { img?: string; video?: string; tag: string }[];
}

export const flagships: Flagship[] = [
  {
    sheet: 'SHT 01',
    id: 'rover',
    title: 'DIFFERENTIAL ROVER',
    subtitle: 'DRIVE / ELECTRONICS / FIRMWARE',
    stamp: 'DEPLOYED',
    summary:
      'Designed and integrated a differential-drive rover with pan-tilt camera system, custom electronics and firmware at ASTRM Intelligence Labs. Full-stack machine: chassis to control loop.',
    story: [
      {
        heading: 'THE PROBLEM',
        body: 'A vision-capable ground platform that could track and follow targets autonomously — built from scratch, off-the-shelf parts only, no COTS kit.',
      },
      {
        heading: 'ELECTRONICS + FIRMWARE',
        body: 'Integrated PX4 with custom motor-driver and servo interfaces. Wrote vision-based tracking and follow modules for autonomous operation.',
      },
      {
        heading: 'PAYLOAD',
        body: 'Designed and prototyped a laser turret for vision-based target tracking and autonomous aiming, on a custom pan-tilt camera gimbal.',
      },
    ],
    specs: [
      { item: '01', part: 'Chassis', material: 'Laser-cut ply + Al', qty: '1', note: 'DFM-optimized plate layout' },
      { item: '02', part: 'Drive motors', material: 'Brushed DC + enc.', qty: '2', note: 'Differential steering' },
      { item: '03', part: 'Pan-tilt gimbal', material: '3D-printed PETG', qty: '1', note: 'Camera + laser turret mount' },
      { item: '04', part: 'Flight controller', material: 'PX4-compatible', qty: '1', note: 'Custom driver + servo iface' },
    ],
    dims: [
      { value: 'PX4', label: 'FLIGHT STACK' },
      { value: '360°', label: 'GIMBAL SWEEP' },
      { value: '3-DOMAIN', label: 'MECH / ELEC / FW' },
    ],
    shots: [
      { video: '/renders/rover-video.mp4', img: '/renders/rover-1.jpeg', tag: 'ASSEMBLED — TEST FOOTAGE' },
      { img: '/renders/rover-2.jpeg', tag: 'ELECTRONICS ENCLOSURE' },
      { img: '/renders/rover-3.jpeg', tag: 'PAN-TILT TURRET' },
    ],
  },
  {
    sheet: 'SHT 02',
    id: 'interceptor-drone',
    title: 'INTERCEPTOR DRONE',
    subtitle: 'HIGH-SPEED PURSUIT PLATFORM',
    status: 'STATUS: IN DEVELOPMENT',
    stamp: 'IN DEV',
    classified: true,
    summary:
      'An inexpensive drone built to fly 200–220 kmph, using vision-based proportional navigation to home into targets. Currently iterating airframe and guidance.',
    story: [
      {
        heading: 'THE TARGET NUMBER',
        body: '200–220 kmph on a budget build. Every gram of the airframe is justified against thrust-to-weight and drag budgets.',
      },
      {
        heading: 'GUIDANCE',
        body: 'Proportional navigation driven by onboard vision — the same pursuit law used in missile guidance, scaled to hobby hardware.',
      },
      {
        heading: 'CURRENT STATE',
        body: 'Airframe iterations ongoing. This sheet updates as the project does — check back for flight data.',
      },
    ],
    specs: [
      { item: '01', part: 'Airframe', material: 'Foam + CF spar', qty: '1', note: 'Iter. 3 current' },
      { item: '02', part: 'Powertrain', material: 'High-KV BLDC', qty: '1', note: 'Oversized for T/W margin' },
      { item: '03', part: 'Vision module', material: 'CMOS + SBC', qty: '1', note: 'Proportional nav loop' },
      { item: '04', part: 'Target speed', material: '—', qty: '220', note: 'KMPH design goal' },
    ],
    dims: [
      { value: '220', label: 'KMPH TARGET' },
      { value: 'PN', label: 'PROPORTIONAL NAV' },
      { value: '$', label: 'LOW COST BUILD' },
    ],
    shots: [
      { img: '/renders/drone-1.png', tag: 'AIRFRAME' },
      { img: '/renders/drone-2.png', tag: 'POWERTRAIN' },
      { img: '/renders/drone-3.png', tag: 'VISION MODULE' },
    ],
  },
  {
    sheet: 'SHT 03',
    id: 'basketball-bot',
    title: 'ROBOCON BASKETBALL BOT',
    subtitle: 'COMPETITION ROBOT — CSD ROBOCON NITK',
    stamp: 'COMPETITION',
    summary:
      'Competition basketball robot built with a 30-member team at CSD Robocon NITK. Owned the intake roller mechanism and drove DFM iterations across the bot — +23% performance, −10% mass.',
    story: [
      {
        heading: 'THE BRIEF',
        body: 'Collect, move, score — reliably, at competition pace. Thirty members worth of subsystems converging on one machine that could not afford to fumble.',
      },
      {
        heading: 'MY MECHANISM',
        body: 'The intake roller — the first touch of every possession. Designed for forgiving pickup under sloppy approaches and a clean handoff down the line.',
      },
      {
        heading: 'THE DFM LOOP',
        body: 'Iteration over iteration against real test data: +23% performance, −10% mass, with rapid prototypes keeping the design cycle honest.',
      },
    ],
    specs: [
      { item: '01', part: 'Intake roller mech', material: 'Rapid-prototyped', qty: '1', note: 'Forgiving pickup + feed' },
      { item: '02', part: 'Chassis rev', material: 'DFM-optimized', qty: '1', note: '+23% perf, −10% mass' },
      { item: '03', part: 'Team', material: '—', qty: '30', note: 'Members, one bot' },
      { item: '04', part: 'Season', material: '—', qty: '’24–25', note: 'CSD Robocon NITK' },
    ],
    dims: [
      { value: '+23%', label: 'PERFORMANCE GAIN' },
      { value: '−10%', label: 'MASS CUT' },
      { value: '30', label: 'TEAM MEMBERS' },
    ],
    shots: [
      { img: '/renders/basketball-1.jpg', tag: 'FULL BOT' },
      { img: '/renders/basketball-2.jpg', tag: 'INTAKE ROLLER' },
      { img: '/renders/basketball-3.jpeg', tag: 'PICKER KINEMATICS' },
    ],
  },
  {
    sheet: 'SHT 04',
    id: 'planetary-actuator',
    title: 'PLANETARY ACTUATOR',
    subtitle: '1:6 QUADRUPED JOINT ACTUATOR',
    stamp: 'OFF-THE-SHELF',
    summary:
      'A quadruped actuator with 1:6 planetary gear reduction designed entirely from off-the-shelf parts — no custom manufacturing required to build it.',
    story: [
      {
        heading: 'DESIGN INTENT',
        body: 'Quadruped robots live or die on their joints. This actuator packages a 1:6 planetary reduction around a standard BLDC motor.',
      },
      {
        heading: 'NO CUSTOM PARTS',
        body: 'Every component is purchasable. Anyone can assemble this actuator without touching a lathe — manufacturability as a first-class constraint.',
      },
      {
        heading: 'LESSONS',
        body: 'Tolerance stacking in planetary systems, press-fit bearings, and the discipline of designing for parts you can actually buy.',
      },
    ],
    specs: [
      { item: '01', part: 'Ring gear', material: 'Steel, std. module', qty: '1', note: 'Off-the-shelf' },
      { item: '02', part: 'Planet gears', material: 'Steel, std. module', qty: '3', note: '120° spacing' },
      { item: '03', part: 'Carrier', material: '3D-printed PA12', qty: '1', note: 'Printable jig included' },
      { item: '04', part: 'Reduction', material: '—', qty: '1:6', note: 'Single-stage planetary' },
    ],
    dims: [
      { value: '1:6', label: 'REDUCTION RATIO' },
      { value: '0', label: 'CUSTOM PARTS REQ.' },
      { value: '3×', label: 'PLANET GEAR SET' },
    ],
    shots: [
      { img: '/renders/actuator-1.png', tag: 'FULL STACK — FRONT' },
      { img: '/renders/actuator-2.png', tag: 'GEAR TRAIN' },
      { img: '/renders/actuator-3.png', tag: 'CARRIER — BACK' },
    ],
  },
];

export const archive = [
  { id: 'battlebot', name: 'TEAM GNARLY BATTLE-BOT', note: '15 KG CLASS — 2ND PLACE, VIT VELLORE', img: '/photos/battlebot.png' },
  { id: 'flexure', name: 'SERPENTINE FLEXURE SPRING', note: 'REPLACES COIL SPRINGS — LESS MATERIAL', img: '/photos/flexure.png' },
  { id: 'ornithopter', name: 'ORNITHOPTER WING', note: 'BIRD-BORROWED MECHANISM STUDY', img: '/photos/ornithopter.png' },
  { id: 'ipod', name: 'AI IPOD REMIX', note: 'CLASSIC FORM, NEW BRAIN', img: '/photos/ipod.png' },
];

export const experience = [
  {
    op: 'OP 10',
    org: 'ASTRM INTELLIGENCE LABS',
    role: 'RESIDENT FELLOW',
    date: 'MAY – JUL 2026',
    detail: 'Rover: drive electronics, PX4 firmware, vision tracking, laser turret prototyping.',
  },
  {
    op: 'OP 20',
    org: 'PLACESTATION | WTFUND C3',
    role: 'DESIGN INTERN',
    date: 'AUG – OCT 2025',
    detail: 'Fixture systems replacing springs, packaging design, electronics enclosures for pick-and-place.',
  },
  {
    op: 'OP 30',
    org: 'CSD ROBOCON NITK',
    role: 'MECHANICAL MEMBER',
    date: '2024 – 2025',
    detail: 'Basketball bot: intake roller mechanism, DFM iterations (+23% perf, −10% mass), rapid prototypes.',
  },
  {
    op: 'OP 40',
    org: 'NIT KARNATAKA',
    role: 'B.TECH MECHANICAL ENG.',
    date: '2023 – 2027',
    detail: 'SolidWorks, Fusion 360, AutoCAD, Python, MATLAB, manual machining, laser cutting.',
  },
];
