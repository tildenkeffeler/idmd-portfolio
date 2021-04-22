var r, g, b;


let res = 40;
let rows, cols;
let xoff, yoff, zoff = 1;
let inc = .1;
function setup() {
  createCanvas(400, 400);
  rows = height/res;
  cols = width/res;
  noStroke();
}
function draw() {
  background(220);
  yoff = 100;
  for(let i=0; i<rows; i++) {
    xoff = 300;
    for(let j=0; j<cols; j++) {
      n = noise(xoff, yoff, zoff)*255;
      fill(n);
      rect(i*res, j*res, res, res);
      let dx = i*res+20;
      let dy = j*res+20;
      drawDial(dx, dy, n);
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += inc/10;
  r = random(255);
  g = random(255);
  b = random(255);
}
function drawDial(x, y, n) {
  push();
  translate(x, y);
  stroke(r, g, b);
  let a = map(n, 0, 255, 0, TWO_PI); 
  let angle = atan(a);
  ellipse(0, 0, 5, 5);
  rotate(angle*10);
  line(0, 0, 0, -20);
  noStroke();
  pop();
}