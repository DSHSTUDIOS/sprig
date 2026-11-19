/*
@title: SOUL GAUNTLET
@author: Antigravity
@tags: ["action", "boss-rush", "undertale", "bullet-hell"]
@addedOn: 2026-11-19
*/

// ==========================================
// SPRIG PALETTE REFERENCE
// 0=Black L=DkGray 1=LtGray 2=White
// 3=Red   C=Brown  7=Cyan   5=Blue
// 6=Yel   F=Olive  4=Green  D=DkGreen
// 8=Pink  H=Purple 9=Orange .=Transparent
// ==========================================

const sprites = {
  // --- PLAYER SOULS ---
  soulRed: bitmap`
................
................
..3333....3333..
.332233..333333.
.32233333333333.
.32333333333333.
.33333333333333.
..333333333333..
...3333333333...
....33333333....
.....333333.....
......3333......
.......33.......
................
................
................`,

  soulBlue: bitmap`
................
................
..5555....5555..
.557755..555555.
.57255555555555.
.57555555555555.
.55555555555555.
..555555555555..
...5555555555...
....55555555....
.....555555.....
......5555......
.......55.......
................
................
................`,

  soulHurt: bitmap`
................
................
..6666....6666..
.662266..662266.
.62222666622226.
.62222222222226.
.66222222222266.
..662222222266..
...6622222266...
....66222266....
.....662266.....
......6666......
.......66.......
................
................
................`,

  // --- COMBAT & VFX ---
  cursor: bitmap`
......2222......
......2662......
......2662......
......2662......
......2662......
......2662......
......2662......
......2662......
......2662......
......2662......
......2662......
......2662......
......2662......
......2662......
......2662......
......2222......`,

  slash: bitmap`
..............22
.............262
............2632
...........2633.
..........2633..
.........2633...
........2633....
.......2633.....
......2633......
.....2633.......
....2633........
...2633.........
..2633..........
.2632...........
2632............
22..............`,

  // --- HAZARDS & PICKUPS ---
  beam: bitmap`
3399662222669933
3399662222669933
9966222222226699
9966222222226699
6622222222222266
6622222222222266
2222222222222222
2222222222222222
2222222222222222
2222222222222222
6622222222222266
6622222222222266
9966222222226699
9966222222226699
3399662222669933
3399662222669933`,

  warn: bitmap`
333..........333
3..............3
3.....6666.....3
......6226......
......6226......
......6226......
......6226......
......6226......
......6666......
................
......6666......
......6226......
......6666......
3..............3
3..............3
333..........333`,

  bone: bitmap`
....222..222....
...2222222222...
...2221111222...
....22222222....
......2222......
......2112......
......2222......
......2222......
......2112......
......2222......
......2222......
......2112......
....22222222....
...2221111222...
...2222222222...
....222..222....`,

  orb: bitmap`
................
.....HHHHHH.....
...HH888888HH...
..H8822222288H..
.H822888888228H.
.H828222222828H.
.H828222222828H.
.H828222222828H.
.H828222222828H.
.H828222222828H.
.H822888888228H.
..H8822222288H..
...HH888888HH...
.....HHHHHH.....
................
................`,

  // Cyan Attack: STAND STILL to avoid damage!
  cyanSpear: bitmap`
.......22.......
......7227......
.....772277.....
....77222277....
.....772277.....
......7227......
......7227......
......7227......
......7227......
......7227......
......7227......
.....772277.....
....77222277....
.....772277.....
......7227......
.......22.......`,

  // Orange Attack: KEEP MOVING to avoid damage!
  orangeFlame: bitmap`
.......99.......
......9669......
.....966669.....
....99622699....
...9662222669...
..996226622699..
..962266662269..
..962662266269..
..962662266269..
..962266662269..
..996226622699..
...9662222669...
....99666699....
.....999999.....
.......99.......
................`,

  // Green Heal Orb: Touch to recover +4 HP!
  healOrb: bitmap`
................
......4444......
....44444444....
...4444224444...
..444442244444..
..444442244444..
.44422222222444.
.44422222222444.
.44444422444444.
..444442244444..
..444442244444..
...4444444444...
....44444444....
......4444......
................
................`,

  // --- AIM METER ---
  meterCenter: bitmap`
......4444......
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
.....442244.....
......4444......`,

  meterMid: bitmap`
................
................
................
................
......6666......
9999996666999999
6666666666666666
6666662222666666
6666662222666666
6666666666666666
9999996666999999
......6666......
................
................
................
................`,

  meterEdge: bitmap`
................
................
................
................
................
LLLLLLLLLLLLLLLL
3333333333333333
3333333333333333
3333333333333333
3333333333333333
LLLLLLLLLLLLLLLL
................
................
................
................
................`,

  // --- ARENA WALL & FLOOR ---
  wall: bitmap`
2222222222222222
2222222222222222
2200000000000022
2200000000000022
2200000000000022
2200000000000022
2200000000000022
2200000000000022
2200000000000022
2200000000000022
2200000000000022
2200000000000022
2200000000000022
2200000000000022
2222222222222222
2222222222222222`,

  bg: bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`,

  // --- BOSS 1: BONE SENTINEL ---
  b1Head: bitmap`
................
................
................
....22222222....
..222222222222..
.22222222222222.
.22000222200022.
.22070222200022.
.22000222200022.
.22222200222222.
..222222222222..
..220202202022..
...2202002022...
....22222222....
.....222222.....
.....552255.....`,

  b1Body: bitmap`
...5555225555...
..555522225555..
.55552200225555.
.55522222222555.
.55522000022555.
.55522222222555.
.55552200225555.
..555222222555..
..555522225555..
...5555555555...
...5555..5555...
...LLL....LLL...
...LLL....LLL...
..2222....2222..
................
................`,

  b1Hand: bitmap`
................
................
.....22..22.....
....22222222....
.....222222.....
......2222......
......2112......
......2222......
......2112......
......2222......
.....222222.....
....22222222....
.....22..22.....
................
................
................`,

  // --- BOSS 2: SPEAR CAPTAIN ---
  b2Head: bitmap`
................
................
......3333......
....33333333....
...1111111111...
..112211112211..
.11111111111111.
.11000000000011.
.11006600660011.
.11000000000011.
.11111111111111.
..111LLLLLL111..
...1111111111...
....LLLLLLLL....
....33111133....
...3311111133...`,

  b2Body: bitmap`
..331111111133..
.33111177111133.
.33111722711133.
33.1111771111.33
33.11LLLLLL11.33
...1111111111...
...LL111111LL...
...1111..1111...
...1111..1111...
...LLL....LLL...
...111....111...
..1111....1111..
..LLLL....LLLL..
................
................
................`,

  b2Hand: bitmap`
................
.......77.......
......7227......
.....772277.....
......7227......
.......77.......
.......11.......
.......11.......
.......11.......
.......11.......
.......11.......
.......11.......
......1111......
.......11.......
................
................`,

  // --- BOSS 3: PYRO PHANTOM ---
  b3Head: bitmap`
................
................
..33........33..
..393..99..393..
...3999669993...
...9966226699...
..996666666699..
..960006600069..
..960206602069..
..960006600069..
..996666666699..
...9960660699...
....99666699....
.....399993.....
....HH3993HH....
...HHH3333HHH...`,

  b3Body: bitmap`
..HHHH3993HHHH..
.HHHH396693HHHH.
.HHH39622693HHH.
.HHH39666693HHH.
.HHHH399993HHHH.
..HHH339933HHH..
..HHHH3333HHHH..
...HHHH33HHHH...
...HHH.HH.HHH...
..HHH..HH..HHH..
..HH...HH...HH..
.......HH.......
................
................
................
................`,

  b3Hand: bitmap`
................
................
.......99.......
......9669......
.....962269.....
....96222269....
....96266269....
....99666699....
.....999999.....
......3993......
.......33.......
................
................
................
................
................`,

  // --- BOSS 4: VOID MONARCH ---
  b4Head: bitmap`
................
................
....HHHHHHHH....
..HH55555555HH..
.HH5522222255HH.
.H522888888225H.
HH5288H00H8825HH
HH528HH00HH825HH
HH528HH00HH825HH
HH5288H00H8825HH
.H522888888225H.
.HH5522222255HH.
..HH55555555HH..
....HHHHHHHH....
.....55HH55.....
....555HH555....`,

  b4Body: bitmap`
..555HHHHHH555..
.555HH8888HH555.
.55HH887788HH55.
.55HH872278HH55.
.555HH8778HH555.
..555HHHHHH555..
..5555HHHH5555..
...555.HH.555...
..555..HH..555..
..55...HH...55..
.......55.......
................
................
................
................
................`,

  b4Hand: bitmap`
................
.......77.......
......7227......
.....572275.....
....55777755....
...5555555555...
....55777755....
.....572275.....
......7227......
.......77.......
................
................
................
................
................
................`,

  // --- BOSS 5: HYPER OMEGA ---
  b5Head: bitmap`
................
................
.LL..333333..LL.
LLLL33999933LLLL
L22L39666693L22L
.LL3960000693LL.
..396032230693..
..396023320693..
..396000000693..
..396066660693..
.LL3960000693LL.
L22L39666693L22L
LLLL33999933LLLL
.LL..333333..LL.
....LLL33LLL....
...LLLL33LLLL...`,

  b5Body: bitmap`
..111336633111..
.11136444463111.
.11364722746311.
.11364722746311.
.11136444463111.
..111336633111..
..LLL111111LLL..
..LL11....11LL..
..LL11....11LL..
..1111....1111..
..3333....3333..
................
................
................
................
................`,

  b5Hand: bitmap`
................
....11111111....
...1122222211...
...1233333321...
...1236226321...
...1233333321...
...1122222211...
....11111111....
.....LL..LL.....
....33....33....
................
................
................
................
................
................`
};

// Legend order = Z-order (FIRST renders ON TOP!)
setLegend(
  ["p", sprites.soulRed],
  ["u", sprites.soulBlue],
  ["i", sprites.soulHurt],
  ["c", sprites.cursor],
  ["x", sprites.slash],
  ["l", sprites.beam],
  ["w", sprites.warn],
  ["b", sprites.bone],
  ["o", sprites.orb],
  ["a", sprites.cyanSpear],
  ["f", sprites.orangeFlame],
  ["h", sprites.healOrb],
  ["1", sprites.b1Head],
  ["2", sprites.b1Body],
  ["3", sprites.b1Hand],
  ["4", sprites.b2Head],
  ["5", sprites.b2Body],
  ["6", sprites.b2Hand],
  ["7", sprites.b3Head],
  ["8", sprites.b3Body],
  ["9", sprites.b3Hand],
  ["Q", sprites.b4Head],
  ["R", sprites.b4Body],
  ["S", sprites.b4Hand],
  ["T", sprites.b5Head],
  ["U", sprites.b5Body],
  ["V", sprites.b5Hand],
  ["t", sprites.meterCenter],
  ["m", sprites.meterMid],
  ["-", sprites.meterEdge],
  ["#", sprites.wall],
  ["_", sprites.bg]
);

setBackground("_");
setSolids(["p", "u", "i", "#"]);

// ==========================================
// CHIPTUNE AUDIO (Verified Sprig Tune Syntax)
// ==========================================
const sfxBlip = tune`
45: E5-45
`;

const sfxSlash = tune`
50: C6/50, 50: G5/50, 70: C5/70
`;

const sfxCrit = tune`
45: G5-45 + C5^45, 45: B5-45 + E5^45, 90: D6-90 + G5^90, 120: G6-120 + C6^120
`;

const sfxSuper = tune`
50: C5/50, 50: E5/50, 50: G5/50, 50: C6/50, 140: E6-140 + C5/140
`;

const sfxHurt = tune`
70: F3/70, 90: C3/90, 110: A2/110
`;

const sfxHeal = tune`
60: C5~60, 60: E5~60, 60: G5~60, 110: C6~110
`;

const sfxLaser = tune`
50: A5/50 + A3-50, 80: E5/80 + E3-80
`;

const sfxJump = tune`
40: D5^40, 50: G5^50
`;

const sfxWin = tune`
100: C5-100 + C4^100,
100: E5-100 + C4^100,
100: G5-100 + G3^100,
100: B5-100 + G3^100,
240: C6-240 + C4^240
`;

const sfxGameOver = tune`
140: G4~140, 140: F#4~140, 140: F4~140, 300: E4~300
`;

// Driving Undertale-inspired Boss Rush BGM loop
const bgmBoss = tune`
130: D4-100 + D2^120,
130: D4-100 + D2^120,
130: D5-110 + D3^120,
130: A4-110 + D2^120,
130: G#4-100 + A2^120,
130: G4-100 + A2^120,
130: F4-100 + D2^120,
130: D4-80 + F4-80 + A2^120,
130: C4-100 + C2^120,
130: C4-100 + C2^120,
130: D5-110 + C3^120,
130: A4-110 + C2^120,
130: G#4-100 + G2^120,
130: G4-100 + G2^120,
130: F4-100 + C2^120,
130: G4-100 + A4-100 + G2^120
`;

let bgmHandle = null;

function startMusic() {
  if (bgmHandle) bgmHandle.end();
  bgmHandle = playTune(bgmBoss, Infinity);
}

function stopMusic() {
  if (bgmHandle) {
    bgmHandle.end();
    bgmHandle = null;
  }
}

// ==========================================
// 5 ESCALATING BOSSES
// ==========================================
const BOSSES = [
  {
    name: "BONE SENTINEL",
    head: "1", body: "2", hand: "3",
    baseHp: 55, atk: 3,
    intro: "RATTLE YOUR BONES!",
    enrage: "NO MERCY FOR SOULS!",
    aimStepMs: 130,
    dodgeTicks: 38
  },
  {
    name: "SPEAR CAPTAIN",
    head: "4", body: "5", hand: "6",
    baseHp: 85, atk: 4,
    intro: "CYAN = STAND STILL!",
    enrage: "FEEL MY TRUE LANCE!",
    aimStepMs: 115,
    dodgeTicks: 42
  },
  {
    name: "PYRO PHANTOM",
    head: "7", body: "8", hand: "9",
    baseHp: 115, atk: 5,
    intro: "ORANGE = KEEP MOVING",
    enrage: "ASHES TO ASHES!",
    aimStepMs: 100,
    dodgeTicks: 44
  },
  {
    name: "VOID MONARCH",
    head: "Q", body: "R", hand: "S",
    baseHp: 150, atk: 6,
    intro: "BLUE SOUL: W JUMPS!",
    enrage: "THE ABYSS CLOSES IN!",
    aimStepMs: 90,
    dodgeTicks: 46
  },
  {
    name: "HYPER OMEGA",
    head: "T", body: "U", hand: "V",
    baseHp: 200, atk: 7,
    intro: "FINAL PROTOCOL: END.",
    enrage: "OVERDRIVE: 999% PWR!",
    aimStepMs: 80,
    dodgeTicks: 50
  }
];

// ==========================================
// 15x12 ARENA (Exact 5:4 Sprig Aspect Ratio!)
// Battle Box Walls: x=2..12, y=4..10
// Dodge Interior:   x=3..11 (9 wide), y=5..9 (5 tall)
// Boss Portrait:    x=6..8, y=2..3 (Centered on x=7!)
// ==========================================
const BOX_MIN_X = 3;
const BOX_MAX_X = 11;
const BOX_MIN_Y = 5;
const BOX_MAX_Y = 9;

const ARENA_MAP = map`
...............
...............
...............
...............
..###########..
..#.........#..
..#.........#..
..#.........#..
..#.........#..
..#.........#..
..###########..
...............`;

// ==========================================
// GAME STATE
// ==========================================
let state = "TITLE"; // TITLE, MENU, AIM, SLASH, DODGE, VICTORY, GAMEOVER
let loopNum = 1;
let bossIndex = 0;
let bossMaxHp = 55;
let bossHp = 55;
let playerMaxHp = 20;
let playerHp = 20;
let potions = 3;
let tp = 0; // 0..100 Soul Charge for (I) SUPER SLASH
let focusBuff = false;
let menuChoice = 0; // 0=FIGHT, 1=FOCUS, 2=HEAL, 3=BURST
let statusMsg = "";

// Aim bar
let aimX = BOX_MIN_X;
let aimTickAccum = 0;

// Dodge state
let soulMode = "RED"; // "RED" or "BLUE" (gravity!)
let jumpVel = 0;
let invulnTicks = 0;
let lastMoveTick = -10;
let dodgeTicksLeft = 0;
let tickCounter = 0;
let patternIndex = 0;
let bossAnimFrame = 0;
let slashTicks = 0;

// Entities
let projectiles = []; // { x, y, dx, dy, sprite, bounce }
let warnings = [];    // { x, y, timer, beamTicks }
let beams = [];       // { x, y, ticks }

// ==========================================
// HELPERS
// ==========================================
function currentBoss() {
  return BOSSES[bossIndex];
}

function bossAtk() {
  return currentBoss().atk + (loopNum - 1);
}

function isEnraged() {
  return bossHp <= Math.floor(bossMaxHp / 2);
}

function isInsideBox(x, y) {
  return x >= BOX_MIN_X && x <= BOX_MAX_X && y >= BOX_MIN_Y && y <= BOX_MAX_Y;
}

function getPlayer() {
  return getFirst("p") || getFirst("u") || getFirst("i");
}

function setPlayerVisual() {
  const p = getPlayer();
  if (!p) return;
  const px = p.x;
  const py = p.y;
  const targetType = invulnTicks > 0 ? "i" : (soulMode === "BLUE" ? "u" : "p");
  if (p.type !== targetType) {
    p.remove();
    addSprite(px, py, targetType);
  }
}

function clearByTypes(types) {
  for (const t of types) {
    for (const s of getAll(t)) s.remove();
  }
}

function clearArena() {
  projectiles = [];
  warnings = [];
  beams = [];
  clearByTypes(["b", "o", "a", "f", "w", "l", "h", "c", "t", "m", "-", "x"]);
}

function clearBossSprites() {
  clearByTypes(["1", "2", "3", "4", "5", "6", "7", "8", "9", "Q", "R", "S", "T", "U", "V", "x"]);
}

function drawBoss(offsetY) {
  clearBossSprites();
  if (state === "TITLE" || state === "VICTORY") return;
  const b = currentBoss();
  const handY = offsetY ? 3 : 2;
  addSprite(7, 2, b.head);
  addSprite(7, 3, b.body);
  addSprite(6, handY, b.hand);
  addSprite(8, handY === 2 ? 3 : 2, b.hand);
}

function makeBar(val, max, width) {
  const filled = Math.max(0, Math.min(width, Math.round((val / max) * width)));
  let s = "";
  for (let i = 0; i < width; i++) s += i < filled ? "=" : "-";
  return s;
}

function addTp(amount) {
  tp = Math.min(100, tp + amount);
}

// ==========================================
// HUD RENDERING (Strict 20x16 Sprig Font Safe!)
// No square brackets [] allowed in Sprig font!
// ==========================================
function renderHUD() {
  clearText();

  if (state === "TITLE") {
    addText("SOUL GAUNTLET", { y: 1, color: color`6` });
    addText("UNDERTALE BOSS RUSH", { y: 2, color: color`3` });
    addText("5 BOSSES + OVERDRIVE", { y: 7, color: color`2` });
    addText("WASD: MOVE & JUMP", { y: 9, color: color`7` });
    addText("J:FIGHT K:FOC L:HEAL", { y: 10, color: color`4` });
    addText("PRESS J TO BEGIN!", { y: 12, color: color`6` });
    addText("CYAN:STOP  ORG:MOVE", { y: 15, color: color`9` });
    return;
  }

  if (state === "VICTORY") {
    addText("GAUNTLET CONQUERED!", { y: 1, color: color`6` });
    addText("LOOP " + loopNum + " CLEARED!", { y: 3, color: color`4` });
    addText("HP " + playerHp + "/" + playerMaxHp + "  POT " + potions, { y: 7, color: color`2` });
    addText("K: OVERDRIVE LOOP " + (loopNum + 1), { y: 9, color: color`3` });
    addText("J: NEW RUN (LOOP 1)", { y: 11, color: color`7` });
    addText("DETERMINATION!", { y: 15, color: color`6` });
    return;
  }

  if (state === "GAMEOVER") {
    addText("SOUL SHATTERED...", { y: 1, color: color`3` });
    addText("SLAIN BY:", { y: 7, color: color`1` });
    addText(currentBoss().name, { y: 8, color: color`2` });
    addText("LOOP " + loopNum + "  B" + (bossIndex + 1) + " HP:" + bossHp, { y: 10, color: color`9` });
    addText("PRESS J TO RETRY", { y: 12, color: color`6` });
    addText("STAY DETERMINED!", { y: 15, color: color`3` });
    return;
  }

  // Top Header: Boss Name, HP Bar, and Status
  const b = currentBoss();
  const enraged = isEnraged();
  const prefix = loopNum > 1 ? "L" + loopNum + " " : (bossIndex + 1) + "/5 ";
  addText(
    prefix + b.name + (enraged ? "!" : ""),
    { x: 0, y: 0, color: enraged ? color`3` : color`6` }
  );
  addText(
    "HP " + makeBar(bossHp, bossMaxHp, 10) + " " + bossHp,
    { x: 1, y: 1, color: color`3` }
  );
  if (statusMsg) {
    addText(statusMsg, { y: 2, color: color`7` });
  }

  // Bottom HUD: Player Stats
  const hpCol = playerHp <= Math.ceil(playerMaxHp * 0.3) ? color`3` : color`4`;
  addText(
    "HP " + playerHp + "/" + playerMaxHp + " P:" + potions + " TP:" + tp,
    { x: 0, y: 15, color: hpCol }
  );

  // Inside Battle Box Menu / Aim Prompts
  if (state === "MENU") {
    const c0 = menuChoice === 0 ? "> " : "  ";
    const c1 = menuChoice === 1 ? "> " : "  ";
    const c2 = menuChoice === 2 ? "> " : "  ";
    const c3 = menuChoice === 3 ? "> " : "  ";

    addText(c0 + "J:FIGHT" + (focusBuff ? " (+60%)" : ""), { x: 4, y: 7, color: menuChoice === 0 ? color`6` : color`9` });
    addText(c1 + "K:FOCUS (SLOW)", { x: 4, y: 8, color: menuChoice === 1 ? color`6` : color`7` });
    addText(c2 + "L:HEAL  (+12HP)", { x: 4, y: 9, color: menuChoice === 2 ? color`6` : color`4` });
    if (tp >= 100) {
      addText(c3 + "I:SOUL BURST!!", { x: 4, y: 11, color: color`6` });
    } else {
      addText("  BURST AT 100 TP", { x: 3, y: 11, color: color`L` });
    }
  } else if (state === "AIM") {
    addText("HIT J ON GREEN!", { y: 7, color: color`6` });
    addText("CENTER = CRIT HIT", { y: 11, color: color`4` });
  }
}

// ==========================================
// STATE TRANSITIONS
// ==========================================
function showTitle() {
  state = "TITLE";
  stopMusic();
  setMap(ARENA_MAP);
  clearArena();
  clearBossSprites();
  addSprite(7, 5, "p");
  renderHUD();
}

function startNewRun(loop) {
  loopNum = loop;
  bossIndex = 0;
  if (loop === 1) {
    playerMaxHp = 20;
    playerHp = 20;
    potions = 3;
    tp = 0;
  } else {
    playerMaxHp += 4;
    playerHp = playerMaxHp;
    potions += 2;
  }
  focusBuff = false;
  setMap(ARENA_MAP);
  loadBoss(0);
  startMusic();
}

function loadBoss(index) {
  bossIndex = index;
  const b = currentBoss();
  const scale = 1 + (loopNum - 1) * 0.35;
  bossMaxHp = Math.round(b.baseHp * scale);
  bossHp = bossMaxHp;
  patternIndex = 0;
  statusMsg = b.intro;
  enterMenu();
}

function enterMenu() {
  state = "MENU";
  soulMode = "RED";
  invulnTicks = 0;
  clearArena();
  clearByTypes(["p", "u", "i"]);
  drawBoss(0);
  if (menuChoice === 3 && tp < 100) menuChoice = 0;
  renderHUD();
}

function startAim() {
  state = "AIM";
  clearArena();
  clearByTypes(["p", "u", "i"]);
  // Render Undertale-style Attack Bar across x=3..11 at y=7
  for (let x = BOX_MIN_X; x <= BOX_MAX_X; x++) {
    const dist = Math.abs(x - 7);
    if (dist === 0) addSprite(x, 7, "t");
    else if (dist <= 2) addSprite(x, 7, "m");
    else addSprite(x, 7, "-");
  }
  aimX = BOX_MIN_X;
  aimTickAccum = 0;
  addSprite(aimX, 7, "c");
  statusMsg = "TIME YOUR STRIKE!";
  renderHUD();
}

function triggerBossDamage(dmg, label, isCrit) {
  bossHp = Math.max(0, bossHp - dmg);
  statusMsg = label + " -" + dmg + " HP!";
  if (isCrit) playTune(sfxCrit, 1);
  else playTune(sfxSlash, 1);

  // Slash animation on the boss
  state = "SLASH";
  slashTicks = 5;
  clearArena();
  addSprite(7, 2, "x");
  addSprite(7, 3, "x");
  renderHUD();
}

function resolveAimHit() {
  const dist = Math.abs(aimX - 7);
  let dmg = 8;
  let label = "WEAK";
  let crit = false;

  if (dist === 0) {
    dmg = 26;
    label = "CRIT!";
    crit = true;
    addTp(20);
  } else if (dist === 1) {
    dmg = 19;
    label = "GREAT!";
    addTp(12);
  } else if (dist <= 2) {
    dmg = 13;
    label = "HIT";
    addTp(8);
  } else {
    dmg = 8;
    label = "GRAZE";
    addTp(4);
  }

  if (focusBuff) {
    dmg = Math.round(dmg * 1.6);
    label = "FOC " + label;
  }

  triggerBossDamage(dmg, label, crit);
}

function executeSuperBurst() {
  if (tp < 100) return;
  tp = 0;
  focusBuff = false;
  const dmg = 46 + (loopNum - 1) * 10;
  playTune(sfxSuper, 1);
  bossHp = Math.max(0, bossHp - dmg);
  statusMsg = "SOUL BURST -" + dmg + "!";
  state = "SLASH";
  slashTicks = 7;
  clearArena();
  addSprite(6, 2, "x");
  addSprite(7, 2, "x");
  addSprite(8, 2, "x");
  addSprite(7, 3, "x");
  renderHUD();
}

function finishSlashPhase() {
  clearByTypes(["x"]);
  if (bossHp <= 0) {
    handleBossDefeated();
    return;
  }
  const b = currentBoss();
  if (isEnraged() && statusMsg.indexOf("ENRAGE") === -1) {
    statusMsg = b.enrage;
  }
  startDodgePhase();
}

function handleBossDefeated() {
  clearArena();
  clearBossSprites();
  playTune(sfxWin, 1);
  bossIndex++;

  if (bossIndex >= BOSSES.length) {
    state = "VICTORY";
    stopMusic();
    renderHUD();
    return;
  }

  // Reward between bosses
  playerMaxHp += 4;
  playerHp = Math.min(playerMaxHp, playerHp + 10);
  potions += 1;
  addTp(25);
  focusBuff = false;
  loadBoss(bossIndex);
  statusMsg = "SLAIN! +10HP +1POT";
  renderHUD();
}

function startDodgePhase() {
  state = "DODGE";
  clearArena();
  clearByTypes(["p", "u", "i"]);
  invulnTicks = 0;
  jumpVel = 0;
  tickCounter = 0;
  lastMoveTick = -10;

  // Cycle boss patterns (3 distinct patterns per boss)
  patternIndex = (patternIndex + 1) % 3;
  const b = currentBoss();
  dodgeTicksLeft = b.dodgeTicks + (isEnraged() ? 6 : 0);

  // Determine if this wave uses BLUE SOUL (Gravity platforming!)
  const useBlueSoul =
    (bossIndex === 3 && patternIndex === 1) ||
    (bossIndex === 4 && patternIndex === 2);

  if (useBlueSoul) {
    soulMode = "BLUE";
    addSprite(7, BOX_MAX_Y, "u");
    statusMsg = "BLUE SOUL: W JUMPS!";
  } else {
    soulMode = "RED";
    addSprite(7, 7, "p");
    if (bossIndex === 1 && patternIndex === 1) statusMsg = "CYAN: STAND STILL!";
    else if (bossIndex === 2 && patternIndex === 1) statusMsg = "ORANGE: KEEP MOVING";
    else if (bossIndex === 4 && patternIndex === 0) statusMsg = "CYAN=STOP ORG=MOVE";
  }

  renderHUD();
}

// ==========================================
// BULLET-HELL PATTERN ENGINE
// ==========================================
function spawnProj(x, y, dx, dy, sprite, bounce) {
  if (!isInsideBox(x, y)) return;
  projectiles.push({ x, y, dx, dy, sprite, bounce: !!bounce });
  addSprite(x, y, sprite);
}

function spawnWarningRow(y, delay) {
  for (let x = BOX_MIN_X; x <= BOX_MAX_X; x++) {
    warnings.push({ x, y, timer: delay, beamTicks: 2 });
    addSprite(x, y, "w");
  }
}

function spawnWarningCol(x, delay) {
  for (let y = BOX_MIN_Y; y <= BOX_MAX_Y; y++) {
    warnings.push({ x, y, timer: delay, beamTicks: 2 });
    addSprite(x, y, "w");
  }
}

function spawnBossWave() {
  const enraged = isEnraged();
  const p = getPlayer();
  const px = p ? p.x : 7;
  const py = p ? p.y : 7;

  // Mid-wave Green Mercy Heal Orb
  if (tickCounter === 18 && getAll("h").length === 0) {
    const hx = BOX_MIN_X + 1 + ((bossIndex * 3 + patternIndex * 2) % 7);
    const hy = soulMode === "BLUE" ? BOX_MAX_Y - 1 : BOX_MIN_Y + 1 + ((bossIndex + patternIndex) % 3);
    addSprite(hx, hy, "h");
  }

  // ----- BOSS 1: BONE SENTINEL -----
  if (bossIndex === 0) {
    const cad = enraged ? 4 : 5;
    if (tickCounter % cad !== 0) return;
    const step = Math.floor(tickCounter / cad);

    if (patternIndex === 0) {
      // Sweeping bone wall with 2-tile safe gap
      const gapY = BOX_MIN_Y + ((step * 2) % 4);
      const fromLeft = step % 2 === 0;
      const sx = fromLeft ? BOX_MIN_X : BOX_MAX_X;
      const dx = fromLeft ? 1 : -1;
      for (let y = BOX_MIN_Y; y <= BOX_MAX_Y; y++) {
        if (y !== gapY && y !== gapY + 1) spawnProj(sx, y, dx, 0, "b");
      }
    } else if (patternIndex === 1) {
      // Alternating bone rain + aimed bone
      spawnProj(px, BOX_MIN_Y, 0, 1, "b");
      const altX = BOX_MIN_X + ((step * 3) % 9);
      spawnProj(altX, BOX_MAX_Y, 0, -1, "b");
      if (enraged) spawnProj(BOX_MIN_X, py, 1, 0, "b");
    } else {
      // Bone teeth + vertical warning laser
      for (let x = BOX_MIN_X + (step % 2); x <= BOX_MAX_X; x += 2) {
        spawnProj(x, BOX_MIN_Y, 0, 1, "b");
      }
      if (step % 2 === 0) spawnWarningCol(px, 3);
    }
  }

  // ----- BOSS 2: SPEAR CAPTAIN (Introduces Cyan Spears + Cross Lasers) -----
  else if (bossIndex === 1) {
    const cad = enraged ? 4 : 5;
    if (tickCounter % cad !== 0) return;
    const step = Math.floor(tickCounter / cad);

    if (patternIndex === 0) {
      // Cross-laser lock-on player!
      spawnWarningRow(py, 3);
      spawnWarningCol(px, 3);
    } else if (patternIndex === 1) {
      // Full-height CYAN SPEAR WALL (Don't move when it passes!)
      const fromLeft = step % 2 === 0;
      const sx = fromLeft ? BOX_MIN_X : BOX_MAX_X;
      const dx = fromLeft ? 1 : -1;
      for (let y = BOX_MIN_Y; y <= BOX_MAX_Y; y++) {
        spawnProj(sx, y, dx, 0, "a");
      }
    } else {
      // 4-Way Spear Volley aimed at Soul
      spawnProj(BOX_MIN_X, py, 1, 0, "b");
      spawnProj(BOX_MAX_X, py, -1, 0, "b");
      spawnProj(px, BOX_MIN_Y, 0, 1, "b");
      if (enraged) spawnProj(px, BOX_MAX_Y, 0, -1, "b");
    }
  }

  // ----- BOSS 3: PYRO PHANTOM (Introduces Orange Flames!) -----
  else if (bossIndex === 2) {
    const cad = enraged ? 3 : 4;
    if (tickCounter % cad !== 0) return;
    const step = Math.floor(tickCounter / cad);

    if (patternIndex === 0) {
      // Diagonal bouncing fire/void orbs
      spawnProj(BOX_MIN_X, BOX_MIN_Y, 1, 1, "o", true);
      spawnProj(BOX_MAX_X, BOX_MAX_Y, -1, -1, "o", true);
      if (step % 2 === 0) spawnWarningRow(py, 3);
    } else if (patternIndex === 1) {
      // Full-height ORANGE FLAME WALL (Keep moving right through it!)
      const sx = step % 2 === 0 ? BOX_MIN_X : BOX_MAX_X;
      const dx = step % 2 === 0 ? 1 : -1;
      for (let y = BOX_MIN_Y; y <= BOX_MAX_Y; y++) {
        spawnProj(sx, y, dx, 0, "f");
      }
    } else {
      // Dual laser sweep + aimed flames
      const row = BOX_MIN_Y + (step % 5);
      spawnWarningRow(row, 3);
      spawnProj(px, BOX_MIN_Y, 0, 1, "o");
      if (enraged) spawnProj(BOX_MAX_X, py, -1, 0, "b");
    }
  }

  // ----- BOSS 4: VOID MONARCH (Introduces BLUE SOUL GRAVITY!) -----
  else if (bossIndex === 3) {
    const cad = enraged ? 3 : 4;
    if (tickCounter % cad !== 0) return;
    const step = Math.floor(tickCounter / cad);

    if (patternIndex === 0) {
      // Double Laser Cage + aimed void orb
      spawnWarningCol(Math.max(BOX_MIN_X, px - 1), 3);
      spawnWarningCol(Math.min(BOX_MAX_X, px + 1), 3);
      spawnProj(px, BOX_MIN_Y, 0, 1, "o");
    } else if (patternIndex === 1) {
      // BLUE SOUL JUMPING! Ground bone hurdles + occasional high ceiling beam
      const fromLeft = step % 2 === 0;
      const sx = fromLeft ? BOX_MIN_X : BOX_MAX_X;
      const dx = fromLeft ? 1 : -1;
      spawnProj(sx, BOX_MAX_Y, dx, 0, "b");
      if (enraged || step % 2 === 0) {
        spawnProj(sx, BOX_MAX_Y - 1, dx, 0, "b");
      }
      if (step % 3 === 1) {
        spawnWarningRow(BOX_MIN_Y, 3);
      }
    } else {
      // 4-Corner Bouncing Void Orbs + cross laser
      if (step % 2 === 0) {
        spawnProj(BOX_MIN_X, BOX_MIN_Y, 1, 1, "o", true);
        spawnProj(BOX_MAX_X, BOX_MIN_Y, -1, 1, "o", true);
      } else {
        spawnWarningRow(py, 3);
        spawnWarningCol(px, 3);
      }
    }
  }

  // ----- BOSS 5: HYPER OMEGA (Everything Combined!) -----
  else if (bossIndex === 4) {
    const cad = enraged ? 3 : 4;
    if (tickCounter % cad !== 0) return;
    const step = Math.floor(tickCounter / cad);

    if (patternIndex === 0) {
      // Alternating CYAN (STOP) and ORANGE (MOVE) walls!!
      const isCyan = step % 2 === 0;
      const sx = isCyan ? BOX_MIN_X : BOX_MAX_X;
      const dx = isCyan ? 1 : -1;
      const spr = isCyan ? "a" : "f";
      for (let y = BOX_MIN_Y; y <= BOX_MAX_Y; y++) {
        spawnProj(sx, y, dx, 0, spr);
      }
      if (enraged && step % 3 === 0) spawnWarningCol(px, 3);
    } else if (patternIndex === 1) {
      // Gaster Blaster Barrage + diagonal orbs
      spawnWarningRow(py, 3);
      spawnWarningCol(px, 3);
      spawnProj(BOX_MIN_X, BOX_MIN_Y, 1, 1, "o", false);
      spawnProj(BOX_MAX_X, BOX_MAX_Y, -1, -1, "o", false);
    } else {
      // BLUE SOUL FINAL GAUNTLET: Dual-direction bone hurdles + mid-air lasers!
      spawnProj(BOX_MIN_X, BOX_MAX_Y, 1, 0, "b");
      if (step % 2 === 0) spawnProj(BOX_MAX_X, BOX_MAX_Y, -1, 0, "b");
      if (enraged) spawnProj(BOX_MIN_X, BOX_MAX_Y - 1, 1, 0, "b");
      if (step % 2 === 1) spawnWarningRow(BOX_MIN_Y + 1, 3);
    }
  }
}

// ==========================================
// COLLISION, COLOR RULES & GRAZE TP
// ==========================================
function checkCollisions() {
  const p = getPlayer();
  if (!p) return;

  const tile = getTile(p.x, p.y);
  const isMoving = (tickCounter - lastMoveTick) <= 1;

  // 1. Check Green Heal Orb pickup
  for (const s of tile) {
    if (s.type === "h") {
      s.remove();
      playerHp = Math.min(playerMaxHp, playerHp + 4);
      addTp(10);
      playTune(sfxHeal, 1);
      statusMsg = "+4 HP MERCY ORB!";
      renderHUD();
    }
  }

  if (invulnTicks > 0) return;

  // 2. Check lethal hazards (respecting Cyan & Orange Undertale rules!)
  let hit = false;
  for (const s of tile) {
    if (s.type === "b" || s.type === "o" || s.type === "l") {
      hit = true;
      break;
    }
    if (s.type === "a") {
      // Cyan: hurts ONLY if moving!
      if (isMoving) {
        hit = true;
        break;
      } else {
        addTp(5);
      }
    }
    if (s.type === "f") {
      // Orange: hurts ONLY if standing still!
      if (!isMoving) {
        hit = true;
        break;
      } else {
        addTp(5);
      }
    }
  }

  if (hit) {
    const dmg = bossAtk();
    playerHp = Math.max(0, playerHp - dmg);
    invulnTicks = 6;
    playTune(sfxHurt, 1);
    statusMsg = "OUCH! -" + dmg + " HP!";
    setPlayerVisual();
    renderHUD();

    if (playerHp <= 0) {
      state = "GAMEOVER";
      stopMusic();
      clearArena();
      playTune(sfxGameOver, 1);
      renderHUD();
    }
    return;
  }

  // 3. Graze TP reward: +2 TP when adjacent to a bullet without getting hit
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (const [dx, dy] of dirs) {
    for (const s of getTile(p.x + dx, p.y + dy)) {
      if (s.type === "b" || s.type === "o" || s.type === "l") {
        addTp(2);
        return;
      }
    }
  }
}

// ==========================================
// MAIN REAL-TIME GAME LOOP (70ms heartbeat)
// ==========================================
setInterval(() => {
  // --- SLASH IMPACT ANIMATION ---
  if (state === "SLASH") {
    slashTicks--;
    if (slashTicks <= 0) {
      finishSlashPhase();
    }
    return;
  }

  // --- ATTACK METER SWEEP ---
  if (state === "AIM") {
    aimTickAccum += 70;
    if (aimTickAccum >= currentBoss().aimStepMs) {
      aimTickAccum = 0;
      clearByTypes(["c"]);
      aimX++;
      if (aimX > BOX_MAX_X) {
        // Missed completely off the right side!
        statusMsg = "MISSED THE STRIKE!";
        focusBuff = false;
        startDodgePhase();
        return;
      }
      addSprite(aimX, 7, "c");
    }
    return;
  }

  // --- MENU IDLE BOSS ANIMATION ---
  if (state === "MENU") {
    bossAnimFrame++;
    if (bossAnimFrame % 6 === 0) {
      drawBoss((bossAnimFrame / 6) % 2);
    }
    return;
  }

  if (state !== "DODGE") return;

  // Dodge loop runs every 2 heartbeats (~140ms), or slower if Focused!
  bossAnimFrame++;
  const stepDiv = focusBuff ? 3 : 2;
  if (bossAnimFrame % stepDiv !== 0) return;

  tickCounter++;

  // Animate boss hands during attack
  if (tickCounter % 3 === 0) {
    drawBoss((tickCounter / 3) % 2);
  }

  // 1. Update Blue Soul Gravity & Jump Arc
  if (soulMode === "BLUE") {
    const p = getPlayer();
    if (p) {
      if (jumpVel > 0) {
        if (p.y > BOX_MIN_Y) p.y -= 1;
        jumpVel--;
      } else if (p.y < BOX_MAX_Y) {
        p.y += 1;
      }
    }
  }

  // 2. Invulnerability countdown
  if (invulnTicks > 0) {
    invulnTicks--;
    setPlayerVisual();
  }

  // 3. Active laser beams decay
  clearByTypes(["l"]);
  const nextBeams = [];
  for (const bm of beams) {
    bm.ticks--;
    if (bm.ticks > 0) {
      nextBeams.push(bm);
      addSprite(bm.x, bm.y, "l");
    }
  }
  beams = nextBeams;

  // 4. Warning telegraphs -> fire beams
  clearByTypes(["w"]);
  const nextWarn = [];
  let fired = false;
  for (const w of warnings) {
    w.timer--;
    if (w.timer <= 0) {
      beams.push({ x: w.x, y: w.y, ticks: w.beamTicks });
      addSprite(w.x, w.y, "l");
      fired = true;
    } else {
      nextWarn.push(w);
      addSprite(w.x, w.y, "w");
    }
  }
  warnings = nextWarn;
  if (fired) playTune(sfxLaser, 1);

  // 5. Move all active projectiles
  clearByTypes(["b", "o", "a", "f"]);
  const nextProj = [];
  for (const pr of projectiles) {
    let nx = pr.x + pr.dx;
    let ny = pr.y + pr.dy;

    if (pr.bounce) {
      if (nx < BOX_MIN_X || nx > BOX_MAX_X) {
        pr.dx = -pr.dx;
        nx = pr.x + pr.dx;
      }
      if (ny < BOX_MIN_Y || ny > BOX_MAX_Y) {
        pr.dy = -pr.dy;
        ny = pr.y + pr.dy;
      }
    }

    if (isInsideBox(nx, ny)) {
      pr.x = nx;
      pr.y = ny;
      nextProj.push(pr);
      addSprite(pr.x, pr.y, pr.sprite);
    }
  }
  projectiles = nextProj;

  // 6. Spawn boss pattern hazards (stop spawning near wave end so box clears)
  if (dodgeTicksLeft > 8) {
    spawnBossWave();
  }

  // 7. Check collisions & refresh bottom TP/HP HUD
  checkCollisions();
  if (state !== "DODGE") return;
  renderHUD();

  // 8. End of dodge turn
  dodgeTicksLeft--;
  if (dodgeTicksLeft <= 0) {
    focusBuff = false;
    addTp(10);
    statusMsg = "YOUR TURN! ACT NOW";
    enterMenu();
  }
}, 70);

// ==========================================
// PLAYER INPUT HANDLERS
// ==========================================
function moveSoul(dx, dy) {
  if (state === "MENU") {
    if (dy !== 0) {
      const maxOpt = tp >= 100 ? 3 : 2;
      menuChoice = (menuChoice + dy + (maxOpt + 1)) % (maxOpt + 1);
      playTune(sfxBlip, 1);
      renderHUD();
    }
    return;
  }

  if (state !== "DODGE") return;
  const p = getPlayer();
  if (!p) return;

  if (soulMode === "BLUE") {
    // Blue Soul: A/D move horizontally, W jumps, S fast-drops!
    if (dy === -1) {
      if (p.y === BOX_MAX_Y && jumpVel === 0) {
        jumpVel = 3;
        p.y -= 1;
        lastMoveTick = tickCounter;
        playTune(sfxJump, 1);
        checkCollisions();
      }
      return;
    }
    if (dy === 1) {
      jumpVel = 0;
      if (p.y < BOX_MAX_Y) {
        p.y += 1;
        lastMoveTick = tickCounter;
        checkCollisions();
      }
      return;
    }
  }

  const nx = p.x + dx;
  const ny = p.y + dy;
  if (!isInsideBox(nx, ny)) return;

  p.x = nx;
  p.y = ny;
  lastMoveTick = tickCounter;
  checkCollisions();
}

function doFocus() {
  if (state !== "MENU") return;
  focusBuff = true;
  addTp(15);
  playTune(sfxHeal, 1);
  statusMsg = "FOCUSED! +ATK/SLOW";
  startDodgePhase();
}

function doHeal() {
  if (state !== "MENU") return;
  if (potions <= 0) {
    statusMsg = "OUT OF POTIONS!";
    playTune(sfxBlip, 1);
    renderHUD();
    return;
  }
  if (playerHp >= playerMaxHp) {
    statusMsg = "HP ALREADY FULL!";
    playTune(sfxBlip, 1);
    renderHUD();
    return;
  }
  potions--;
  playerHp = Math.min(playerMaxHp, playerHp + 12);
  playTune(sfxHeal, 1);
  statusMsg = "HEALED +12 HP!";
  startDodgePhase();
}

onInput("w", () => moveSoul(0, -1));
onInput("s", () => moveSoul(0, 1));
onInput("a", () => moveSoul(-1, 0));
onInput("d", () => moveSoul(1, 0));

// J: Confirm / Fight / Strike / Restart
onInput("j", () => {
  if (state === "TITLE" || state === "GAMEOVER" || state === "VICTORY") {
    startNewRun(1);
    return;
  }
  if (state === "MENU") {
    if (menuChoice === 0) startAim();
    else if (menuChoice === 1) doFocus();
    else if (menuChoice === 2) doHeal();
    else if (menuChoice === 3) executeSuperBurst();
    return;
  }
  if (state === "AIM") {
    resolveAimHit();
  }
});

// K: Focus hotkey (or Overdrive Loop on Victory!)
onInput("k", () => {
  if (state === "VICTORY") {
    startNewRun(loopNum + 1);
    return;
  }
  if (state === "MENU") {
    doFocus();
  }
});

// L: Heal hotkey
onInput("l", () => {
  if (state === "MENU") {
    doHeal();
  }
});

// I: Soul Burst Super Attack hotkey (at 100 TP)
onInput("i", () => {
  if (state === "MENU" && tp >= 100) {
    executeSuperBurst();
  }
});

// Boot to Title Screen!
showTitle();

setPushables({
  [ player ]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

afterInput(() => {
  
})