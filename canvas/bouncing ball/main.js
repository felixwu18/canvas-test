// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
// ctx.fillStyle='rgb(135, 3, 72)';
ctx.fillStyle = 'rgb(0,0,0)';//wei ma bu  xianshi
// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}
//构造器
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}
//画圆
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
  var testBall = new Ball(50, 100, 4, 4, 'blue', 10);

  testBall.x；
testBall.size；
testBall.color；
testBall.draw()；
