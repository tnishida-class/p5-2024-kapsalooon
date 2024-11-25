// 最終課題を制作しよう

let balls;
let stars;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  stars = [];
}

function draw(){
  background(0);

  for(let i = 0; i < stars.length; i++){
    let s = stars[i];
    drawStar(s.x, s.y, s.size, s.color);

    s.x += s.vx;
    s.y += s.vy;
  }

  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    drawSmile(b.x, b.y, b.size, b.color);
    
    b.x += b.vx;
    b.y += b.vy;
    
  }


  const bx = random(0, windowWidth);
  const by = random(0, windowHeight);
  const bdx = random(-10, 10);
  const bdy = random(-10, 10);
  const br = random(20, 100);
  const bcolor = [random(255), random(255), random(255)];
  if(mag(bdx, bdy) > 5){
    balls.push({ x:bx, y:by, size:br, vx: bdx, vy: bdy, color:bcolor});
  }

  const sx = random(0, windowWidth);
  const sy = random(0, windowHeight);
  const sdx = random(-10, 10);
  const sdy = random(-10, 10);
  const sr = random(10, 50);
  const scolor = [random(255), random(255), random(255)];
  if (mag(sdx, sdy) > 5) {
    stars.push({ x:sx, y:sy, size: sr, vx: sdx, vy: sdy, color:scolor});
  } 
}


function drawSmile(x, y, size, color){
  fill(color[0], color[1], color[2]);
  noStroke()
  ellipse(x, y, size);

  fill(0);
  ellipse(x - size * 0.2, y - size * 0.2, size * 0.1)
  ellipse(x + size * 0.2, y - size * 0.2, size * 0.1)

  noFill()
  stroke(0)
  strokeWeight(size * 0.05)
  arc(x, y + size * 0.1, size * 0.5, size * 0.4, 0, PI)
}

function drawStar(x, y, size, color){
  fill(color[0], color[1], color[2]);
  noStroke()
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const sx = x + cos(theta) * size;
    const sy = y + sin(theta) * size;
    vertex(sx, sy);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
