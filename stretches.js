// stretches.js — full stretch library with inline SVG illustrations
// SVGs are simplified but evocative stick figures for each pose

const STRETCHES = [
  {
    id: 1,
    name: "Cat-cow",
    area: "back",
    areaLabel: "Back · spine",
    hold: "10 slow reps",
    description: "On hands and knees, alternate between arching and rounding your spine.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Cat-cow: person on all fours, spine arched up -->
      <circle cx="30" cy="42" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- spine curve up (cat) -->
      <path d="M39 42 Q60 20 81 42" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms -->
      <line x1="30" y1="51" x2="25" y2="68" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="39" y1="50" x2="44" y2="68" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- hips -->
      <circle cx="81" cy="42" r="5" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
      <!-- legs back -->
      <line x1="81" y1="47" x2="78" y2="68" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="81" y1="47" x2="95" y2="68" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arrows showing movement -->
      <path d="M60 18 Q60 14 64 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.5"/>
    </svg>`,
    color: "#e8f0ea"
  },
  {
    id: 2,
    name: "Child's pose",
    area: "back",
    areaLabel: "Back · hips",
    hold: "45–60 sec",
    description: "Kneel and fold forward, arms extended or alongside your body. Let everything release.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Child's pose: folded forward, forehead to mat -->
      <circle cx="88" cy="38" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- torso folding forward -->
      <path d="M88 47 Q70 52 50 54 Q35 55 22 54" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms extended forward -->
      <line x1="22" y1="54" x2="16" y2="58" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <!-- hips up -->
      <circle cx="88" cy="56" r="6" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="1.5"/>
      <!-- legs folded under -->
      <path d="M88 62 Q88 72 80 76 Q72 80 68 76" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M88 62 Q92 72 96 76" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- ground line -->
      <line x1="10" y1="76" x2="110" y2="76" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#edeaf5"
  },
  {
    id: 3,
    name: "Pigeon pose",
    area: "hips",
    areaLabel: "Hips · glutes",
    hold: "45 sec each side",
    description: "Front leg bent across the body, back leg extended. Fold forward for a deeper release.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Pigeon: one knee bent forward, torso upright or forward -->
      <circle cx="62" cy="28" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- torso -->
      <line x1="62" y1="37" x2="62" y2="55" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- hips -->
      <ellipse cx="62" cy="55" rx="10" ry="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <!-- front leg bent (pigeon leg) -->
      <path d="M55 58 Q44 64 40 70 Q38 76 45 76" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- back leg extended -->
      <path d="M69 58 Q80 64 90 70 Q96 74 100 78" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms to floor -->
      <line x1="62" y1="44" x2="40" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <line x1="62" y1="44" x2="84" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <line x1="10" y1="78" x2="110" y2="78" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#f5eaea"
  },
  {
    id: 4,
    name: "Doorway chest stretch",
    area: "shoulders",
    areaLabel: "Chest · shoulders",
    hold: "30 sec",
    description: "Stand in a doorway, arms at 90°, lean gently forward to open the chest.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Doorway: two vertical lines, person between -->
      <rect x="12" y="10" width="4" height="72" rx="1" fill="currentColor" opacity="0.12"/>
      <rect x="104" y="10" width="4" height="72" rx="1" fill="currentColor" opacity="0.12"/>
      <!-- person standing -->
      <circle cx="60" cy="26" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- torso -->
      <line x1="60" y1="35" x2="60" y2="60" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms spread wide at 90deg, hands on frame -->
      <line x1="60" y1="42" x2="16" y2="42" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="42" x2="104" y2="42" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- legs -->
      <line x1="60" y1="60" x2="50" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="60" x2="70" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- slight forward lean arrow -->
      <path d="M60 35 Q58 38 56 38" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.4"/>
    </svg>`,
    color: "#eaf0f5"
  },
  {
    id: 5,
    name: "Seated hamstring",
    area: "legs",
    areaLabel: "Hamstrings",
    hold: "30 sec each side",
    description: "Sit with one leg extended, reach towards your foot. Keep your spine long.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Seated forward fold one leg -->
      <circle cx="36" cy="36" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- torso folding over extended leg -->
      <path d="M36 45 Q50 50 75 54" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- extended leg -->
      <line x1="36" y1="60" x2="100" y2="60" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- bent leg (other side) -->
      <path d="M36 60 Q30 68 26 72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms reaching to foot -->
      <line x1="36" y1="52" x2="92" y2="58" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <line x1="36" y1="52" x2="96" y2="60" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <line x1="10" y1="72" x2="110" y2="72" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#f0f5ea"
  },
  {
    id: 6,
    name: "Hip flexor lunge",
    area: "hips",
    areaLabel: "Hip flexors",
    hold: "30 sec each side",
    description: "Low lunge with back knee down. Sink hips forward and down, keep torso upright.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Low lunge -->
      <circle cx="55" cy="22" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- torso upright -->
      <line x1="55" y1="31" x2="55" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms up slight -->
      <line x1="55" y1="38" x2="40" y2="32" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="55" y1="38" x2="70" y2="32" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <!-- front leg bent -->
      <path d="M55 52 Q45 56 35 58 L32 78" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- back leg extended, knee down -->
      <path d="M55 52 Q70 56 82 62 Q86 68 85 78" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- back knee dot -->
      <circle cx="85" cy="75" r="3" fill="currentColor" opacity="0.25"/>
      <line x1="10" y1="78" x2="110" y2="78" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#f5f0ea"
  },
  {
    id: 7,
    name: "Shoulder cross stretch",
    area: "shoulders",
    areaLabel: "Shoulders",
    hold: "20 sec each side",
    description: "Draw one arm across your chest, hold with the opposite hand just above the elbow.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Standing, one arm across chest -->
      <circle cx="60" cy="22" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="31" x2="60" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arm stretched across -->
      <line x1="60" y1="40" x2="32" y2="42" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- other arm holding it -->
      <path d="M60 40 Q54 40 44 42 Q38 43 36 42" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <!-- legs -->
      <line x1="60" y1="62" x2="50" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="62" x2="70" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#eaeaf5"
  },
  {
    id: 8,
    name: "Neck rolls",
    area: "neck",
    areaLabel: "Neck · traps",
    hold: "5 slow reps each way",
    description: "Gently drop your ear to your shoulder, then slowly roll your chin to your chest and to the other side.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Head tilt with arc showing movement -->
      <circle cx="60" cy="30" r="11" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- neck -->
      <line x1="60" y1="41" x2="60" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- shoulders -->
      <line x1="60" y1="52" x2="35" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="52" x2="85" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- torso suggestion -->
      <line x1="60" y1="52" x2="60" y2="72" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
      <!-- arc showing neck roll motion -->
      <path d="M42 24 Q60 12 78 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.45"/>
      <!-- arrow tips -->
      <polyline points="41,28 42,24 46,25" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.45"/>
      <polyline points="79,28 78,24 74,25" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.45"/>
    </svg>`,
    color: "#f5eaea"
  },
  {
    id: 9,
    name: "Figure-four stretch",
    area: "hips",
    areaLabel: "Glutes · piriformis",
    hold: "30 sec each side",
    description: "Lying on your back, cross one ankle over the opposite knee and draw both legs in.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Lying on back, figure four legs -->
      <circle cx="22" cy="44" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- body on floor -->
      <line x1="22" y1="53" x2="75" y2="53" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- bent knee (figure four leg) - crosses over -->
      <path d="M60 53 Q62 40 72 38 Q80 36 84 44" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- other leg bent, knee up -->
      <path d="M75 53 Q80 42 88 40 Q96 38 98 50" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- ankle resting on knee -->
      <circle cx="84" cy="44" r="3.5" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
      <!-- arms reaching for shin -->
      <path d="M22 48 Q50 38 88 44" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="10" y1="64" x2="110" y2="64" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#eaf5ea"
  },
  {
    id: 10,
    name: "Cobra stretch",
    area: "back",
    areaLabel: "Lower back · abs",
    hold: "20–30 sec",
    description: "Lie face down, press through your hands to lift your chest. Keep hips grounded.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Cobra: person lying face down, chest raised -->
      <circle cx="88" cy="34" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- curved spine lifting from floor -->
      <path d="M88 43 Q72 48 55 54 Q40 58 20 62" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms pressing -->
      <line x1="75" y1="48" x2="68" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="80" y1="46" x2="80" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- legs flat on floor -->
      <line x1="20" y1="62" x2="10" y2="64" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="20" y1="62" x2="16" y2="68" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="10" y1="64" x2="110" y2="64" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#f5f0ea"
  },
  {
    id: 11,
    name: "Standing quad stretch",
    area: "legs",
    areaLabel: "Quads",
    hold: "25 sec each side",
    description: "Stand on one leg, draw the other foot to your glutes. Keep knees together.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Standing quad stretch: one leg up behind -->
      <circle cx="60" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="29" x2="60" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms out for balance -->
      <line x1="60" y1="38" x2="38" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="60" y1="38" x2="82" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <!-- standing leg -->
      <line x1="60" y1="56" x2="58" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- lifted leg bent back -->
      <path d="M60 56 Q70 60 74 54 Q78 46 72 42" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- hand holding foot -->
      <circle cx="72" cy="42" r="4" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
      <!-- hand reaching back -->
      <line x1="60" y1="38" x2="72" y2="42" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    </svg>`,
    color: "#eaf5f0"
  },
  {
    id: 12,
    name: "Seated spinal twist",
    area: "back",
    areaLabel: "Spine · obliques",
    hold: "30 sec each side",
    description: "Sit tall with one leg crossed. Twist towards the bent knee, using your arm as a brace.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Seated twist -->
      <circle cx="55" cy="26" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- torso twisted -->
      <line x1="55" y1="35" x2="55" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- one arm bracing behind -->
      <line x1="55" y1="44" x2="72" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <!-- other arm over knee -->
      <line x1="55" y1="44" x2="40" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- legs: one bent (knee up), one extended -->
      <path d="M55 56 Q42 60 35 72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="55" y1="56" x2="90" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- bent knee up -->
      <path d="M48 58 Q44 50 50 46" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <!-- twist arc -->
      <path d="M48 30 Q55 24 62 30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.4"/>
      <line x1="10" y1="72" x2="110" y2="72" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#edeaf5"
  },
  {
    id: 13,
    name: "Calf stretch",
    area: "legs",
    areaLabel: "Calves · ankles",
    hold: "30 sec each side",
    description: "Step one foot back, heel pressed down. Lean into a wall with both hands.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Calf stretch against wall -->
      <rect x="100" y="10" width="5" height="72" rx="1" fill="currentColor" opacity="0.12"/>
      <circle cx="60" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- torso leaning forward -->
      <path d="M60 33 Q72 44 80 52" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms to wall -->
      <line x1="80" y1="46" x2="100" y2="42" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="80" y1="46" x2="100" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <!-- front leg bent -->
      <path d="M80 52 Q76 62 72 72 Q70 78 72 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- back leg straight, heel down -->
      <path d="M80 52 Q65 62 48 68 Q38 72 30 72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="10" y1="80" x2="110" y2="80" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#eaf0f5"
  },
  {
    id: 14,
    name: "Butterfly stretch",
    area: "hips",
    areaLabel: "Inner thighs · groin",
    hold: "45–60 sec",
    description: "Sit with the soles of your feet together, knees dropping out. Fold forward gently.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Butterfly seated -->
      <circle cx="60" cy="26" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- torso -->
      <line x1="60" y1="35" x2="60" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- legs out like butterfly wings -->
      <path d="M60 52 Q45 54 30 62 Q24 66 26 72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 52 Q75 54 90 62 Q96 66 94 72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- feet together -->
      <path d="M26 72 Q60 68 94 72" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <!-- arms resting on feet -->
      <line x1="60" y1="44" x2="44" y2="62" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="60" y1="44" x2="76" y2="62" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="10" y1="78" x2="110" y2="78" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#f5eaea"
  },
  {
    id: 15,
    name: "Overhead tricep stretch",
    area: "shoulders",
    areaLabel: "Triceps · shoulders",
    hold: "20 sec each side",
    description: "Raise one arm, bend at the elbow behind your head. Gently press with the other hand.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Standing, one arm bent behind head -->
      <circle cx="60" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="29" x2="60" y2="58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arm up and bent behind head -->
      <path d="M60 38 Q64 30 66 22 Q68 16 64 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- other arm reaching up to press -->
      <path d="M60 38 Q58 28 60 20 Q61 16 64 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
      <!-- legs -->
      <line x1="60" y1="58" x2="50" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="58" x2="70" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#eaeaf5"
  },
  {
    id: 16,
    name: "Wrist circles",
    area: "shoulders",
    areaLabel: "Wrists · forearms",
    hold: "10 reps each direction",
    description: "Extend arms forward, make slow full circles with your wrists. Great for desk workers.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Wrist circles: arms extended, circles around hands -->
      <circle cx="60" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="33" x2="60" y2="55" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms extended forward -->
      <line x1="60" y1="40" x2="30" y2="40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="40" x2="90" y2="40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- circle motion left wrist -->
      <circle cx="26" cy="40" r="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
      <polyline points="26,32 28,30 30,32" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <!-- circle motion right wrist -->
      <circle cx="94" cy="40" r="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
      <polyline points="94,32 96,30 98,32" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <!-- legs -->
      <line x1="60" y1="55" x2="50" y2="78" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="55" x2="70" y2="78" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#f0f5ea"
  },
  {
    id: 17,
    name: "Thread the needle",
    area: "back",
    areaLabel: "Upper back · shoulder",
    hold: "30 sec each side",
    description: "On all fours, slide one arm under your body and along the floor. Rest your cheek down.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Thread the needle: on all fours, one arm threaded under -->
      <circle cx="82" cy="36" r="8" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- spine roughly level -->
      <line x1="82" y1="44" x2="44" y2="44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arm threaded under (going left, cheek to floor) -->
      <path d="M62 44 Q52 44 42 52 Q36 56 30 54" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- other arm out in front -->
      <line x1="82" y1="44" x2="96" y2="36" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- hips up -->
      <circle cx="44" cy="44" r="5" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1.5"/>
      <!-- legs -->
      <line x1="44" y1="49" x2="40" y2="68" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="44" y1="49" x2="56" y2="68" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- cheek on floor suggestion -->
      <circle cx="30" cy="56" r="4" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1.5"/>
      <line x1="10" y1="68" x2="110" y2="68" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#eaf5ea"
  },
  {
    id: 18,
    name: "Frog pose",
    area: "hips",
    areaLabel: "Inner thighs · hips",
    hold: "60–90 sec",
    description: "On hands and knees, spread knees wide with feet behind them. Sink your hips toward the floor.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Frog: knees wide, on forearms -->
      <circle cx="60" cy="30" r="8" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- torso forward, on forearms -->
      <line x1="60" y1="38" x2="60" y2="54" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- forearms on floor -->
      <line x1="60" y1="48" x2="40" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="48" x2="80" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- knees wide apart -->
      <path d="M60 54 Q44 56 32 62 Q28 66 30 72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 54 Q76 56 88 62 Q92 66 90 72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- feet behind -->
      <line x1="30" y1="72" x2="28" y2="78" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <line x1="90" y1="72" x2="92" y2="78" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <line x1="10" y1="78" x2="110" y2="78" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#f0eaf5"
  },
  {
    id: 19,
    name: "Standing chest opener",
    area: "shoulders",
    areaLabel: "Chest · biceps",
    hold: "30 sec",
    description: "Clasp hands behind your back, straighten arms and gently lift them while opening your chest.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Standing, arms clasped behind, chest open -->
      <circle cx="60" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="29" x2="60" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- arms behind back, clasped, slightly lifted -->
      <path d="M60 38 Q50 50 42 58 Q46 62 60 62 Q74 62 78 58 Q70 50 60 38" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- clasped hands -->
      <circle cx="60" cy="62" r="5" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
      <!-- chest open (shoulders back arc) -->
      <path d="M44 36 Q60 32 76 36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.4"/>
      <!-- legs -->
      <line x1="60" y1="56" x2="50" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="56" x2="70" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#f5f0ea"
  },
  {
    id: 20,
    name: "Supine figure-four",
    area: "hips",
    areaLabel: "Glutes · outer hip",
    hold: "45 sec each side",
    description: "Lying on your back, cross ankle over knee. Either keep foot on floor or draw legs in.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Same as figure four but foot on floor variant -->
      <circle cx="20" cy="42" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="20" y1="51" x2="72" y2="51" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- foot on floor leg bent -->
      <path d="M72 51 Q82 44 88 50 Q92 56 88 62" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- figure four leg: ankle on knee -->
      <path d="M62 51 Q62 40 72 38 Q82 36 84 44" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="82" cy="44" r="3.5" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
      <!-- hands resting -->
      <line x1="20" y1="46" x2="44" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <line x1="10" y1="64" x2="110" y2="64" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#eaf5f0"
  },
  {
    id: 21,
    name: "Wall hamstring",
    area: "legs",
    areaLabel: "Hamstrings · calves",
    hold: "60 sec each side",
    description: "Lie near a wall, extend one leg up against it. Scoot hips close for a deeper stretch.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Lying on back, one leg up the wall -->
      <rect x="104" y="10" width="5" height="72" rx="1" fill="currentColor" opacity="0.12"/>
      <circle cx="20" cy="48" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="20" y1="57" x2="72" y2="57" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- leg up the wall -->
      <path d="M72 57 Q86 44 100 36" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="100" y1="36" x2="104" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <!-- other leg bent or flat -->
      <path d="M56 57 Q60 68 56 74" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="10" y1="72" x2="104" y2="72" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#eaf0f5"
  },
  {
    id: 22,
    name: "Side-lying quad",
    area: "legs",
    areaLabel: "Quads · hip flexor",
    hold: "30 sec each side",
    description: "Lie on your side, bend the top knee and draw your foot to your glutes with your hand.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Side lying quad stretch -->
      <circle cx="22" cy="36" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- body horizontal -->
      <line x1="22" y1="45" x2="80" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- bottom leg straight -->
      <line x1="80" y1="52" x2="108" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- top leg bent back to glutes -->
      <path d="M80 52 Q88 44 92 38 Q94 32 88 30" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <!-- hand holding foot -->
      <circle cx="88" cy="30" r="4" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
      <!-- arm reaching back -->
      <path d="M60 48 Q76 38 88 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <!-- other arm under head -->
      <line x1="22" y1="40" x2="10" y2="38" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <line x1="10" y1="62" x2="110" y2="62" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#f5eaea"
  },

  // ── Casual / standing / desk-friendly stretches ─────────────

  {
    id: 23,
    name: "Ear to shoulder",
    area: "neck",
    areaLabel: "Neck · upper traps",
    hold: "20 sec each side",
    description: "Standing or sitting, drop one ear gently toward your shoulder. Let gravity do the work — no pulling.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="28" r="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="38" x2="60" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="52" x2="36" y2="54" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="52" x2="84" y2="50" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="62" x2="52" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="62" x2="68" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M52 22 Q60 16 68 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.4"/>
      <polyline points="50,26 52,22 56,24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
    </svg>`,
    color: "#f5eaea"
  },
  {
    id: 24,
    name: "Chin tucks",
    area: "neck",
    areaLabel: "Neck · posture",
    hold: "10 reps, hold 3 sec",
    description: "Gently draw your chin straight back, making a slight double chin. Counteracts forward head posture.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="65" cy="28" r="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="56" cy="28" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4,3" opacity="0.35"/>
      <line x1="65" y1="38" x2="65" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="65" y1="50" x2="42" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="65" y1="50" x2="88" y2="50" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="65" y1="56" x2="56" y2="78" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="65" y1="56" x2="74" y2="78" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="70" y1="30" x2="58" y2="30" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.5"/>
      <polyline points="60,27 58,30 61,33" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    </svg>`,
    color: "#eaf0f5"
  },
  {
    id: 25,
    name: "Standing side bend",
    area: "back",
    areaLabel: "Side body · obliques",
    hold: "20–30 sec each side",
    description: "Reach one arm overhead and lean to the side, sliding the other hand down your leg. Feel the long stretch through your ribs.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="58" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M58 29 Q54 45 52 58" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="58" y1="38" x2="76" y2="24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="58" y1="38" x2="46" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="52" y1="58" x2="44" y2="78" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="52" y1="58" x2="62" y2="78" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#eef4f0"
  },
  {
    id: 26,
    name: "Forward fold",
    area: "back",
    areaLabel: "Hamstrings · back",
    hold: "30–45 sec",
    description: "Stand with feet hip-width, fold forward and let your upper body hang. Bend your knees if needed — just let gravity work.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="64" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M60 55 Q60 40 62 28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="40" x2="40" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="60" y1="40" x2="44" y2="54" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="60" y1="73" x2="48" y2="86" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="73" x2="72" y2="86" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#f0eaf5"
  },
  {
    id: 27,
    name: "Seated neck stretch",
    area: "neck",
    areaLabel: "Neck · suboccipital",
    hold: "20 sec each direction",
    description: "Sitting, gently turn your head to look over one shoulder and hold. Then tuck your chin and rotate.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="34" y="66" width="52" height="12" rx="3" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="1.5"/>
      <line x1="34" y1="78" x2="34" y2="86" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="86" y1="78" x2="86" y2="86" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="68" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="42" x2="64" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="64" y1="56" x2="44" y2="58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="64" y1="56" x2="80" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="64" y1="56" x2="56" y2="66" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="64" y1="56" x2="72" y2="66" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 26 Q68 20 76 26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.4"/>
      <polyline points="77,29 76,26 73,28" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
    </svg>`,
    color: "#f5f0ea"
  },
  {
    id: 28,
    name: "Chest hug",
    area: "back",
    areaLabel: "Upper back · rhomboids",
    hold: "20–30 sec",
    description: "Wrap both arms around yourself like a hug, hands reaching for your shoulder blades. Round your upper back and breathe.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="22" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="31" x2="60" y2="58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 40 Q46 36 38 42 Q34 46 38 50 Q46 54 60 50" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 40 Q74 36 82 42 Q86 46 82 50 Q74 54 60 50" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="58" x2="50" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="58" x2="70" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#edeaf5"
  },
  {
    id: 29,
    name: "Seated figure-four",
    area: "hips",
    areaLabel: "Glutes · hips",
    hold: "30 sec each side",
    description: "Sit in a chair, cross one ankle over the opposite knee. Sit tall or gently lean forward for more.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="28" y="62" width="64" height="10" rx="3" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="1.5"/>
      <line x1="32" y1="72" x2="32" y2="82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="88" y1="72" x2="88" y2="82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="60" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="33" x2="60" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="46" x2="38" y2="48" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="60" y1="46" x2="82" y2="48" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="60" y1="56" x2="52" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M52 56 Q46 50 50 44 Q54 40 60 44" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="52" cy="44" r="3.5" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    color: "#eaf5ea"
  },
  {
    id: 30,
    name: "Desk chest stretch",
    area: "shoulders",
    areaLabel: "Chest · shoulders",
    hold: "20–30 sec",
    description: "Sitting at a desk, clasp hands behind your head and gently squeeze elbows back. Open your chest wide.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="20" y="52" width="80" height="6" rx="2" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1"/>
      <circle cx="60" cy="22" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="31" x2="60" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 38 Q50 30 40 32 Q36 34 38 38" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 38 Q70 30 80 32 Q84 34 82 38" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="38" y1="38" x2="82" y2="38" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <path d="M44 30 Q60 24 76 30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.4"/>
    </svg>`,
    color: "#eaf0f5"
  },
  {
    id: 31,
    name: "Standing hip circle",
    area: "hips",
    areaLabel: "Hips · lower back",
    hold: "10 reps each way",
    description: "Hands on hips, feet hip-width. Draw slow large circles with your hips. Lovely for loosening up.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="29" x2="60" y2="50" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="36" x2="44" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="60" y1="36" x2="76" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <ellipse cx="60" cy="52" rx="14" ry="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
      <polyline points="72,48 74,52 70,54" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <line x1="60" y1="50" x2="50" y2="72" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="50" x2="70" y2="72" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#f5f0ea"
  },
  {
    id: 32,
    name: "Finger interlace stretch",
    area: "shoulders",
    areaLabel: "Wrists · forearms · fingers",
    hold: "15 sec each direction",
    description: "Interlace fingers and push palms away from you, then overhead. Good for anyone who types a lot.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="32" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="41" x2="60" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="50" x2="40" y2="60" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="50" x2="80" y2="60" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="62" x2="50" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="62" x2="70" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="60" cy="62" rx="12" ry="5" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1.5"/>
      <line x1="52" y1="62" x2="68" y2="62" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
    </svg>`,
    color: "#f0f5ea"
  },
  {
    id: 33,
    name: "Arms-up back arch",
    area: "back",
    areaLabel: "Spine · chest",
    hold: "15–20 sec",
    description: "Reach both arms overhead, interlace fingers and gently arch backwards. The antidote to slouching.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="38" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M60 47 Q62 54 64 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 38 Q55 26 52 18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M52 18 Q60 14 68 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <path d="M60 38 Q65 26 68 18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="64" y1="60" x2="54" y2="78" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="64" y1="60" x2="74" y2="78" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#eef4f0"
  },
  {
    id: 34,
    name: "Wall calf raise & stretch",
    area: "legs",
    areaLabel: "Calves · ankles",
    hold: "10 raises, then 30 sec stretch",
    description: "Hand on a wall, rise onto tiptoes then lower heel below the step. Doubles as strengthening.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="100" y="10" width="5" height="72" rx="1" fill="currentColor" opacity="0.12"/>
      <circle cx="55" cy="22" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="55" y1="31" x2="58" y2="55" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="58" y1="42" x2="100" y2="38" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="58" y1="55" x2="50" y2="76" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="58" y1="55" x2="66" y2="76" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="50" y1="76" x2="48" y2="82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="66" y1="76" x2="68" y2="70" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <line x1="10" y1="80" x2="100" y2="80" stroke="currentColor" stroke-width="1" opacity="0.15"/>
      <polyline points="50,74 48,78 52,78" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
    </svg>`,
    color: "#f5eaea"
  },
  {
    id: 35,
    name: "Seated torso twist",
    area: "back",
    areaLabel: "Spine · obliques",
    hold: "20 sec each side",
    description: "Sitting in a chair, feet flat. Rotate your upper body and hold the chair back. Keep hips square.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="76" y="34" width="8" height="38" rx="2" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="1.2"/>
      <rect x="30" y="62" width="56" height="10" rx="3" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="1.2"/>
      <line x1="34" y1="72" x2="34" y2="82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="82" y1="72" x2="82" y2="82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="52" cy="22" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="52" y1="31" x2="52" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="52" y1="40" x2="34" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="52" y1="40" x2="76" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="52" y1="52" x2="44" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="52" y1="52" x2="60" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M44 26 Q52 20 60 26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.4"/>
      <polyline points="60,29 60,26 57,28" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
    </svg>`,
    color: "#edeaf5"
  },
  {
    id: 36,
    name: "90/90 hip stretch",
    area: "hips",
    areaLabel: "Hips · external rotation",
    hold: "45 sec each side",
    description: "Sit with both knees at 90 degrees, one in front and one to the side. Sit tall and breathe.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="58" cy="26" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="58" y1="35" x2="58" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="58" y1="44" x2="40" y2="46" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="58" y1="44" x2="76" y2="46" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <path d="M58 52 Q50 54 42 60 L38 76" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M38 60 Q40 54 48 52 Q54 52 58 52" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M58 52 Q70 52 80 56 L88 72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="10" y1="76" x2="110" y2="76" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#eaf5f0"
  },
  {
    id: 37,
    name: "Shoulder shrugs",
    area: "shoulders",
    areaLabel: "Shoulders · traps",
    hold: "10 slow reps",
    description: "Lift both shoulders up toward your ears, hold a moment, then drop them down fully. Release all tension.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="22" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="31" x2="60" y2="60" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="36" x2="34" y2="34" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="36" x2="86" y2="34" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="60" x2="50" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="60" x2="70" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <polyline points="38,38 34,34 38,30" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.45"/>
      <polyline points="82,38 86,34 82,30" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.45"/>
    </svg>`,
    color: "#eaeaf5"
  },
  {
    id: 38,
    name: "Standing IT band stretch",
    area: "legs",
    areaLabel: "IT band · outer thigh",
    hold: "30 sec each side",
    description: "Cross one leg behind the other, lean to the side and reach your arm overhead. Feel the pull along the outer leg.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="57" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M57 29 Q55 42 54 56" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="57" y1="38" x2="78" y2="26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="57" y1="38" x2="42" y2="48" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="54" y1="56" x2="46" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M54 56 Q64 60 66 72 Q68 78 64 82" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#f5eaea"
  },
  {
    id: 39,
    name: "Doorway hip flexor",
    area: "hips",
    areaLabel: "Hip flexors · psoas",
    hold: "30 sec each side",
    description: "Step one foot forward through a doorway into a slight lunge. Keep upright and gently push your hip forward.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="10" width="4" height="72" rx="1" fill="currentColor" opacity="0.12"/>
      <rect x="106" y="10" width="4" height="72" rx="1" fill="currentColor" opacity="0.12"/>
      <circle cx="60" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="29" x2="60" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="38" x2="14" y2="42" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="38" x2="106" y2="42" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 52 Q44 56 36 68 L34 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 52 Q72 56 80 70 L82 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#f0eaf5"
  },
  {
    id: 40,
    name: "Seated ankle-to-knee",
    area: "hips",
    areaLabel: "Outer hip · glutes",
    hold: "45 sec each side",
    description: "Sit on the floor, one leg extended, place the opposite ankle on that knee. Sit tall or fold slightly forward.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="30" cy="30" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="30" y1="39" x2="32" y2="56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="32" y1="48" x2="16" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="32" y1="56" x2="80" y2="60" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M48 58 Q46 46 54 42 Q62 38 66 44 Q70 50 66 58" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="66" cy="58" r="3.5" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
      <line x1="32" y1="48" x2="64" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <line x1="10" y1="72" x2="110" y2="72" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#eaf5ea"
  },
  {
    id: 41,
    name: "Wall shoulder stretch",
    area: "shoulders",
    areaLabel: "Shoulder · chest",
    hold: "30 sec each side",
    description: "Place one hand on a wall at shoulder height, fingers pointing back. Gently rotate away from the wall.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="10" width="5" height="72" rx="1" fill="currentColor" opacity="0.12"/>
      <circle cx="64" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="64" y1="33" x2="64" y2="58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="64" y1="42" x2="15" y2="40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="64" y1="42" x2="80" y2="38" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="64" y1="58" x2="54" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="64" y1="58" x2="74" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M66 28 Q72 24 76 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.4"/>
      <polyline points="76,31 76,28 73,30" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
    </svg>`,
    color: "#eaf0f5"
  },
  {
    id: 42,
    name: "Standing glute squeeze",
    area: "hips",
    areaLabel: "Glutes · posture",
    hold: "10 reps, hold 3 sec",
    description: "Standing tall, squeeze both glutes hard and hold. Simple, discreet, effective — works at a bus stop.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="29" x2="60" y2="58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="36" x2="44" y2="42" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <line x1="60" y1="36" x2="76" y2="42" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <ellipse cx="60" cy="52" rx="10" ry="7" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="2"/>
      <line x1="60" y1="58" x2="50" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="58" x2="70" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="46" y1="50" x2="42" y2="54" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.4"/>
      <line x1="74" y1="50" x2="78" y2="54" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.4"/>
    </svg>`,
    color: "#f0f5ea"
  },
  {
    id: 43,
    name: "Pec minor stretch",
    area: "shoulders",
    areaLabel: "Pecs · front shoulder",
    hold: "30 sec each side",
    description: "Raise one arm to 90 degrees against a wall or door frame. Turn your body away until you feel a deep chest stretch.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="104" y="10" width="5" height="72" rx="1" fill="currentColor" opacity="0.12"/>
      <circle cx="56" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="56" y1="33" x2="56" y2="58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="56" y1="38" x2="104" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="56" y1="42" x2="38" y2="48" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="56" y1="58" x2="46" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="56" y1="58" x2="66" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M58 28 Q66 24 70 30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.4"/>
    </svg>`,
    color: "#f5eaea"
  },
  {
    id: 44,
    name: "Low back knees-to-chest",
    area: "back",
    areaLabel: "Lower back",
    hold: "30–45 sec",
    description: "Lie on your back and draw both knees into your chest. Rock gently side to side. Bliss.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="22" cy="46" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="22" y1="55" x2="62" y2="55" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M62 55 Q72 50 78 44 Q82 38 78 34 Q74 30 68 34 Q62 38 62 46 L62 55" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M68 56 Q76 58 80 52 Q84 46 80 42" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="22" y1="50" x2="50" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="22" y1="50" x2="52" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <line x1="10" y1="66" x2="110" y2="66" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#eef4f0"
  },
  {
    id: 45,
    name: "Seated shoulder rolls",
    area: "shoulders",
    areaLabel: "Shoulders · upper back",
    hold: "10 reps each direction",
    description: "Sit or stand, roll both shoulders forward in big slow circles, then reverse. Wonderful for tension.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="22" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="31" x2="60" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="40" x2="36" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="40" x2="84" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="34" cy="38" r="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
      <polyline points="34,30 36,34 32,35" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <circle cx="86" cy="38" r="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
      <polyline points="86,30 84,34 88,35" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <line x1="60" y1="62" x2="50" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="62" x2="70" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#eaeaf5"
  },
  {
    id: 46,
    name: "Standing toe touch reach",
    area: "legs",
    areaLabel: "Hamstrings · back",
    hold: "30 sec, 3 reps",
    description: "Stand with feet together, slowly reach down toward your toes. Don't force it — let each exhale take you a little further.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="60" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M60 51 Q60 38 60 28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="38" x2="44" y2="46" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="60" y1="38" x2="44" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <line x1="60" y1="69" x2="48" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="69" x2="72" y2="80" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: "#f0eaf5"
  },
  {
    id: 47,
    name: "Chest expansion walk",
    area: "shoulders",
    areaLabel: "Chest · posture",
    hold: "2 min walk",
    description: "Clasp hands behind your back and walk slowly, lifting your chest. Feels ridiculous, works brilliantly.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="52" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="52" y1="29" x2="54" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M54 40 Q44 52 42 60 Q44 64 52 62 Q60 60 60 52 Q60 44 54 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="52" cy="62" r="4" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
      <line x1="54" y1="52" x2="44" y2="70" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="54" y1="52" x2="68" y2="62" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="68" y1="62" x2="72" y2="78" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
    </svg>`,
    color: "#f5f0ea"
  },
  {
    id: 48,
    name: "Lunge with rotation",
    area: "back",
    areaLabel: "Spine · hips · thoracic",
    hold: "30 sec each side",
    description: "Step into a lunge, place your hand on the floor, then rotate your top arm skyward. Opens everything at once.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="58" cy="22" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M58 31 Q55 40 52 52" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="58" y1="38" x2="76" y2="20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="58" y1="40" x2="42" y2="56" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <path d="M52 52 Q42 58 34 68 L32 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M52 52 Q64 56 76 66 L80 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="10" y1="80" x2="110" y2="80" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#eef4f0"
  },
  {
    id: 49,
    name: "Supine spinal twist",
    area: "back",
    areaLabel: "Lower back · spine",
    hold: "45 sec each side",
    description: "Lie on your back, draw one knee across your body. Extend both arms out and look the other way. Deeply releasing.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="22" cy="44" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="22" y1="53" x2="72" y2="53" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 53 Q66 44 76 40 Q84 38 86 46 Q86 54 78 56 Q70 58 64 54" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="22" y1="48" x2="10" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="22" y1="50" x2="50" y2="46" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <line x1="10" y1="64" x2="110" y2="64" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#edeaf5"
  },
  {
    id: 50,
    name: "Happy baby",
    area: "hips",
    areaLabel: "Hips · inner thighs · back",
    hold: "45–60 sec",
    description: "Lie on your back, grab the outsides of your feet and draw knees toward armpits. Rock gently. Pure bliss.",
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="52" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="43" x2="60" y2="28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 43 Q44 38 32 28 Q28 24 30 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 43 Q76 38 88 28 Q92 24 90 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="30" cy="19" r="4" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="90" cy="19" r="4" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
      <line x1="60" y1="61" x2="60" y2="72" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="10" y1="72" x2="110" y2="72" stroke="currentColor" stroke-width="1" opacity="0.15"/>
    </svg>`,
    color: "#f5eaea"
  },
];