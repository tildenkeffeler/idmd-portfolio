let nmax = 1;
let phase = 0;
let zoff;
let ainc;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0.1, 7, 0.5, 0.01);
}
function draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255);
  noFill();
  beginShape();
  stroke('red');
  fill('blue');
  strokeWeight(3);
  for (let a = 0; a < TWO_PI; a+=ainc) {
    //let r = random(150, 200);
    let xoff = map(cos(a+phase), -1, 1, 0, nmax);
    let yoff = map(sin(a+phase), -1, 1, 0, nmax);
    let r = map(noise(xoff, yoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
    xoff += 1.5;
    yoff += 1.5;
    ainc = slider.value();
    
  }
  endShape(CLOSE);
  phase += 0.1;
  //noLoop();
}