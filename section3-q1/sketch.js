// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」S
let size = 50;
let count = 0;
let cycle = 100;
let increment = 1;
// count=アニメーションのフレーム、何コマ目か
// cycle=アニメーションが一周するまでのコマ数
// increment=コマの増加量を表す変数、increment=2だと早くコマが進む→早く増減する

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + increment) % cycle;
  // %=その式を割り算した時の余りを求める記号　cycle=100だから余りは99以下
  if (keyIsPressed) {
    increment = 2;
  } else {
    increment = 1;
  }
  if (count < cycle/2) {
    size = count + 50;
  } else {
    size = (cycle - count) + 50;
  }
  // countは0から99までの値を繰り返す
  ellipse(width / 2, height / 2, size);
}

