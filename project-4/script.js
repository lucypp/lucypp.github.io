const display = document.getElementById("timeDisplay");

let isHovering = false;
let currentLable = "";

function getNYTime() {
  const options = { timeZone: "America/New_York" };
  const date = new Date();
  const nyDate = new Date(date.toLocaleString('en-US', options));
  const hours = nyDate.getHours();
  const minutes = nyDate.getMinutes();
  const seconds = nyDate.getSeconds();
  const fullTime = format12Hour(hours, minutes, seconds);
  return { hour: hours, fullTime };
}

function pad(n) {
  return n.toString().padStart(2, '0');
}

function format12Hour(hours, minutes, seconds) {
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${pad(hour12)}:${pad(minutes)}:${pad(seconds)}${ampm}`;
}

function getLabelAndFont(hour) {
  if (hour >= 3 && hour <= 7) {
    return {
      label: "DAWN",
      font: "'Aboreto', cursive",
      fontSize: "30vw",
      hoverFontSize: "10vw",
      bgColor: "#FF8400",
      textColor: "#E77EFF"
    };
  } else if (hour >= 8 && hour <= 18) {
    return {
      label: "NOON",
      font: "'Climate Crisis', sans-serif",
      fontSize: "22vw",
      hoverFontSize: "8vw",
      bgColor: "#0099FF",
      textColor: "#FFECB6"
    };
  } else if (hour >= 19 && hour <= 20) {
    return {
      label: "DUSK",
      font: "'Fondamento', cursive",
      fontSize: "32vw",
      hoverFontSize: "9vw",
      bgColor: "#5119B9",
      textColor: "#AD340F"
    };
  } else {
    // 9PM to 2AM
    return {
      label: "NIGHT",
      font: "'Bagel Fat One', cursive",
      fontSize: "31vw",
      hoverFontSize: "11vw",
      bgColor: "#001A3B",
      textColor: "#CCEEFF"
    };
  }
}


function update() {
  const { hour, fullTime } = getNYTime();
  const { label, font, fontSize, hoverFontSize, bgColor, textColor } = getLabelAndFont(hour);
  currentLabel = label;

  if (isHovering) {
    display.textContent = fullTime;
    display.style.fontSize = hoverFontSize; // ✅ use per-label hover size
  } else {
    display.textContent = label;
    display.style.fontFamily = font;
    display.style.fontSize = fontSize;
    document.body.style.backgroundColor = bgColor;
    display.style.color = textColor;
  }
}



display.addEventListener("mouseenter", () => {
  isHovering = true;
});

display.addEventListener("mouseleave", () => {
  isHovering = false;
  update();
});

setInterval(update, 1000);
update();
