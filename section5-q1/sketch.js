// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう

function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
  
}

let x = 40
let y = 40


function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  let balloonColor = color(0, 100, 100);
  fill(balloonColor);
  let cornerRadius = 10
  noStroke();
  rect(x-10, y-10, w + p * 2 + 20, h + p * 2 + 20, cornerRadius);
  triangle(x, y + h + p * 2 + 10, x, y + h + p * 2 + 30, x + 20, y + h + p * 2 + 10)
  fill(255);
  text(t, x + p, y + h + p);
  
}