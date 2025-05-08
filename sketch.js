function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);

  let eyeWidth = 400;
  let eyeHeight = 280;
  let pupilSize = 180;

  let eyeY = height / 2;
  let spacing = eyeWidth + 320;

  let eyeLX = width / 2 - spacing / 2;
  let eyeRX = width / 2 + spacing / 2;

  drawEye(eyeLX, eyeY, eyeWidth, eyeHeight, pupilSize);
  drawEye(eyeRX, eyeY, eyeWidth, eyeHeight, pupilSize);
}

function drawEye(x, y, w, h, pupilSize) {
  fill(255);
  beginShape();
  vertex(x - w / 2, y);
  bezierVertex(x - w / 4, y - h / 2, x + w / 4, y - h / 2, x + w / 2, y);
  bezierVertex(x + w / 4, y + h / 2, x - w / 4, y + h / 2, x - w / 2, y);
  endShape(CLOSE);

  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let angle = atan2(dy, dx);

  let maxDist = w * 0.3;
  let px = cos(angle) * maxDist;
  let py = sin(angle) * maxDist;

  fill(0);
  ellipse(x + px, y + py, pupilSize);
}
