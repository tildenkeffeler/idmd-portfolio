 function setup() {
  createCanvas(500, 500);
  background(150);
  textFont("Anton");
  textSize(40);
  textAlign(CENTER);
  text("this is some text", width/2, height/2);
}
function draw() {
  if (keyIsPressed) {
    if (key === "g") {
      background(0, 255, 0);
    } else if (key === "r") {
      background(255, 0, 0);
    } else if (key === "b") {
      background(0, 0, 255)
    } else {
      background(100);
      //console.log("key typed is:" + key);
    }
    text("this is some text", width/2, height/2);
  }
}
// function keyTyped() {
//   console.log("i typed:" + key);
// }
// function keyPressed() {
//   console.log("i typed:" + key);
// }