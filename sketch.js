var movingRect;
var fixedRect;
var car;
var wall;


function setup() {
  createCanvas(1200,400);
movingRect = createSprite(100,150,50,100);
fixedRect = createSprite(200,150,50,100);
car = createSprite(100,100,50,50);
wall = createSprite(700,100,50,100);
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";
car.shapeColor = "lightblue";
wall.shapeColor = "darkblue";
movingRect.debug=true;
fixedRect.debug=true;
car.velocityX = 3;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  bounceOff(car,wall);
  rectMode(CENTER);
  //rect(200,200,50,50);  
  drawSprites();
}

function isTouching(object1,object2) {
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
    return true;
  }
  else{
    return false;
  }
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2){
      object1.velocityX = object1.velocityX * (-1);
    }
  if (object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
      object1.velocityY = object1.velocityY * (-1);
      }
}