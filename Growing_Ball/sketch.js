var x = 250;
var y = 250;
var w = 50;

var redcolour = 161;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  redcolour=map(w,50, 500, 255, 20);
  print(w, redcolour);
  fill(redcolour, 16, 26);
  ellipse(x, y, w, w);
  distance = dist(x, y, mouseX, mouseY);
  if (distance < w / 2) {
    w += 1; 
  } else {
    w = 50;  
  }
}