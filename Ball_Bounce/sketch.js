
var x = 25;
var dir = 1;
var size = 50;

function setup() {
  createCanvas(300, 200);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke();
  fill(R, G, B);
  ellipse(x, 100, size, size);
  
  if (x > width-size/2 || x < size/2) {
    var R = random(255);
    var G = random(255);
    var B = random(255);
    dir = dir * -1;
    fill(R, G, B)
  }
  x = x + dir;
}