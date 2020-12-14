var car ;
var wall;
var speed, weight;

function setup() 
{
  createCanvas(1000,350);
  speed = random(55,90);
  weight = random(400,1500);

  car  = createSprite(50,200,50,50);
  car .velocityX = speed;

  wall = createSprite(900,200,60,height/2);
  

  
}

function draw() {
  background("blue");  
  if(wall.x - car.x < (car.width + wall.width)/2)
  {
     car.velocityX  = 0;
     var deformation = 0.5 *weight *speed *speed/22509;
     if(deformation > 150)
     {
       car.shapeColor = "red";
     }
     if(deformation < 150 && deformation > 100)
     {
       car.shapeColor = "green";
     }
     if(deformation > 50)
     {
       car.shapeColor = "yellow";
     }
  }
  
  drawSprites();
}