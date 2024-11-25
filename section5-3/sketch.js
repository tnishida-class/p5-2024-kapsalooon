// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0); 
  // 4で割り切れて100では割り切れない or 400で割り切れる　％＝割った時の余り　&&=どちらも満たす　||=または
}

function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;
  // BLANK[1]
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  // (y)? 29 : 28 = yがtrueの場合には29, falseの場合には28
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  const BASE_YEAR = 1970;
  let days = 0;

  // 基準年から前年までの日数を足す
  for (let i = BASE_YEAR; i < y; i++) {
    days += daysInYear(i);
  }
  // 基準年より前の年の場合
  for (let i = BASE_YEAR - 1; i >= y; i--) {
    days -= daysInYear(i);
  }

  // その年の1月1日から指定日までの日数を足す
  days += dayOfYear(y, m, d) - 1;

  // 曜日を計算（1970年1月1日は木曜日=4）
  return (4 + days % 7 + 7) % 7;
}
  // BLANK[2]


function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
