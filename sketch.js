let xPos = 25;
let direction = 1;
let charmander ;
let battlecry ; 

function preload(){


  charmander = loadImage("images/charmander.png")

  battlecry = loadSound("Sounds/battlecry.mp3")
}

function setup() {
  createCanvas(500, 500);
  background(0);
  imageMode(CENTER)
}

function draw() {
  background(0);
  fill(0, 255, 0);
  image(charmander,xPos, 250, 50, 50);
  

  xPos += 3 * direction;
  if (xPos > 475 || xPos < 25) {
    direction *= -1;
    battlecry.play()
  }
}




