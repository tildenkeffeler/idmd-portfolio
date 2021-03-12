var page = 0
var eyeDirection = 0
var jumpValue = -200
var jumpDir = 0

function setup() {
  createCanvas(1000, 1000);
}

function mousePressed() {
page = 1 - page
}

function draw() {
  background(220);
monster(500, 500);
 // call your monster function
 if (page == 0) {
   if (mouseX>500 && eyeDirection<40){
   eyeDirection = eyeDirection+ 1
   } else if(eyeDirection>-40){
   eyeDirection = eyeDirection - 1
   }
 } else {
   if (jumpDir<jumpValue){
     jumpDir = jumpDir + 1 
   } else {
     jumpDir = jumpDir - 1
     }
   }
 }

function monster(x, y){
head(x, y+jumpDir);
eyes(x+eyeDirection, y+jumpDir);
neck(x, y+jumpDir);
body(x, y+jumpDir);
legs(x, y+jumpDir);
}

function head(x, y){
fill(255, 255, 255)
ellipse(x, y-150, 350, 150);
}
  
function eyes(x, y){
fill(227, 206, 20);
ellipse(x-105, y-150, 50, 50);
ellipse(x+105, y-150, 50, 50);
}
function neck(x, y){
fill(255, 255, 255)
ellipse(x, y-38, 60, 75);  
}
function body(x, y){
ellipse(x, y+74, 150, 150);
fill(212, 19, 208)
ellipse(x, y+74, 85, 85);
ellipse(x, y-38, 30, 37.5);
}
function legs(x, y){
fill(255, 255, 255)
triangle(x-70, y+100, x-150, y+220, x-30, y+142);
triangle(x+70, y+100, x+150, y+220, x+30, y+142);
}


