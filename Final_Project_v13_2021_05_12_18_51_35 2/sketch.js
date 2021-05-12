
let add_button;
let del_button;
let burst_button 

class Shape {
  constructor(xloc, yloc, xdir, ydir, xinc, yinc, colr, sze) {
    this.x = xloc;
    this.y = yloc;
    this.c = colr;
    this.s = sze;
    this.xd = xdir;
    this.yd = ydir;
    this.xi = xinc;
    this.yi = yinc;
    this.f = false;
  }

  freeze() { // This "Freeze" code allows the shapes to be forzen in place 
    let d = dist(this.x, this.y, mouseX, mouseY); 
    if (d <= this.s / 2) {
      this.f = true;
    }
  }
  update() {  // This update code is what allows the delete object button to work in comparison with the this.f constructor 
    if (this.f == true) {
      this.xi = 0;
      this.yi = 0;
    }
  }
  move() { // This move code makes the shapes move by using the this.x, this.xi, and this.xd constructors
    //this.xi = incx;
    //this.yi = incy;
    this.x += this.xi * intensity * this.xd;
    this.y += this.yi * intensity * this.yd;
  }

  display() { // The display area shows where the triangles are being built as well as showing were the rotate function works.
    push();
    translate(this.x, this.y);
    let theta = Math.atan2(mouseY-this.y, mouseX-this.x);
    rotate(theta+PI/2);
    fill(this.c);
    beginShape();
    vertex(0, -this.s);
    vertex(this.s / 2, this.s / 2);
    vertex(-this.s / 2, this.s / 2);
    endShape(CLOSE);
    //triangle(0, 0, this.s/2, this.s/2, 0, -this.s);
    pop();
  }
}
let bubb1, bubb2, bubb3; // These are all of my global variables that I have made to use in my code.
let ba = [];
let sz = 10;
let numB = 50;
let sz2 = 50;
let incx = 1;
let incy = 1;
let intensity = 0.5;
let tgtX;
let tgtY;
let sz3 = 15;
let sz4 = 15;

function setup() { // This is my set up, it contains the background, all the buttons and sliders, as well as the inital burst of triangles.
  createCanvas(800, 800);
  print("started sketch");
   
  add_button = createButton("add object");
  add_button.mousePressed(new_object);
  del_button = createButton("delete frozen object");
  del_button.mousePressed(del_object);
  burst_button = createButton("add burst");
  burst_button.mousePressed(new_burst);
  slider = createSlider(1, 5, 2, 0.5);
  createP('the slider changes the speed of the triangles');
  createP('if you hover your mouse over a triangle it will freeze in place');
  angleMode(RADIANS);
   
  sz = 10;
  for (let i = 0; i < numB; i++) {
    ba.push(
      new Shape(
        width - sz / 2,
        height / 2,
        random(-1, 1),
        random(-1, 1),
        0.5,
        0.5,
        randColor(),
        sz
      )
    );
  }
}

function draw() { // The draw function is using the calls with the ba[i]'s that call from every part of the code to make them work.
  background(220);
  intensity = slider.value();
  for (let i = 0; i < ba.length; i++) {
    ba[i].move();
    ba[i].freeze();
    ba[i].update();
    ba[i].display();
  }
}

function randColor() { // This is what randomizes the colours of the 
  return color(random(255), random(255), random(255));
}

function new_object() { // This was the button that allows you ass a new object to the canvas
  ba.push(
    new Shape(
      400,
      400,
      random(-1, 1),
      random(-1, 1),
      0.5,
      0.5,
      randColor(),
      sz2
    )
  );
}
function del_object() { // This was added to let you delete the frozen objects from the canvas 
  for (let i = ba.length-1; i >= 0; i--) {
   if( ba[i].f == true) {
     ba.splice(i, 1);
   }
  }
}

function mousePressed() { // This is how the code knows how to follow the mouse.
  tgtX = mouseX;
  tgtY = mouseY;
  print(tgtX, tgtY);
}

function new_burst() { // This is the button that adds the new burst of small triangles. 
  let sz3 = random(1,800);
  let sz4 = random(1,800);
  for (let i = 0; i < numB; i++) {
    ba.push(
      new Shape(
        width = sz3, 
        height = sz4,
        random(-1, 1),
        random(-1, 1),
        0.5,
        0.5,
        randColor(),
        sz
      )
    );
  }
}