

/*  Originally created by Alysse Galo
    Modified by Susan Evans
    Modified by Chandru Narayan
    Last edited 02/06/2020
*/

function setup() {
  noStroke();
  createCanvas(500, 500);
  background(255, 255, 255);

  allHair();
  ears();
  head();
  eyes();
  nose();
  mouth();
  bowtie();
  eyebrows();
}

function allHair() {
  hair(128, 235);
  hair(373, 235);
}

function hair(x, y) {
  fill(0);
  ellipse(x, y, 50, 80);
}

function ears() {
  ear(135, 295);
  ear(367, 295);
}

function ear(x, y) {
  noStroke();
  fill(243, 205, 159);
  ellipse(x, y, 50, 50);

  fill(234, 184, 125);
  ellipse(x, y, 30, 30);
}

function head() {
  noStroke();
  strokeWeight(2);
  fill(243, 205, 159);
  ellipse(250, 250, 250, 250);
}

function eyes() {
  eye(196, 224);
  eye(300, 224);
}

function eye(x, y) {
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255);
  ellipse(x, y, 50, 30);

  noStroke();
  fill(0);
  ellipse(x, y, 30, 30);

  fill(255);
  ellipse(x + 9, y, 10, 10);
}

function nose() {
  stroke(0);
  strokeWeight(2);
  line(248, 224, 248, 281);

  nostril(264, 281);
  nostril(232, 281);
}

function nostril(x, y) {
  stroke(0);
  strokeWeight(1);
  fill(242, 205, 153);
  ellipse(x, y, 20, 10);
}

function mouth() {
  noStroke();
  fill(242, 159, 159);
  ellipse(249, 325, 40, 10);
  fill(0);
  ellipse(249, 325, 30, 5);
}

function bowtie() {
  fill(234, 28, 46);
  rect(230, 380, 40, 30, 10);
  triangle(190, 366, 250, 396, 190, 420);
  triangle(308, 368, 250, 396, 308, 420);
}

function eyebrows() {
  eyebrow(279, 180);
  eyebrow(180, 180);
}

function eyebrow(x, y) {
  stroke(0);
  strokeWeight(2);
  fill(255, 255, 255);
  line(x, y, x + 37, y);x
}