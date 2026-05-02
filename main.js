/* ============================================================
   BIRTHDAY WEBSITE — main.js
   ✏️ CUSTOMIZE: Edit the content sections below
   ============================================================ */

/* ============================================================
   ✏️ LETTER TEXT
   Write your heartfelt message here. Use \n\n for new paragraphs.
   ============================================================ */
const LETTER_TEXT = [

"Hi love HAHAHA gulat ka noh may pa ganto ako hahahaha, syempre para maiba naman, para san pat may IT kang bf hehehe So first of all I want to greet you happiest birthday po baby enjoy your day po and sana ma appreciate mo tong simple efforts ko for you hehehe.",

  "Hi baby i'm writing this letter to make you fell and remember that all time I always love you. I love the way you laugh - that real, unguarded laugh that escapes before you even have a chance to think about it. I love how you care so deeply for the people you love, how you notice the small things, and how you make even the most ordinary moments feel like they matter.",

  "I think about all the memories we've already made together mga pananaray, pangangagat, pagsuntok sakin also the inside jokes that make no sense to anyone else, the late nights talking about everything and nothing (mga pambabackstab natin), the moments when I looked at you and thought: this is it. This is the person I want beside me (ket ansungit).",

  "Today, on your birthday, I want you to know that you are not just celebrated - you are cherished. Deeply. Every single day. Not because it's your birthday, but because you exist, and you chose to share your world with me love.",

  "Thank you for your patience, your warmth, your kindness, and the way you love me in the exact way I need (weh di naman ata kasali yong mga pananaray mo sakin). I promise to spend every day trying to be worthy of that.",

  "Here's to you, my love - to this birthday and every birthday to come. May this year bring you everything your heart desires, and may you always know just how profoundly, completely, endlessly loved you are. I love you so much denden ko ❤️"
];

/* ============================================================
   ✏️ REASONS WHY I LOVE YOU
   Edit the title, icon, and description for each reason.
   Add or remove objects in this array.
   ============================================================ */
const REASONS = [
  {
    icon: "✨",
    title: "The way you make me feel",
    desc: "With you, I feel safe, seen, and completely myself - no walls, no pretending. That is the rarest gift. Syempre di makakaligtas mga pananaray mo sakin."
  },
  {
    icon: "🌙",
    title: "Our late-night conversations",
    desc: "You talk to me about the universe, your dreams, your fears and every word feels like a secret shared just for us pero minsan kapag tinotoyo ka di mo ako kinakausap hmmm."
  },
  {
    icon: "🌷",
    title: "Your gentleness",
    desc: "You are soft with the world in a way that takes real courage. You remind me that kindness is a superpower(minsan) HAHAHA syempre ambait mo sa iba pero hindi sakin."
  },
  {
    icon: "😂",
    title: "The way you laugh",
    desc: "That laugh - honest, full, completely yours - is one of my favorite sounds in the entire world second yong isa ko pang fav sound mwehehehehe."
  },
  {
    icon: "🌟",
    title: "How hard you love",
    desc: "When you love something, you love it fully and fiercely. Being on the receiving end of that love is the greatest privilege of my life, simula pa lang binigyan mo na kaagad ako ng chance para patunayan sayo how deserving i am para sa love mo. This is the only the beggining love, nag sisimula pa lang tayo sa better future natin."
  },
  {
    icon: "🎀",
    title: "All your little quirks",
    desc: "Every tiny, wonderfully specific thing about you - I love all of it. Especially the parts you think are too much like iniisip mo na sumosobra na pagmamaldita mo(yes)."
  }
];

/* ============================================================
   ✏️ PHOTO GALLERY
   Replace the `src` values with your actual image paths.
   Example: src: 'images/photo1.jpg'
   Edit captions to match your memories.
   ============================================================ */
const PHOTOS = [
  {
    src: "images/received_444473471222236.jpeg",
    caption: "Where it all began 🌸"
  },
  {
    src: "images/ecedf8eb-9290-4ba3-8eb7-d0571aade636.jpg",
    caption: "You & your beautiful smile"
  },
  {
    src: "images/f79d9bef-005c-4525-8f6f-e57c0b0bb44a.jpg",
    caption: "My favourite day with you"
  },
  {
    src: "images/adventure.jpg",
    caption: "Adventures with you ✈️"
  },
  {
    src: "images/golden.jpg",
    caption: "Golden moments 🌅"
  },
  {
    src: "images/pic.jpg",
    caption: "Always laughing with you 💕"
  }
];

/* ============================================================
   ✏️ BIRTHDAY DETAILS
   Set the birthday text and footer year.
   ============================================================ */
const BIRTHDAY_LABEL = "🎂 Today is Your Special Day!";
const FOOTER_MESSAGE_YEAR = new Date().getFullYear();


/* ============================================================
   INTERNAL CODE — You don't need to edit below this line
   ============================================================ */

// --- Floating Hearts Canvas ---
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');

let hearts = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

function randomBetween(a, b) { return Math.random() * (b - a) + a; }

function createHeart() {
  return {
    x:       randomBetween(0, canvas.width),
    y:       canvas.height + 30,
    size:    randomBetween(10, 28),
    speedY:  randomBetween(0.5, 1.6),
    speedX:  randomBetween(-0.4, 0.4),
    opacity: randomBetween(0.15, 0.55),
    wobble:  randomBetween(0, Math.PI * 2),
    wobbleSpeed: randomBetween(0.02, 0.05),
    color:   ['#f4a7b9','#d8b4fe','#fb7185','#fca5a5','#f9a8d4'][Math.floor(Math.random()*5)]
  };
}

function drawHeart(h) {
  ctx.save();
  ctx.globalAlpha = h.opacity;
  ctx.fillStyle = h.color;
  ctx.beginPath();
  const s = h.size / 14;
  const x = h.x, y = h.y;
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - 3.5*s, x - 5*s, y - 3.5*s, x - 5*s, y - 7*s);
  ctx.bezierCurveTo(x - 5*s, y - 10.5*s, x, y - 10.5*s, x, y - 7*s);
  ctx.bezierCurveTo(x, y - 10.5*s, x + 5*s, y - 10.5*s, x + 5*s, y - 7*s);
  ctx.bezierCurveTo(x + 5*s, y - 3.5*s, x, y - 3.5*s, x, y);
  ctx.fill();
  ctx.restore();
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.04) hearts.push(createHeart());

  hearts = hearts.filter(h => h.y > -40);

  hearts.forEach(h => {
    h.y -= h.speedY;
    h.wobble += h.wobbleSpeed;
    h.x += Math.sin(h.wobble) * 0.5 + h.speedX;
    drawHeart(h);
  });

  requestAnimationFrame(animateHearts);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
animateHearts();


// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});


// --- Birthday highlight ---
document.getElementById('birthdayHighlight').textContent = BIRTHDAY_LABEL;


// --- Footer year ---
document.getElementById('footerYear').textContent = `© ${FOOTER_MESSAGE_YEAR} Made with ❤️`;


// --- Typing effect for letter ---
function typeLetter() {
  const container = document.getElementById('letterBody');
  container.innerHTML = '';
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';

  let paragraphIndex = 0;
  let charIndex = 0;
  let currentPara = null;

  function nextChar() {
    if (paragraphIndex >= LETTER_TEXT.length) {
      cursor.remove();
      return;
    }

    if (charIndex === 0) {
      currentPara = document.createElement('p');
      container.appendChild(currentPara);
    }

    const text = LETTER_TEXT[paragraphIndex];
    currentPara.textContent = text.slice(0, charIndex + 1);
    currentPara.appendChild(cursor);
    charIndex++;

    if (charIndex >= text.length) {
      paragraphIndex++;
      charIndex = 0;
      setTimeout(nextChar, 400); // pause between paragraphs
    } else {
      const speed = text[charIndex - 1] === '.' || text[charIndex - 1] === ',' ? 60 : 22;
      setTimeout(nextChar, speed);
    }
  }

  nextChar();
}


// --- Reasons cards ---
function renderReasons() {
  const grid = document.getElementById('reasonsGrid');
  REASONS.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card reveal';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
  <div class="card-inner">
    
    <!-- FRONT -->
    <div class="card-front">
      <p class="note-preview">
        ${r.title}
      </p>
      <span class="note-hint">Tap to open 💌</span>
    </div>

    <!-- BACK -->
    <div class="card-back">
      <p class="note-full">
        ${r.desc}
      </p>
    </div>

  </div>
`;
    grid.appendChild(card);
  });
}


// --- Gallery ---
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  PHOTOS.forEach((photo, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.style.transitionDelay = `${i * 0.08}s`;
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption}" loading="lazy" />
      <div class="gallery-caption">${photo.caption}</div>
    `;
    item.addEventListener('click', () => openLightbox(photo.src, photo.caption));
    grid.appendChild(item);
  });
}


// --- Lightbox ---
function openLightbox(src, caption) {
  let box = document.getElementById('lightbox');
  if (!box) {
    box = document.createElement('div');
    box.id = 'lightbox';
    box.className = 'lightbox';
    box.innerHTML = `
      <button class="lightbox-close" onclick="closeLightbox()">✕</button>
      <img src="" alt="" />
    `;
    box.addEventListener('click', e => { if (e.target === box) closeLightbox(); });
    document.body.appendChild(box);
  }
  box.querySelector('img').src = src;
  box.querySelector('img').alt = caption;
  box.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const box = document.getElementById('lightbox');
  if (box) { box.classList.remove('open'); document.body.style.overflow = ''; }
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });


// --- Surprise reveal ---
function revealSurprise() {
  const reveal = document.getElementById('surpriseReveal');
  const btn    = document.getElementById('surpriseBtn');
  if (reveal.classList.contains('open')) return;
  reveal.classList.add('open');
  btn.style.display = 'none';
  // Burst hearts
  for (let i = 0; i < 25; i++) {
  setTimeout(() => {
    const h = createHeart();
    h.y = window.innerHeight * 0.7;
    h.x = window.innerWidth / 2;
    h.speedX = randomBetween(-2, 2);
    h.speedY = randomBetween(1, 3);
    h.size = randomBetween(14, 30);
    hearts.push(h);
  }, i * 30);
}
}


// --- Music toggle ---
let musicPlaying = false;
const audio    = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');

function toggleMusic() {
  if (!musicPlaying) {
    audio.play().then(() => {
      musicPlaying = true;
      musicIcon.textContent = '♫';
    }).catch(() => {
      console.info('Audio play blocked — user interaction required or file missing.');
    });
  } else {
    audio.pause();
    musicPlaying = false;
    musicIcon.textContent = '♪';
  }
}


// --- Intersection Observer for scroll reveals ---
function setupReveal() {
  const targets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}


// --- Letter reveal on scroll (start typing when section visible) ---
let letterStarted = false;
function setupLetterObserver() {
  const section = document.getElementById('message');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !letterStarted) {
      letterStarted = true;
      typeLetter();
    }
  }, { threshold: 0.3 });
  observer.observe(section);
}

window.addEventListener("load", () => {
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const h = createHeart();
      h.y = window.innerHeight / 2;
      h.x = window.innerWidth / 2;
      h.size = randomBetween(10, 20);
      h.speedY = randomBetween(1, 3);
      hearts.push(h);
    }, i * 40);
  }
});

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  renderReasons();
  renderGallery();
  setupReveal();
  setupLetterObserver();
});

document.addEventListener("mousemove", e => {
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
  document.body.appendChild(glow);

  setTimeout(() => glow.remove(), 300);
});


let secret = "";

document.addEventListener("keydown", (e) => {
  secret += e.key.toLowerCase();

  if (secret.includes("love")) {
    showSecretMessage();
    secret = "";
  }
});

function showSecretMessage() {
  const msg = document.createElement("div");
  msg.innerHTML = `
    <div style="
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 20px;
      z-index: 9999;
      padding: 20px;
      font-family: 'Dancing Script', cursive;
    ">
      💖 You found my hidden message 💖<br><br>
      I didn't just make this website…<br>
      I made this for you.<br><br>
      — Meljun
    </div>
  `;
  document.body.appendChild(msg);
}


const hour = new Date().getHours();

if (hour >= 18 || hour <= 5) {
  document.body.style.background = "#1a1a2e";
  document.body.style.color = "#fff";
}

document.addEventListener("dblclick", () => {
  alert("You double-clicked… just like my heart when I see you 💓");
});