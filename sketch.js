
function preload(){
  path.loadImage("path.png");
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale= 1.2;

  runner = createSprite(70,580,20,20);
  runner.addAnimation(boyImg);
  runner.scale=0.08;
  
  

}

function draw() {
  background(0);
  
  drawSprites();

  

  //code to reset the background
  if (path.y > 400) {
    path.y = height/2;
  }
  

}
