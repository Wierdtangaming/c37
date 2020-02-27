var canvas, backgroundImage;

var gameState = 0;
var player_count;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars;
var car1,car2,car3,car4;

function setup(){

  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  console.log(player_count);
  console.log(gameState);

  if(player_count === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
