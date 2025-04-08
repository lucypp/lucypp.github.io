window.addEventListener('load', () => {
  resizeCanvas();
  document.addEventListener('mousedown', startPainting);
  document.addEventListener('mouseup', stopPainting);
  document.addEventListener('mousemove', sketch);
  window.addEventListener('resize', resizeCanvas);

  document.getElementById('reset-link').addEventListener('click', (e) => {
    e.preventDefault();
    clearCanvas();
  });

  document.getElementById('randomize').addEventListener('click', (e) => {
    e.preventDefault();
    randomizeParts();
  });

  canvas.style.pointerEvents = 'none';
});

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let coord = { x: 0, y: 0 };
let paint = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function getPosition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

function startPainting(event) {
  if (!isDrawableArea(event)) return;
  paint = true;
  canvas.style.pointerEvents = 'auto';
  getPosition(event);
  document.body.style.cursor = "url('https://i.imgur.com/4vBQL8O.png'), auto";
}

function stopPainting() {
  paint = false;
  canvas.style.pointerEvents = 'none';
  document.body.style.cursor = "url('https://i.imgur.com/yDK947F.png'), auto";
}

function sketch(event) {
  if (!paint || !isDrawableArea(event)) return;

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#0f60f7';

  ctx.moveTo(coord.x, coord.y);
  getPosition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function randomizeParts() {
  const heads = ['🍎', '🍊', '🍇', '🍒', '🍉'];
  const bodies = ['❤️', '💜', '💚', '💙', '💛'];
  const legs = ['😊', '🤨', '😏', '🤡', '😍'];

  document.getElementById('head').textContent =
    heads[Math.floor(Math.random() * heads.length)];
  document.getElementById('body').textContent =
    bodies[Math.floor(Math.random() * bodies.length)];
  document.getElementById('legs').textContent =
    legs[Math.floor(Math.random() * legs.length)];
}

function toggleVisibility(id) {
  const element = document.getElementById(id);
  const button = element.nextElementSibling;

  if (element.style.visibility === 'hidden') {
    element.style.visibility = 'visible';
    button.textContent = 'Hide';
  } else {
    element.style.visibility = 'hidden';
    button.textContent = 'Show';
  }
}

function isDrawableArea(event) {
  const elementUnderCursor = document.elementFromPoint(event.clientX, event.clientY);
  if (elementUnderCursor && elementUnderCursor.classList.contains('hide-button')) {
    return false;
  }

  const headerHeight = 70;
  const bottomPadding = 60;
  const y = event.clientY;

  return y >= headerHeight && y <= (window.innerHeight - bottomPadding);
}

