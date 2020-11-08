
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(200,340,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,370,400,10);
  ground.velocityX = -3;
  
monkeyGroup = createGroup(); 
  

  
  
}


function draw() {
  background(180);
  ground.x = ground.width/2;
  
  if(keyDown("space")&& monkey.y >= 200){
    monkey.velocityY = -12;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  textSize(20);
  text("survival Time: "+ survivalTime, 100,50);
  
   
  survivalTime =Math.round(frameCount/getFrameRate());
  
  drawSprites();
  createBanana();
 createObstacles();
  
  

  
}
function createBanana(){
  if(World.frameCount%80===0){
  banana = createSprite(400,200,10,10);
banana.addAnimation("banana",bananaImage);
  banana.scale = 0.1;
    banana.velocityX = -3;
    banana.y = rand;
    banana.lifetime = 200;
  } 
  
  rand = Math.round(random(120,200))
  
  monkeyGroup.add(monkey);
  
  
}
function createObstacles(){
  if(World.frameCount%300===0){
  obstacle = createSprite(400,350,10,10);
  obstacle.addAnimation("obstacle",obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  obstacle.lifetime = 200;
  }
 rand = Math.round(random(200,120)) 
}
function createSurvivalTime(){
  
}




