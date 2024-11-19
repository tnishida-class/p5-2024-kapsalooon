// 小手調べ
function setup(){
  createCanvas(120, 120);
  background(255);
  noFill();
  let d;
  for(let i = 0; i < 10; i++){
    d = (i+1) * 10;
    if(i<5){
      stroke(0,0,255);
    }else{
      stroke(255,0,0);
    }
    ellipse(width/2, height/2, d,d);
  }
}
