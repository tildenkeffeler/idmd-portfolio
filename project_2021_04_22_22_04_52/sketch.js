let newX;
let newY;
let startX = 20; // Initial x coordinate
let stopX = 160; // Final x coordinate
let startY = 30; // Initial y coordinate
let stopY = 80; // Final y coordinate
let x = startX; // Current x coordinate
let y = startY; // Current y coordinate
let step = 0.005; // createCanvas of each step (0.0 to 1.0)
let pct = 0.0; // Percentage traveled (0.0 to 1.0)
var r, g, b

function setup() {
  createCanvas(400, 400);
  startX = width / 2
  startY = height / 2
}

function draw() {
  background(110);
  r = random(255);
  g = random(255);
  b = random(255);
  // if ((stopX - startX) == 0 && (newY - mouseY) == 0) {
  if (pct < 1.0) {
    x = startX + ((stopX - startX) * pct);
    y = startY + ((stopY - startY) * pct);
    pct += step;
  } else {
    autoTween();
  }

  // }
  ellipse(x, y, 20, 20);
}

function mousePressed() {
  if (pct >= 1.0){
  newX = random(width);
  newY = random(height);
  startX = stopX;
  startY = stopY;
  stopX = newX;
  stopY = newY;
  pct = 0;
  console.log(startX, startY, stopX, stopY);
  }
}
function autoTween() {
  //if (pct >= 1.0){
  r = random(255);
  g = random(255);
  b = random(255);
  fill(r, g, b);
  newX = random(width);
  newY = random(height);
  startX = stopX;
  startY = stopY;
  stopX = newX;
  stopY = newY;
  pct = 0;
  //console.log(startX, startY, stopX, stopY);
//change colour every time it tweens 
}
//***** 
// MODIFY THIS CODE TO ADD ADDITIONAL POINTS TO TWEEN TO    
// BASED ON WHERE THE MOUSE IS CLICKED. START EACH ADDITIONAL
// TWEEN ONLY WHEN THE PREVIOUS TWEEN HAS COMPLETED. 
// HINT: USE mousePressed(), mouseX, mouseY  
//*****