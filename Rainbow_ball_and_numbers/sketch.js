var number = 0;
var r, g, b;


function setup() {
  createCanvas(400, 400);
  frameRate(10);  
}
function draw() {
  //number += 1;
  background(220);
  number = random(100);
  r = random(255);
  g = random(255);
  b = random(255);
  fill(0);
  text(nf(number, 3, 0), width/2, height/2);
  fill (r, g, b);
  ellipse(width-100, height-100, 50, 50);
  
}