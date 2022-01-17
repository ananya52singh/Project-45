var girl;
var logo;
var t;
var play;
var pad;
var l1;
var l2;
var l3;
var l4;
var l5; 
var l6;
var l7;
var l8;
var l9;
var l10;
var arrow;
var pl;
var hand;
var bow;
var dart;
var a;
var l1p;
var lb;
var ab;
var b;
var c;
var score = 0;
var wall;
var gameOver;
function preload(){
girlImage = loadImage("./assets/13.png");
logoImage = loadImage("./assets/12.jpg");
tImage = loadImage("./assets/18.png");
playImage = loadImage("./assets/11.png");
padImage = loadImage("./assets/13.jpg");
l1Image = loadImage("./assets/l1.png");
l2Image = loadImage("./assets/l2.png");
l3Image = loadImage("./assets/l3.png");
l4Image = loadImage("./assets/l4.png");
l5Image = loadImage("./assets/l5.png");
l6Image = loadImage("./assets/l6.png")
l7Image = loadImage("./assets/l7.png")
l8Image = loadImage("./assets/l8.png")
l9Image = loadImage("./assets/l9.png")
l10Image = loadImage("./assets/l10.png")
arrowImage = loadImage("./assets/arrow.png");
plImage = loadImage("./assets/6.png")
handImage = loadImage("./assets/14.png")
bowImage = loadImage("./assets/bow_and_arrow.png")
dartImage = loadImage("./assets/5.png")
aImage = loadImage("./assets/a.png");
l1pImage = loadImage("./assets/l1 pad.png");
lbImage = loadImage("./assets/25.png");
abImage = loadImage("./assets/3.png");
bImage = loadImage("./assets/4.png");
cImage = loadImage("./assets/61.png");
wallImage = loadImage("./assets/4.jpg");
gameOverImage = loadImage("./assets/21.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
    
logo = createSprite(1000,480,100,50);
logo.addImage(logoImage);
logo.scale =2.7;
logo.visible = true;

girl = createSprite(600,520,100,50);
girl.addImage(girlImage);
girl.scale =1.5;
girl.visible = true;

t = createSprite(1000,250,100,50);
t.addImage(tImage);
t.scale =1.3;
t.visible = true;

play = createSprite(1000,720,100,50);
play.addImage(playImage);
play.scale =0.7;
play.visible = true;

pad = createSprite(1000,480,100,50);
pad.addImage(padImage);
pad.scale =2.3;
pad.visible = false;

lb = createSprite(1000,480,100,50);
lb.addImage(lbImage);
lb.scale =2.7;
lb.visible = false;

l1 = createSprite(600,300,100,50);
l1.addImage(l1Image);
l1.scale =0.9;
l1.visible = false;

l2 = createSprite(800,300,100,50);
l2.addImage(l2Image);
l2.scale =0.9;
l2.visible = false;

l3 = createSprite(1000,300,100,50);
l3.addImage(l3Image);
l3.scale =0.9;
l3.visible = false;

l4 = createSprite(1200,300,100,50);
l4.addImage(l4Image);
l4.scale =0.9;
l4.visible = false;

l5 = createSprite(1400,300,100,50);
l5.addImage(l5Image);
l5.scale =0.9;
l5.visible = false;

l6 = createSprite(600,600,100,50);
l6.addImage(l6Image);
l6.scale =0.9;
l6.visible = false;

l7 = createSprite(800,600,100,50);
l7.addImage(l7Image);
l7.scale =0.9;
l7.visible = false;

l8 = createSprite(1000,600,100,50);
l8.addImage(l8Image);
l8.scale =0.9;
l8.visible = false;

l9 = createSprite(1200,600,100,50);
l9.addImage(l9Image);
l9.scale =0.9;
l9.visible = false;

l10 = createSprite(1400,600,100,50);
l10.addImage(l10Image);
l10.scale =0.9;
l10.visible = false;

arrow = createSprite(230,100,100,50);
arrow.addImage(arrowImage);
arrow.scale =0.3;
arrow.visible = false;

pl = createSprite(300,630,100,50);
pl.addImage(plImage);
pl.scale =0.9;
pl.visible = false;

hand = createSprite(285,585,100,50);
hand.addImage(handImage);
hand.scale =0.9;
hand.visible = false;

hand2 = createSprite(374,585,100,50);
hand2.addImage(handImage);
hand2.scale =0.9;
hand2.visible = false;

bow = createSprite(355,585,100,50);
bow.addImage(bowImage);
bow.scale =0.6;
bow.visible = false;

dart = createSprite(1300,555,100,50);
dart.addImage(dartImage);
dart.scale =0.9;
dart.visible = false;

arrow2 = createSprite(30,30,100,50);
arrow2.addImage(arrowImage);
arrow2.scale =0.3;
arrow2.visible = false;
    
l1p = createSprite(900,180,100,50);
l1p.addImage(l1pImage);
l1p.scale =0.7;
l1p.visible = false;


wall = createSprite(1150,585,100,50);
wall.addImage(wallImage);
wall.scale =0.4;
wall.visible = false;

gameOver = createSprite(750,455,100,50);
gameOver.addImage(gameOverImage);
gameOver.scale =0.4;
gameOver.visible = false;

score = 0;

arrowGroup = new Group();
}

function draw() {
  background("white");  
  if (keyDown("UP_ARROW")) {
   bow.y= bow.y-0.2
    
  }
  if (keyDown("DOWN_ARROW")) {
    bow.y= bow.y+0.2
     
   }
  if (keyDown("space")) {
    createArrow();
    
  }

 
  if(mousePressedOver(play)){
    pad.visible = true;
    t.visible = false;
    play.visible = false;
    girl.visible = false;
    logo.visible = false;
    l1.visible = true;
    l2.visible = true;
    l3.visible = true;
    l4.visible = true;
    l5.visible = true;
    arrow.visible = true;
    pl.visible =  false;
    hand.visible= false;
    hand2.visible= false;
    bow.visible = false;
    dart.visible = false;
    l1p.visible = false;
    lb.visible = false;
    l6.visible = true;
    l7.visible = true;
    l8.visible = true;
    l9.visible = true;
    l10.visible = true;
    wall.visible = false;
   gameOver.visible = false;
  }

  if(mousePressedOver(arrow)){
    pad.visible = false;
    t.visible =true;
    play.visible = true;
    girl.visible = true;
    logo.visible = true;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    arrow.visible = false;
    pl.visible= false;
    hand.visible=false;
    hand2.visible= false;
    bow.visible=false;
    dart.visible=false;
    arrow2.visible = false;
    l1p.visible= false;
    lb.visible= false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    wall.visible = false;
    gameOver.visible = false;
  }

  if(mousePressedOver(l1)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
    dart.visible = true;
    arrow2.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    l1p.visible = true;
    lb.visible = true;
    wall.visible = false;
    gameOver.visible = false;
    
    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }
  
  }

  if(mousePressedOver(l2)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
    dart.visible = true;
    arrow2.visible = false;
    l1p.visible = false;
    lb.visible = true;
    wall.visible = true;
    gameOver.visible = false;

    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }
  }

  if(mousePressedOver(l3)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
   dart.visible = true;
    arrow2.visible = false;
    l1p.visible = false;
    lb.visible = true;
    wall.visible = true;
    gameOver.visible = false;
    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }
  }
  if(mousePressedOver(l4)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
    dart.visible = true;
    arrow2.visible = false;
    l1p.visible = false;
    lb.visible = true;
    wall.visible = true;
    gameOver.visible = false;
    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }

  }
  if(mousePressedOver(l5)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
    dart.visible = true;
    arrow2.visible = false;
    l1p.visible = false;
    lb.visible = true;
    wall.visible = true;
    gameOver.visible = false;
    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }
   
  }
  if(mousePressedOver(l6)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
    dart.visible = true;
    arrow2.visible = false;
    l1p.visible = false;
    lb.visible = true;
    wall.visible = true;
    gameOver.visible = false;
    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }

  }
  if(mousePressedOver(l7)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
    dart.visible = true;
    arrow2.visible = false;
    l1p.visible = false;
    lb.visible = true;
    wall.visible = true;
    gameOver.visible = false;
    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }

  }
  if(mousePressedOver(l8)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
    dart.visible = true;
    arrow2.visible = false;
    l1p.visible = false;
    lb.visible = true;
    wall.visible = true;
    gameOver.visible = false;
    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }

  }
  if(mousePressedOver(l9)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
    dart.visible = true;
    arrow2.visible = false;
    l1p.visible = false;
    lb.visible = true;
    wall.visible = true;
    gameOver.visible = false;
    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }

  }
  if(mousePressedOver(l10)){
    pad.visible = false;
    t.visible =false;
    play.visible = false;
    girl.visible =false;
    logo.visible = false;
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    l6.visible = false;
    l7.visible = false;
    l8.visible = false;
    l9.visible = false;
    l10.visible = false;
    arrow.visible = true;
    pl.visible= true;
    hand.visible=true;
    hand2.visible=true;
    bow.visible = true;
    dart.visible = true;
    arrow2.visible = false;
    l1p.visible = false;
    lb.visible = true;
    wall.visible = true;
    gameOver.visible = false;
    if(arrowGroup.isTouching(dart)){
      score = score+1;
    }

  }
 
  drawSprites();
  fill("black");
  textSize(25);
  text("Score "+ score, 1380 , 100);

}
function createArrow() {
  var a= createSprite(360, 585, 60, 10);
  a.addImage(aImage);
  a.x = 360;
  a.y=bow.y;
  a.velocityX = 15;
  a.lifetime = 70;
  a.scale = 0.16;
  
}
