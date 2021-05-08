
var  cat, catImage1,catImage2,catHappy;
var mouse, mouseImage1,mouseImage2,mouseHappy;

var bgImage;

function preload() {

    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catHappy = loadAnimation("images/cat4.png");

    mouseImage1 = loadAnimation("images/mouse4.png");
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png") 
    mouseHappy = loadAnimation("images/mouse1.png");

    bgImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(700,600);
    cat.addAnimation("cat",catImage1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouse",mouseImage1);
    mouse.scale = 0.1;
}

function draw() {

    background(bgImage);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseHappy",mouseHappy)
        mouse.changeAnimation("mouseHappy");

        cat.addAnimation("catHappy",catHappy);
        cat.changeAnimation("catHappy");
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  /*if (keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImage2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
        cat.velocityX = -3;
        cat.addAnimation("running",catImage2);
        cat.changeAnimation("cat_running");
      }*/

  if (keyCode === LEFT_ARROW){

    mouse.addAnimation("mouseTeasing",mouseImage2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    cat.velocityX = -3;
    cat.addAnimation("running",catImage2);
    cat.changeAnimation("running");
  }
 

}