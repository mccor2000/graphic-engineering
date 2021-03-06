//initial setup and vars
"use strict";
//variables
var myCanvas = document.querySelector("#canvas");
// set size values
var height = myCanvas.height;
var width = myCanvas.width;
var xSpeed = 0;
var ySpeed = 4;
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
let mousepointX =0 
let mousepointY =0 


let showFire = false
myCanvas.addEventListener('mousemove', event =>
{
    let bound = myCanvas.getBoundingClientRect();
    let x = event.clientX - bound.left - myCanvas.clientLeft;
    let y = event.clientY - bound.top - myCanvas.clientTop;
    mousepointX=x;
    mousepointY=y
  });
// draw paddles and ball to start

function draw2D(ctx){
  drawMoon(ctx,width-150,height/2,ballsize)
  showCoordinates(ctx)
  drawLand(ctx)
  drawFlag(ctx)
  drawText(ctx)
  if(showFire)
  showFireRocket(ctx)
  drawRocket(ctx,ballX,ballY,ballsize);
  //main animation loop & controls\\
  window.requestAnimationFrame(animate); // flip one frame
  //the main struucture of animatition
  function animate(){
      ctx.clearRect(0, 0, width, height);
      // draw all items
      drawMoon(ctx,width-150,height/2,ballsize)
      showCoordinates(ctx)
      drawLand(ctx)
      drawFlag(ctx)
      drawText(ctx)
      if(showFire)
      showFireRocket(ctx)
      drawRocket(ctx,ballX,ballY,ballsize);

      // update items
      updateBall();

      // flip another frame
      window.requestAnimationFrame(animate);
    }
}



//helper functions\\
let sizeMoon = 100
function drawMoon(ctx,x,y){

  var path = new Path2D;
  var rad = sizeMoon;
  var startAngle = 0;
  var endAngle = 2 * Math.PI;// 360 degrees
  var isAnticlockwise = false;// don't go anti clockwise
  path.arc(x-150, y-250, rad, startAngle, endAngle, isAnticlockwise);
  ctx.fillStyle = "#999";
  ctx.fill(path)

  var path = new Path2D;
  var rad = sizeMoon/7;
  var startAngle = 0;
  var endAngle = 3.6 * Math.PI;// 360 degrees
  var isAnticlockwise = false;// don't go anti clockwise
  path.arc(x-100, y-250, rad, startAngle, endAngle, isAnticlockwise);
  ctx.fillStyle = "#888";
  ctx.fill(path)

  var path = new Path2D;
  var rad = sizeMoon/8;
  var startAngle = 0;
  var endAngle = 3.6 * Math.PI;// 360 degrees
  var isAnticlockwise = false;// don't go anti clockwise
  path.arc(x-160, y-250, rad, startAngle, endAngle, isAnticlockwise);
  ctx.fillStyle = "#888";
  ctx.fill(path)


  var path = new Path2D;
  var rad = sizeMoon/9;
  var startAngle = 0;
  var endAngle = 3.6 * Math.PI;// 360 degrees
  var isAnticlockwise = false;// don't go anti clockwise
  path.arc(x-190, y-280, rad, startAngle, endAngle, isAnticlockwise);
  ctx.fillStyle = "#888";
  ctx.fill(path)

  var path = new Path2D;
  var rad = sizeMoon/10;
  var startAngle = 0;
  var endAngle = 1.2 * Math.PI;// 360 degrees
  var isAnticlockwise = false;// don't go anti clockwise
  path.arc(x-200, y-200, rad, startAngle, endAngle, isAnticlockwise);
  ctx.fillStyle = "#888";
  ctx.fill(path)


}
function showCoordinates(ctx){
  ctx.font = "12px Arial";
  ctx.fillStyle="#eee"
  ctx.fillText(`To??? ????? X : ${mousepointX}`, width-100, 15);
  ctx.fillText(`To??? ????? Y : ${mousepointY}`, width-100, 30);
}



function drawFlag(ctx,){
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


function drawLand(ctx){
  ctx.fillStyle = "#BB5335";
  // stick 
  ctx.fillRect(0,height-100, width/2,1)

  // canvas flag
  ctx.fillRect(width/2, height-129,1,30)

  // star
  ctx.beginPath();
  ctx.moveTo(width/2, height-129)
  ctx.lineTo(width/2 +30, height-129+30)
  ctx.stroke()
  ctx.strokeStyle = "#BB5335"
  ctx.fillStyle = "#BB5335";

  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(width/2 +30, height-129+30)
  ctx.lineTo(width/2 +60, height-150-60)
  ctx.stroke()
  ctx.strokeStyle = "#BB5335"
  ctx.fillStyle = "#BB5335";

  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(width/2 +120, height-129+120)
  ctx.lineTo(width/2 +60, height-150-60)
  ctx.stroke()
  ctx.strokeStyle = "#BB5335"
  ctx.fillStyle = "#BB5335";

  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(width/2 +120,  height-129+120)
  ctx.lineTo(width/2 +160, height-250)
  ctx.stroke()
  ctx.strokeStyle = "#BB5335"
  ctx.fillStyle = "#BB5335";
  ctx.fill();
  ctx.fillRect(width/2 +160,height-250,300,1)


}

function drawText(ctx,){
  ctx.font = "15px Arial";
  ctx.fillStyle="#eee"
  ctx.fillText("Vietnam to the Mars", 10, 20);
}


function drawRocket(ctx,x,y,size){
  ctx.fillStyle = "#eee";
  var path = new Path2D;
  var rad = size/1.2;
  var startAngle = 0;
  var endAngle = 1 * Math.PI;// 360 degrees
  var isAnticlockwise = false;// don't go anti clockwise
  path.arc(x, y, rad, startAngle, endAngle, isAnticlockwise);
  ctx.fill(path)
  // draw top rocket
  ctx.beginPath();
  ctx.moveTo(40+x-40, 65+y-90);
  ctx.lineTo(65+x-40, 90+y-90);
  ctx.lineTo(15+x-40, 90+y-90);
  ctx.fill();
  // draw foot rocket
  ctx.rect(x-11, y, 22, 50);
  ctx.rect(x-20, y+50, 40, 5);
  ctx.fill();
  // draw fire 

  
}
function showFireRocket(ctx){
  ctx.strokeStyle="red"
  ctx.fillStyle="red"
  ctx.beginPath()
  ctx.moveTo(40+ballX-30, 10+ballY+40)
  ctx.lineTo(40+ballX-50, 10+ballY+40)
  ctx.lineTo(40+ballX-40, 10+ballY+80)
  ctx.fill()
}
function updateBall(){

  ballY += ballYSpeed;
  if (ballY < 300) {
    ballYSpeed *= -1;
    showFire=false
  }
  else if(ballY > height-155){
    ballYSpeed *= -1;
    showFire=true

  }
}

