let programState = 'menu';

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  canvas.parent('sketch-holder');
}

function draw() {
  switch (programState) {
    case 'menu':
      menuScreen();
      break;
    case 'game':
      gameScreen();
      break;
    case 'score':
      scoreScreen();
      break;
  }
}

function menuScreen() {
//set up
background(220);
  
//title
fill(128,0,6);
textSize(20);


//start button
  
}


function gameScreen() {

}


function scoreScreen() {

}

function mouseReleased() {
  if ((programState = 'menu') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09))) {
    programState = 'game';
  }
}