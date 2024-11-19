// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255); // = (255,255,255) = 白
  stroke(255); // 線の色
  strokeWeight(3); //線の太さ

  const cx = width / 2; // 中心は (cx, cy) 中心は横幅の半分、縦幅の半分の位置
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  drawCircle(black, maxR);
  drawArcs(green, red, maxR * 0.8);
  drawArcs(cream, black, maxR * 0.75);
  drawArcs(green, red, maxR * 0.5);
  drawArcs(cream, black, maxR * 0.45);
  drawCircle(green, maxR * 0.1);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawCircle(red, maxR * 0.05);
}

function drawCircle(c, r){
  const cx = width / 2;
  const cy = height / 2;
 fill(c); //cで指定された色で塗る
 ellipse(cx, cy, r, r); // 中心が(cx, cy), 半径がrの円を描く
}

function drawArcs(c1, c2, r) {
const cx = width / 2;
const cy = height / 2;
 for (let i = 0; i < 20; i++) {
   let start = TWO_PI / 20 * i;
   let stop = TWO_PI / 20 * (i + 1);
   fill(i % 2 == 0 ? c1 : c2);
   arc(cx, cy, r, r, start, stop, PIE);
 }
}
