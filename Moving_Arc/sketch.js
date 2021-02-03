var r, g, b;
var a;

function setup() {
r = random(255);
g = random(255);
b = random(255);
a = 0
  createCanvas(600, 400);
}

function draw() {
  background(220);
  staticShape();
  dynamicShape();
}

function staticShape() {
  strokeWeight(10);
  stroke(255, 0, 0);
  point(width/2, height/2);
  stroke(0, 0, 255);
  strokeWeight(3);
  line(0, 0, width, height);
  stroke(0, 255, 0);
  strokeWeight(3);
  line(0, height, width, 0);
  fill(0, 0, 255)
  noStroke();
  triangle(width/2, height/2, width/2+100, height, width/2-100, height);
}
function dynamicShape() { 
  translate(width/2, height/2);
  fill(r, g, b, 100);
  a = a + 0.11;
  rotate(a);
  arc(0, 0, 200, 200, PI, HALF_PI);
}
      
