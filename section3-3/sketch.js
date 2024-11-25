// テキスト「キーボード操作に反応する」
let x, y;
const g = 1;
const jump = 20;
let vy; 

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = windowHeight - 25;
  vy = 0;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(OPTION) && keyIsDown(LEFT_ARROW)){ x -= 10; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(OPTION) && keyIsDown(RIGHT_ARROW)){ x += 10; }

  y += vy;
  if(y < windowHeight - 25){ 
    vy += g; 
  }
  else{
    vy = 0;
    y = windowHeight - 25;
  }
}

function keyPressed(){
  if(key === ' ' && y >= windowHeight - 25){ // 地面にいるときだけジャンプできる（この条件をなくせば空中ジャンプが可能になります）
    vy = -jump;     
  }
}
// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
