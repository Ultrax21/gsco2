var bullet, wall;
var speed,weight,thickness;
var deformation;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 20, 20);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor=color(255);
  bullet.velocityX=speed
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0
   deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(deformation>10){
    wall.shapeColor = color (255,0,0)
  }

else if(deformation<10){
  wall.shapeColor = color(0,255,0)
}
 }


  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+ lbullet.width
  wallLeftEdge = lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}


