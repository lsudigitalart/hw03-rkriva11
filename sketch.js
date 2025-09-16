//MY IDEAZZZZ!!!!
// Cute spooky circle pattern
// Colors: orange, purple, black, yellow
// Random positions and sizes

let colors = ["#ff7f2a", "#8e44ad", "#000000", "#ffd32a", "#FF00FF"];

function setup() {
  createCanvas(600, 600);
  background("#fffaf0"); 
  
  stroke('#ffffff');
  strokeWeight(.5);

  
  const rows = 14;
  const cols = 12;
  const gap = 140;

  const cellW = width / cols;
  const cellH = height / rows;
  const baseR = min(cellW, cellH) / 2 - gap;

  // size variation 
  const freqX = 0.7;
  const freqY = 0.35;

  for (let row = 0; row < rows; row++) {
    // stagger 
    const xOffset = (row % 2 === 0) ? 0 : cellW / 2;
    for (let col = 0; col < cols; col++) {
     
      let cx = col * cellW + cellW / 2 + xOffset;
      // skip dots that fall outside the canvas
      if (cx - baseR < 0 || cx + baseR > width) continue;
      let cy = row * cellH + cellH / 2;

      
      let t = col * freqX + row * freqY;
      let sizeFactor = 0.5 + 0.5 * sin(t);
      let r = baseR * (0.4 + 0.6 * sizeFactor);

      // color alternates 
      let c = colors[(col + row) % colors.length];

      fill(c);
      strokeWeight(max(0.5, r * 0.06));
      ellipse(cx, cy, r * 2, r * 2);
    }
  }

  noLoop();
}
