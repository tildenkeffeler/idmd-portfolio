var r, g, b;
var countX 
var countY
countX = 0;
countY = 0;

function setup() {
      createCanvas(400, 400);
      background(120);
  }

  function draw(){
  
      for(let y = height/10; countY < 9; y = y + height/10){
        countY = countY + 1;
        countX = 0;
          for(let x = width/10; countX < 9; x = x + width/10){
            countX = countX + 1;
             strokeWeight(10);
             r = random(255)
             g = random(255)
             b = random(255)
             stroke(r, g, b);
              point(x,y);  
          
            
            strokeWeight(1.5);
              line(x,y, width/2, height/2);
          }
      }
  }