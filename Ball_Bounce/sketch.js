
var x = 25;
var dir = 1;

function setup() {
  createCanvas(500, 500);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke();
  fill(R, G, B);
  ellipse(x, 100, 50, 50);
  
  if (x > 275 || x < 25) {
    var R = random(255);
    var G = random(255);
    var B = random(255);
    dir = dir * -1;
    fill(R, G, B)
  }
  x = x + dir;
}