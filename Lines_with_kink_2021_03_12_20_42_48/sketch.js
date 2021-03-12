let cols = 75;
//let rows = 10;
let canWid = 520;
let canHgt = 140;
let count = 0;
let x1 = [], x2 = [], x3 = [];
let y1 = [], y2 = [], y3 = [];
function setup() {
   createCanvas(canWid, canHgt);
   background(200);
   frameRate(30);
   let xoff = canWid/(cols + 1);
   //let yoff = canHgt/(rows +1);
   for (let i = 0; i < cols; i++) {
       x1.push(xoff*(i+1));
       y1.push(0);;
       x2.push(x1[i]+x1[i]/5);
       y2.push(height/1.5);
       x3.push(x2[i]-x2[i]/10);
       y3.push(height);
   }
}
function draw() {
       line(x1[count], y1[count], x2[count], y2[count]);
       line(x2[count], y2[count], x3[count], y3[count]);
  count++;
  if (count >= cols) {
    noLoop();
    text("" + count + " lines drawn", width/2, height/2);
  }
}
