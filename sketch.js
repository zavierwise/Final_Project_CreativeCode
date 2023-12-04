let programState = 'menu';
let x = -15;
var increment = 5;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  switch (programState) {
    case 'menu':
      menuScreen();
      break;
    case 'game':
      gameScreen();
      break;
    case 'die':
      dieScreen();
      break;
  }
}

function menuScreen() {
//set up
  background(220);
  
//title
  text
//start button
  
}


function mouseReleased() {
  if ((programState = 'menu') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09))) {
    programState = 'game';
  }
}