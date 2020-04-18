var player , playerimg;
var backgroundimg;
var maze1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var bg;

function preload(){
backgroundimg = loadImage("images/grass.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

 player =  createSprite(650,displayHeight/2 + 200, 35, 35);

}

function draw() {
 
  background(backgroundimg);  
  if(keyDown(UP_ARROW)){
    setDir(0,-4);
  } else 

  if(keyDown(RIGHT_ARROW)){
    setDir(4,0);
  }else 

  if(keyDown(LEFT_ARROW)){
     setDir(-4,0);
  }else
  if(keyDown(DOWN_ARROW)){
    setDir(0,4);
  }
  drawSprites();
}
function setDir(x,y){
   player.x = player.x + x;
   player.y = player.y + y;
}