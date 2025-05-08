// const pupils = [
//   { eye: document.querySelector('.left-eye'), pupil: document.getElementById('pupilLeft') },
//   { eye: document.querySelector('.right-eye'), pupil: document.getElementById('pupilRight') }
// ];

// document.addEventListener('mousemove', (e) => {
//   pupils.forEach(({ eye, pupil }) => {
//     const rect = eye.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;

//     const dx = e.clientX - centerX;
//     const dy = e.clientY - centerY;

//     const angle = Math.atan2(dy, dx);
//     const distance = Math.min(40, Math.hypot(dx, dy)); // More noticeable movement

//     const x = Math.cos(angle) * distance;
//     const y = Math.sin(angle) * distance;

//     pupil.style.left = `calc(50% + ${x}px)`;
//     pupil.style.top = `calc(50% + ${y}px)`;
//   });
// });
