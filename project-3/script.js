window.addEventListener('load', () => {
    resizeCanvas();
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resizeCanvas);
  
    const resetBtn = document.getElementById('reset-link');
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clearCanvas();
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
    if (event.clientY < 70) return;
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
    if (!paint || event.clientY < 70) return;
  
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
  