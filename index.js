//initial setup and vars
"use strict";
//variables
var myCanvas = document.querySelector("#myCanvas");
var ctx = myCanvas.getContext("2d"); //use 2d graphics
// set size values
var height = myCanvas.height;
var width = myCanvas.width;
var xSpeed = 0;
var ySpeed = 2;
  // paddle size
var paddleWidth = 100;
var paddleHeight = 5;
//track the ball
var ballX = width / 5 ;
var ballY = height / 3;
var ballsize = 20;
var ballXSpeed = xSpeed;
var ballYSpeed = ySpeed;


//track left paddle
var leftPaddleX = 40;
var leftPaddleY = (height / 2) - (paddleHeight / 2);
//track right paddle
var rightPaddleX = (width - 40 - paddleWidth);
var rightPaddleY = (height / 2) - (paddleHeight / 2);

//track the size of the play area

//reach out to grab the canvas

// draw paddles and ball to start
drawLand()
drawFlag()
drawText()
drawRocket(ballX,ballY,ballsize);
//main animation loop & controls\\
window.requestAnimationFrame(animate); // flip one frame
//the main struucture of animatition
function animate(){
  ctx.clearRect(0, 0, width, height);
  // draw all items
  drawLand()
  drawFlag()
  drawText()
  drawRocket(ballX,ballY,ballsize);
  // update items
  updateBall();

  // flip another frame
  window.requestAnimationFrame(animate);
}

//helper functions\\


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function drawFlag(){
  ctx.fillStyle='#333'

  ctx.fillRect(width/2 + 160+50, height-250-60, 1,60)
  ctx.fillStyle='#C8102E'
  ctx.fillRect(width/2 +160+50, height-250-60,30,20)
 
  
  var alpha = (2 * Math.PI) / 10; 
  var radius = 7;
  var starXY = [width/2+160+65,height-250-50]

  ctx.beginPath();

  for(var i = 11; i != 0; i--)
  {
      var r = radius*(i % 2 + 1)/2;
      var omega = alpha * i;
      ctx.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1]);
  }
  ctx.closePath();
  ctx.fillStyle = "#FFCD00";
  ctx.fill();

}


function drawLand(){
  ctx.fillStyle = "#BB5335";
  ctx.fillRect(0,height-100, width/2,1)


  ctx.fillRect(width/2, height-129,1,30)

  ctx.beginPath();
  ctx.moveTo(width/2, height-129)
  ctx.lineTo(width/2 +30, height-129+30)
  ctx.stroke()
  ctx.strokeStyle = "#BB5335"
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(width/2 +30, height-129+30)
  ctx.lineTo(width/2 +60, height-150-60)
  ctx.stroke()
  ctx.strokeStyle = "#BB5335"
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(width/2 +120, height-129+120)
  ctx.lineTo(width/2 +60, height-150-60)
  ctx.stroke()
  ctx.strokeStyle = "#BB5335"
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(width/2 +120,  height-129+120)
  ctx.lineTo(width/2 +160, height-250)
  ctx.stroke()
  ctx.strokeStyle = "#BB5335"
  ctx.fill();
  ctx.fillRect(width/2 +160,height-250,300,1)


}

function drawText(){
  ctx.font = "15px Arial";
  ctx.fillStyle="#222"
  ctx.fillText("Vietnam to the Mars", 10, 20);
}
function drawRocket(x,y,size){
  ctx.fillStyle = "#eee";
  var path = new Path2D;
  var rad = size/1.2;
  var startAngle = 0;
  var endAngle = 1 * Math.PI;// 360 degrees
  var isAnticlockwise = false;// don't go anti clockwise
  path.arc(x, y, rad, startAngle, endAngle, isAnticlockwise);
  // draw top rocket
  ctx.beginPath();
  ctx.moveTo(40+ballX-40, 65+ballY-90);
  ctx.lineTo(65+ballX-40, 90+ballY-90);
  ctx.lineTo(15+ballX-40, 90+ballY-90);
  ctx.fill();
  // draw foot rocket
  
  ctx.rect(ballX-11, ballY, 22, 50);


  ctx.rect(ballX-20, ballY+50, 40, 5);


  ctx.fill();
  ctx.fill(path)
}
function updateBall(){
  // move based on speed
  // ballX += ballXSpeed;
  ballY += ballYSpeed;
  if (ballY < 100) {
    ballYSpeed *= -1;
  }
  else if(ballY > height-155){
    ballYSpeed *= -1;
  }
}

