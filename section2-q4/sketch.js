// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  // noStroke();
  background(255);

noStroke();

  let d = height / 9; // 縞1本の太さ
  for(let i = 0; i < 9; i++){
    if (i  % 2 === 0) {
      fill(blue);
    }
    if (i  % 2 === 1) {
      fill(255);
    }
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, (i + 1) * d); 
    //縞の四角形の四隅の値(左のx座標、上のy座標、幅、高さ)
  }
noStroke();

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(d * 2, 0, d, size);

  fill(255);
  rect(0, d * 2, size, d);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
