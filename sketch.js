let programState = 'menu';
let timer = 120;
let soul;
let wings;
let myFont1;
let soulImg;
let lastChar;



function preload() {
  myFont1 = loadFont('DemonWings-GOn4Z.ttf');
  wings = loadImage('wings.png');
  soulImg = loadImage('Mage.png');
}


function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  //canvas.parent('sketch-holder');
}

function draw() {
  switch (programState) {
    case 'menu':
      menuScreen();
      break;
    case 'game':
      gameScreen();
      break;
    case 'info':
      infoScreen();
      break;
    case 'score':
      scoreScreen();
      break;
  }
}

function menuScreen() {
//set up
background(0);
  
//wings
image(wings,0,150,600);

//title
fill(128,0,6);
textSize(100);
textFont(myFont1);
text('SPEED DEMON',width*0.46,height*0.5);

//start button
if ((mouseX > width*0.4) && (mouseX < width*0.62) && (mouseY > height*0.625) && (mouseY < height*0.71)) {
  fill(255,0,0);
  textSize(50);
  textFont(myFont1);
  text('START', width*0.5,height*0.7);
} else {
  fill(255);
  textSize(50);
  textFont(myFont1);
  text('START', width*0.5,height*0.7);
}
  
//info button
if ((mouseX > width*0.44) && (mouseX < width*0.58) && (mouseY > height*0.78) && (mouseY < height*0.85)) {
  fill(255,0,0);
  textSize(50);
  textFont(myFont1);
  text('INFO', width*0.505,height*0.85);
} else {
  fill(255);
  textSize(50);
  textFont(myFont1);
  text('INFO', width*0.505,height*0.85);
  
}
  
}


function gameScreen() {
//set up
background(0);
fill(255);
textSize(20);
textFont(myFont1);
text(timer,width*0.5,height*0.1);
  
  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
  if (timer == 0) {
    programState = 'score';
  }
  
}


function infoScreen() {
  
}


function scoreScreen() {

}


function mouseReleased() {
  if ((programState = 'menu') && ((mouseX > width*0.4) && (mouseX < width*0.62) && (mouseY > height*0.625) && (mouseY < height*0.71))) {
    programState = 'game';
  } else if ((programState = 'menu') && ((mouseX > width*0.44) && (mouseX < width*0.58) && (mouseY > height*0.78) && (mouseY < height*0.85))) {
    programState = 'info';
  }
}