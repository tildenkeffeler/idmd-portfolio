/*When you take out the background command the code no longer keeps replacing the background everytime it refreshes and so the robot gets pasted were ever the mouse is when the screen refreshes.*/

function setup() {
//This is the start of the code indicated with the start up and open brace
  createCanvas(720, 480);
//This code creates our canvas, 720 pixels wide, 480 tall
  smooth();
//This line draws all edges with smooth quality
  strokeWeight(2);
//This is the width of the lines drawn
}

function draw() {
//This line means that a shape or shapes will be drawn
  translate(mouseX, mouseY);
//This line means wherever the mouse is the shape will move

  //Neck
  stroke(102);
//The colour of the lines
  line(266, 257, 266, 162);
  line(276, 257, 276, 162);
  line(286, 257, 286, 162);
//These commands make 3 vertical lines 

  //Antennae
  line(276, 155, 246, 112);
  line(276, 155, 306, 56);
  line(277, 155, 342, 170);
//These commands make the other 3 lines
  
  //body
  noStroke();
//makes it so lines dont show up in this part
  fill(230, 208, 21);
  ellipse(264, 377, 66, 66);
  fill(0);
  rect(219, 257, 90, 120);
  fill(230, 208, 21);
  rect(219, 274, 90, 6);
//These commands draw the body, including the ellipse and rectangle inside them
  
  //head
  fill(9, 35, 230);
  ellipse(276, 155, 90, 90);
  fill(230, 21, 21);
  ellipse(288, 150, 28, 28);
  fill(0);
  ellipse(288, 150, 6, 6);
  fill(153);
  ellipse(263, 148, 10, 10);
  ellipse(296, 130, 8, 8);
  ellipse(305, 162, 6, 6);
//These commands creat the ellipse of the head as well as the others inside of it
}
