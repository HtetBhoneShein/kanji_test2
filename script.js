// ============================================================
//  KANJI DATA
//  Each entry includes: kanji, romaji, meaning, and strokes[]
//  strokes[] = array of path strings (SVG-style) drawn step by step
// ============================================================
const kanjiData = [
  {
    kanji: "虫",
    romaji: "mushi",
    meaning: "Insect / Bug",
    strokes: [
      // stroke 1: vertical left side
      [{ type:"line", x1:30, y1:15, x2:30, y2:85 }],
      // stroke 2: top horizontal
      [{ type:"line", x1:15, y1:25, x2:65, y2:25 }],
      // stroke 3: middle horizontal
      [{ type:"line", x1:15, y1:50, x2:65, y2:50 }],
      // stroke 4: right side
      [{ type:"line", x1:65, y1:15, x2:65, y2:85 }],
      // stroke 5: bottom horizontal
      [{ type:"line", x1:15, y1:85, x2:65, y2:85 }],
      // stroke 6: center dot
      [{ type:"dot", x:45, y:38 }]
    ]
  },
  {
    kanji: "糸",
    romaji: "ito",
    meaning: "Thread / String",
    strokes: [
      [{ type:"line", x1:40, y1:10, x2:40, y2:45 }],
      [{ type:"curve", x1:20, y1:20, cx:40, cy:35, x2:60, y2:20 }],
      [{ type:"line", x1:20, y1:55, x2:60, y2:55 }],
      [{ type:"line", x1:20, y1:65, x2:60, y2:65 }],
      [{ type:"line", x1:20, y1:75, x2:60, y2:75 }],
      [{ type:"line", x1:30, y1:75, x2:30, y2:90 }],
      [{ type:"line", x1:50, y1:75, x2:50, y2:90 }]
    ]
  },
  {
    kanji: "分",
    romaji: "wakarimasu",
    meaning: "Understand / Divide",
    strokes: [
      [{ type:"line", x1:40, y1:10, x2:20, y2:40 }],
      [{ type:"line", x1:40, y1:10, x2:60, y2:40 }],
      [{ type:"line", x1:40, y1:40, x2:40, y2:90 }],
      [{ type:"line", x1:20, y1:60, x2:60, y2:60 }]
    ]
  },
  {
    kanji: "寺",
    romaji: "otera",
    meaning: "Temple",
    strokes: [
      [{ type:"line", x1:20, y1:20, x2:60, y2:20 }],
      [{ type:"line", x1:40, y1:10, x2:40, y2:50 }],
      [{ type:"line", x1:15, y1:40, x2:65, y2:40 }],
      [{ type:"line", x1:25, y1:55, x2:55, y2:55 }],
      [{ type:"line", x1:25, y1:55, x2:25, y2:90 }],
      [{ type:"line", x1:55, y1:55, x2:55, y2:90 }],
      [{ type:"line", x1:25, y1:72, x2:55, y2:72 }]
    ]
  },
  {
    kanji: "刀",
    romaji: "katana",
    meaning: "Japanese Sword",
    strokes: [
      [{ type:"curve", x1:55, y1:10, cx:45, cy:50, x2:20, y2:90 }],
      [{ type:"line", x1:55, y1:10, x2:55, y2:55 }],
      [{ type:"line", x1:55, y1:55, x2:65, y2:55 }]
    ]
  },
  {
    kanji: "娘",
    romaji: "musume",
    meaning: "Daughter / Young lady",
    strokes: [
      [{ type:"line", x1:15, y1:20, x2:15, y2:90 }],
      [{ type:"line", x1:10, y1:50, x2:28, y2:50 }],
      [{ type:"line", x1:35, y1:10, x2:35, y2:45 }],
      [{ type:"line", x1:35, y1:30, x2:70, y2:30 }],
      [{ type:"line", x1:55, y1:10, x2:55, y2:45 }],
      [{ type:"line", x1:35, y1:55, x2:70, y2:55 }],
      [{ type:"line", x1:35, y1:70, x2:70, y2:70 }],
      [{ type:"line", x1:50, y1:55, x2:50, y2:90 }]
    ]
  },
  {
    kanji: "羊",
    romaji: "hitsuji",
    meaning: "Sheep",
    strokes: [
      [{ type:"line", x1:20, y1:20, x2:60, y2:20 }],
      [{ type:"line", x1:15, y1:35, x2:65, y2:35 }],
      [{ type:"line", x1:40, y1:10, x2:40, y2:90 }],
      [{ type:"line", x1:15, y1:55, x2:65, y2:55 }],
      [{ type:"line", x1:20, y1:90, x2:40, y2:70 }],
      [{ type:"line", x1:60, y1:90, x2:40, y2:70 }]
    ]
  },
  {
    kanji: "竹",
    romaji: "take",
    meaning: "Bamboo",
    strokes: [
      [{ type:"line", x1:25, y1:10, x2:25, y2:50 }],
      [{ type:"line", x1:15, y1:30, x2:35, y2:30 }],
      [{ type:"line", x1:35, y1:30, x2:35, y2:50 }],
      [{ type:"line", x1:55, y1:10, x2:55, y2:50 }],
      [{ type:"line", x1:45, y1:30, x2:65, y2:30 }],
      [{ type:"line", x1:65, y1:30, x2:65, y2:50 }],
      [{ type:"line", x1:20, y1:55, x2:60, y2:55 }], 

      [{ type:"line", x1:40, y1:55, x2:40, y2:90 }]
    ]
  },
  {
    kanji: "草",
    romaji: "kusa",
    meaning: "Grass",
    strokes: [
      [{ type:"line", x1:25, y1:10, x2:25, y2:35 }],
      [{ type:"line", x1:55, y1:10, x2:55, y2:35 }],
      [{ type:"line", x1:15, y1:20, x2:35, y2:20 }],
      [{ type:"line", x1:45, y1:20, x2:65, y2:20 }],
      [{ type:"line", x1:15, y1:40, x2:65, y2:40 }],
      [{ type:"line", x1:40, y1:40, x2:40, y2:90 }],
      [{ type:"line", x1:15, y1:65, x2:65, y2:65 }],
      [{ type:"line", x1:15, y1:90, x2:65, y2:90 }]
    ]
  },
  {
    kanji: "手",
    romaji: "te",
    meaning: "Hand (Kanji radical)",
    strokes: [
      [{ type:"line", x1:15, y1:25, x2:65, y2:25 }],
      [{ type:"line", x1:15, y1:45, x2:65, y2:45 }],
      [{ type:"line", x1:15, y1:65, x2:65, y2:65 }],
      [{ type:"line", x1:40, y1:10, x2:40, y2:90 }],
      [{ type:"curve", x1:40, y1:65, cx:55, cy:80, x2:65, y2:90 }]
    ]
  },
  {
    kanji: "昔",
    romaji: "mukashi",
    meaning: "Long ago / Ancient times",
    strokes: [
      [{ type:"line", x1:20, y1:15, x2:60, y2:15 }],
      [{ type:"line", x1:20, y1:30, x2:60, y2:30 }],
      [{ type:"line", x1:20, y1:15, x2:20, y2:30 }],
      [{ type:"line", x1:60, y1:15, x2:60, y2:30 }],
      [{ type:"line", x1:15, y1:38, x2:65, y2:38 }],
      [{ type:"line", x1:25, y1:50, x2:55, y2:50 }],
      [{ type:"line", x1:25, y1:50, x2:25, y2:90 }],
      [{ type:"line", x1:55, y1:50, x2:55, y2:90 }],
      [{ type:"line", x1:25, y1:70, x2:55, y2:70 }]
    ]
  },
  {
    kanji: "王",
    romaji: "ou",
    meaning: "King",
    strokes: [
      [{ type:"line", x1:15, y1:20, x2:65, y2:20 }],
      [{ type:"line", x1:15, y1:50, x2:65, y2:50 }],
      [{ type:"line", x1:40, y1:10, x2:40, y2:90 }],
      [{ type:"line", x1:15, y1:90, x2:65, y2:90 }]
    ]
  },
  {
    kanji: "泣",
    romaji: "nakimasu",
    meaning: "To cry / Weep",
    strokes: [
      [{ type:"line", x1:18, y1:25, x2:10, y2:55 }],
      [{ type:"line", x1:22, y1:35, x2:14, y2:65 }],
      [{ type:"line", x1:38, y1:10, x2:38, y2:45 }],
      [{ type:"line", x1:30, y1:28, x2:65, y2:28 }],
      [{ type:"line", x1:55, y1:10, x2:55, y2:45 }],
      [{ type:"line", x1:30, y1:55, x2:68, y2:55 }],
      [{ type:"line", x1:35, y1:68, x2:65, y2:68 }],
      [{ type:"line", x1:49, y1:55, x2:49, y2:90 }]
    ]
  },
  {
    kanji: "困",
    romaji: "komarimasu",
    meaning: "To be troubled /困る",
    strokes: [
      [{ type:"line", x1:15, y1:15, x2:65, y2:15 }],
      [{ type:"line", x1:15, y1:15, x2:15, y2:90 }],
      [{ type:"line", x1:65, y1:15, x2:65, y2:90 }],
      [{ type:"line", x1:15, y1:90, x2:65, y2:90 }],
      [{ type:"line", x1:25, y1:35, x2:55, y2:35 }],
      [{ type:"line", x1:40, y1:30, x2:40, y2:80 }],
      [{ type:"line", x1:25, y1:57, x2:55, y2:57 }]
    ]
  },
  {
    kanji: "恥",
    romaji: "hazukashii",
    meaning: "Shy / Embarrassed",
    strokes: [
      [{ type:"line", x1:15, y1:25, x2:40, y2:25 }],
      [{ type:"line", x1:15, y1:45, x2:40, y2:45 }],
      [{ type:"line", x1:25, y1:15, x2:25, y2:85 }],
      [{ type:"line", x1:15, y1:65, x2:40, y2:65 }],
      [{ type:"line", x1:50, y1:10, x2:50, y2:45 }],
      [{ type:"line", x1:45, y1:55, x2:70, y2:55 }],
      [{ type:"line", x1:45, y1:70, x2:70, y2:70 }],
      [{ type:"line", x1:57, y1:55, x2:57, y2:90 }]
    ]
  },
  {
    kanji: "予",
    romaji: "yo",
    meaning: "Pre- / Beforehand / I (archaic)",
    strokes: [
      [{ type:"line", x1:40, y1:10, x2:40, y2:90 }],
      [{ type:"line", x1:15, y1:35, x2:65, y2:35 }],
      [{ type:"curve", x1:15, y1:35, cx:15, cy:70, x2:30, y2:90 }]
    ]
  },
  {
    kanji: "桜",
    romaji: "sakura",
    meaning: "Cherry Blossom",
    strokes: [
      [{ type:"line", x1:15, y1:40, x2:15, y2:90 }],
      [{ type:"line", x1:10, y1:60, x2:28, y2:60 }],
      [{ type:"line", x1:35, y1:15, x2:35, y2:50 }],
      [{ type:"line", x1:35, y1:30, x2:70, y2:30 }],
      [{ type:"line", x1:55, y1:15, x2:55, y2:50 }],
      // petals
      [{ type:"curve", x1:40, y1:60, cx:30, cy:45, x2:50, y2:45 }],
      [{ type:"curve", x1:50, y1:45, cx:65, cy:45, x2:65, y2:60 }],
      [{ type:"curve", x1:65, y1:60, cx:65, cy:78, x2:50, y2:80 }],
      [{ type:"curve", x1:40, y1:80, cx:28, cy:78, x2:28, y2:60 }],
      [{ type:"dot", x:52, y:62 }]
    ]
  }
];

// ============================================================
//  BUILD TABLE
// ============================================================
function buildTable(data) {
  const tbody = document.getElementById("kanjiBody");
  tbody.innerHTML = "";
  data.forEach((item, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="td-num">${i + 1}</td>
      <td class="td-kanji" title="Click to see strokes" onclick="openModal(${i})">${item.kanji}</td>
      <td class="td-reading">${item.romaji}</td>
      <td class="td-meaning">${item.meaning}</td>
      <td><button class="btn-stroke" onclick="openModal(${i})">✍ Strokes</button></td> 
      `
    ;
    tbody.appendChild(tr);
  });
}

// ============================================================
//  SEARCH
// ============================================================
function filterKanji() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const filtered = kanjiData.filter(k =>
    k.kanji.includes(q) ||
    k.romaji.toLowerCase().includes(q) ||
    k.meaning.toLowerCase().includes(q)
  );
  buildTable(filtered);
}

// ============================================================
//  MODAL
// ============================================================
function openModal(index) {
  const item = kanjiData[index];
  document.getElementById("modal-kanji").textContent = item.kanji;
  document.getElementById("modal-title").textContent = item.romaji;
  document.getElementById("modal-meaning").textContent = item.meaning;

  const container = document.getElementById("stroke-steps");
  container.innerHTML = "";

  const SIZE = 80;

  item.strokes.forEach((strokeGroup, stepIdx) => {
    const wrap = document.createElement("div");
    wrap.className = "stroke-step";

    const label = document.createElement("div");
    label.className = "step-num";
    label.textContent = `Step ${stepIdx + 1} `;

    const canvas = document.createElement("canvas");
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d");

    // Draw all strokes up to and including this step
    for (let s = 0; s <= stepIdx; s++) {
      const isNew = s === stepIdx;
      ctx.strokeStyle = isNew ? "#c0392b" : "#2c1a06";
      ctx.fillStyle   = isNew ? "#c0392b" : "#2c1a06";
      ctx.lineWidth   = isNew ? 3 : 2.5;
      ctx.lineCap     = "round";
      ctx.lineJoin    = "round";

      item.strokes[s].forEach(seg => drawSegment(ctx, seg, SIZE));
    }

    wrap.appendChild(label);
    wrap.appendChild(canvas);
    container.appendChild(wrap);
  });

  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function drawSegment(ctx, seg, size) {
  const scale = size / 100;
  ctx.beginPath();
  if (seg.type === "line") {
    ctx.moveTo(seg.x1 * scale, seg.y1 * scale);
    ctx.lineTo(seg.x2 * scale, seg.y2 * scale);
    ctx.stroke();
  } else if (seg.type === "curve") {
    ctx.moveTo(seg.x1 * scale, seg.y1 * scale);
    ctx.quadraticCurveTo(seg.cx * scale, seg.cy * scale, seg.x2 * scale, seg.y2 * scale);
    ctx.stroke();
  } else if (seg.type === "dot") {
    ctx.arc(seg.x * scale, seg.y * scale, 3 * scale, 0, Math.PI * 2);
    ctx.fill();
  }
}

function closeModal(event) {
  if (event.target === document.getElementById("modal")) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModalDirect();
});

// ============================================================
//  FLOATING PARTICLES
// ============================================================
function createParticles() {
  const container = document.getElementById("particles");
  const chars = kanjiData.map(k => k.kanji);
  for (let i = 0; i < 18; i++) {
    const span = document.createElement("div");
    span.className = "particle";
    span.textContent = chars[Math.floor(Math.random() * chars.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = (1.5 + Math.random() * 3) + "rem";
    span.style.animationDuration = (14 + Math.random() * 20) + "s";
    span.style.animationDelay = (Math.random() * 15) + "s";
    container.appendChild(span);
  }
}

// ============================================================
//  INIT
// ============================================================
buildTable(kanjiData);
createParticles();
    