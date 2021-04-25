var fixedRect, movingRect;
var gameobject;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobject = createSprite(400, 200, 50, 80);
  gameobject.shapeColor = "green";
  gameobject.debug = true;
  car = createSprite(20,400,25,25);
  car.shapeColor = "red";
  wall = createSprite(1000,400,50,10);
  wall.shapeColor = "grey" ;
  car.velocityX = 5;
}

function draw() {
  background(0,0,0);  

 bounceoff(gameobject,movingRect);
 if(isTouching(car,wall)){
   wall.shapeColor = "red";
 }
 else {
  wall.shapeColor = "grey" ;
 }
  drawSprites();
}
