var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var leftGround
var rightGround

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

  createCanvas(800,800)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(400,800,800,20);
bottomGround.visible = false;

topGround = createSprite(400,0,800,20);
topGround.visible = false;

leftGround = createSprite(0,400,10,800);
rightGround = createSprite(800,400,10,800);

leftGround.visible = false;
rightGround.visible = false;
      
zoe = createSprite(200,200)



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            //balloon.velocityY = -6 ;
            
          }

          //adding gravity
           //balloon.velocityY = balloon.velocityY + 2;

           if(keyDown("LEFT_ARROW")){
             //zoe.velocityX = -0.6
             zoe.x = zoe.x -5
           }

           if(keyDown("RIGHT_ARROW")){
            //zoe.velocityX = -0.6
            zoe.x = zoe.x +5
          }

          if(keyDown("UP_ARROW")){
            //zoe.velocityX = -0.6
            zoe.y = zoe.y -5
          }

          if(keyDown("DOWN_ARROW")){
            //zoe.velocityX = -0.6
            zoe.y = zoe.y +5
          }

        zoe.collide(topGround);
        zoe.collide(bottomGround);
        zoe.collide(leftGround);
        zoe.collide(rightGround);

       createMeat();

        drawSprites();
        
}

function createMeat(){
  if(frameCount % 80 == 0){
    var meat = createSprite(random(50,700),random(80,700))
    meat.lifetime = 80;

  }
}