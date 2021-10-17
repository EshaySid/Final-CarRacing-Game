var database;
var form;
var gamestate = 0;
var playerCount = 0;
var game, player;
var allplayers;
var car1Img, car2Img, trackImg;
var car1, car2;
var carArray = [];
var carsAtTheEnd=0;

function preload() {
  car1Img = loadImage("./Assets/car1.png");
  car2Img = loadImage("./Assets/car2.png");
  trackImg = loadImage("./Assets/track.jpg");
}

function setup() {
  database = firebase.database();
  createCanvas(displayWidth, displayHeight);
  game = new Game();
  game.readGamestate();
  if (gamestate === 0) {
    form = new Form();
    player = new Player();
    player.readPlayerCount();
    form.display();
  }

  car1 = createSprite(100, 400);
  car2 = createSprite(300, 400);

  car1.scale=0.12;
  car2.scale=0.12;

  car1.addImage(car1Img);
  car2.addImage(car2Img);

  carArray.push(car1);
  carArray.push(car2);
}

function draw() {
  background("white");

  if (playerCount === 2) {
    game.writeGamestate(1);
  }

  if (gamestate == 1) {
    game.startGame();
  }

  if(gamestate==2){
    game.showRank();
  }
}
