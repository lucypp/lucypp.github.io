const whiteCircle = document.querySelector('.white-circle');
const blackCircle = document.getElementById('blackCircle');

const whiteRadius = whiteCircle.offsetWidth / 2;

document.addEventListener('mousemove', (e) => {
  const rect = whiteCircle.getBoundingClientRect();
  const centerX = rect.left + whiteRadius;
  const centerY = rect.top + whiteRadius;

  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const maxDistance = whiteRadius - blackCircle.offsetWidth / 2;
  let x = dx;
  let y = dy;

  if (distance > maxDistance) {
    const angle = Math.atan2(dy, dx);
    x = Math.cos(angle) * maxDistance;
    y = Math.sin(angle) * maxDistance;
  }

  blackCircle.style.left = `${whiteRadius + x - blackCircle.offsetWidth / 2}px`;
  blackCircle.style.top = `${whiteRadius + y - blackCircle.offsetHeight / 2}px`;
});
