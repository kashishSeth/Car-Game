var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "Blue";
  wall = createSprite(1500,200,60,height/2);
wall.shapeColor = "Red";

  speed = random(55,90);
  weight = random(400,1500);
    
  car.velocityX = speed
}

function draw() {
  background(255,255,255);  

  
  var deformation= 0.5 * weight * speed * speed/22509
  
  if(deformation > 180) {
   car.shapeColor = "Red"; 
  }

  if(deformation < 180 && deformation > 100) {
    car.shapeColor = "Yellow";
  }

  if(deformation < 100) {
    car.shapeColor = "Green";
  }

  if(car.isTouching(wall)) {
    car.velocityX = 0;
  }
  
  drawSprites();
}