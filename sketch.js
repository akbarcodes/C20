var fixedRect
var movingRect

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(120,50,60,80);
  movingRect.shapeColor = "blue"
  movingRect.debug = true;
}

function draw() {
  background("brown"); 
  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
     fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
     fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2) {
       movingRect.shapeColor = "red"
       fixedRect.shapeColor = "red"
     }
  else {
    movingRect.shapeColor = "blue"
    fixedRect.shapeColor = "green"
  }
  drawSprites();
}