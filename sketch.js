var backgroundImage, cat1Image, cat2Image, cat3Image, cat4Image, mouse1Image,mouse2Image,
 mouse3Image, mouse4Image;

 var cat, mouse;
function preload() {
    //load the images here
backgroundImage=loadImage("/tomAndJerryTemplate-master/images/garden.png");
cat1Image=loadAnimation("/tomAndJerryTemplate-master/images/cat1.png");
cat2Image=loadAnimation("/tomAndJerryTemplate-master/images/cat2.png"," /tomAndJerryTemplate-master/images/cat3.png");
cat4Image=loadAnimation("/tomAndJerryTemplate-master/images/cat4.png");

mouse1Image=loadAnimation("/tomAndJerryTemplate-master/images/mouse1.png");
mouse2Image=loadAnimation("/tomAndJerryTemplate-master/images/mouse2.png", " /tomAndJerryTemplate-master/images/mouse3.png");
mouse4Image=loadAnimation("/tomAndJerryTemplate-master/images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600);
cat.addAnimation("catSleeping", cat1Image);
cat.scale=0.2;

mouse=createSprite(200,600);
mouse.addAnimation("mouseSleeping", mouse1Image);
mouse.scale=0.2;
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x <(cat.width-mouse.width)/2){
cat.velocityX=0;
cat.addAnimation("lastImage", cat4Image);
cat.x=300;
cat.scale=0.2;
cat.changeAnimation("lastImage");

mouse.addAnimation("lastImage1", mouse4Image);
mouse.scale=0.2;
mouse.changeAnimation("lastImage1");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
cat.velocityX=-5;    
cat.addAnimation("catRunning", cat2Image);
cat.changeAnimation("catRunning");
    
mouse.addAnimation("mouseTeasing", mouse2Image);
mouse.frameDelay=25;
mouse.changeAnimation("mouseTeasing");
}

}
