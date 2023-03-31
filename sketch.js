
//利用畫線與座標點產生一個圖

//https://www.pinterest.com/pin/651403533623990660/visual-search/?x=16&y=10&w=538&h=415&cropSource=6&imageSignature=340de3598ff8dcf12c00fd0477a701b7  //蝙蝠座標參考網址

let points = [[3, 3], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]]; //蝙蝠座標

function setup() {   //只會執行一次
  createCanvas(windowWidth, windowHeight); //設定畫面為整個視窗的寬度與高度
  
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] *20;
    }
  }
}
//把points 內的值都*20

function draw() {
  background(255);
  //scale(50)
  strokeWeight(5); //線的粗細
  translate(width/2, height/2); //原點從左上角移到視窗中心
  scale(1, -1);  //上下翻轉
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
}


![](https://i.imgur.com/YAxKYFZ.png)









//線條採用兩個顏色漸層呈現

let points = [[3, 3], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] *20;
    }
  }
}

function draw() {
  background(255);
  translate(width/2, height/2);
  scale(1, -1);
	strokeWeight(5);

  // 設定漸層顏色
  let c1 = color("#0fa3b1"); // 綠色
  let c2 = color("#ffd500"); // 黃色
  
  for (let i = 0; i < points.length-1; i++) {
    // 計算漸層中間色
    let t = map(i, 0, points.length-2, 0, 1);
    let c = lerpColor(c1, c2, t);
    stroke(c); // 設定畫筆顏色為漸層色
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  // 最後一點與第一點的連線
  let t = map(points.length-2, 0, points.length-2, 0, 1);
  let c = lerpColor(c1, c2, t);
  stroke(c);
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
}


![](https://i.imgur.com/OCzJhIa.png) 









//產生一個函數，純粹顯示漸層線條的圖片

function setup() {  //整個程式碼執行的開始，只會執行一次
  createCanvas(windowWidth,windowHeight ); //設定整個視窗為一個
}

function draw() { //每秒會近來執行60次，所以會重複執行
 // background(220); //畫布產生一個背景，0(黑)-225(白)
 // background(255,0,0) //RGB 紅(255)，綠(0)，藍(0)
 // background('#ffe5ec') //RGB，顏色的值為十六進位
  colorMode(HSB) 
  s = map(mouseX,0,width,0,100) 
  b = map(mouseY,0,height,0,100)
  fill(0,s,b) //60色相(黃色)，100:飽和度，100:亮度
  for(i=0;i<width;i=i+5){ //一個迴圈,i=0開始， 第二圈50，第三圈100
    h = map(i,0,width,0,60) //h=色相 
    //b = map(i,0,s,0,100)
    fill(h,100,100)
   noStroke() //不要框線
    ellipse(i,height/2,50) //產生一個圓，座標為(I,視窗高度的一半)

  }

}


![](https://i.imgur.com/VznlAc2.png) 










//產生有小到大的至少五層的圖
let points = [[3, 3], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]]; //蝙蝠座標

function setup() {   //只會執行一次
  createCanvas(windowWidth, windowHeight); //設定畫面為整個視窗的寬度與高度
  
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] *20;
    }
  }
}
//把points 內的值都*20

function draw() {
  background(255);
  translate(width/3, height/2);
  for (let i = 1; i <= 5; i++) { //繪製五個不同蝙蝠座標
    push(); // 儲存當前畫布狀態
    scale(i/6); // 設定縮放比例
    scale(1, -1);  //上下翻轉
    translate(-200 + 100*i, 0); // 設定位置
    strokeWeight(4); //線條粗細
    for (let j = 0; j < points.length-1; j++) {
      let from = color(100,300,150);
      let to = color(100,200,250);
      stroke(lerpColor(from, to, j/points.length));
      line(points[j][0], points[j][1], points[j+1][0], points[j+1][1]);
    }
    let from = color(255,153,153);
    let to = color(102,178,255);
    stroke(lerpColor(from, to, (points.length-1)/points.length));
    line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
    pop(); // 恢復畫布狀態
  }
}


![](https://i.imgur.com/LvxB5lh.png) 










//隨著滑鼠移動產生放大縮小的畫面
let points = [[3, 3], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]];
let polygon = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < points.length; i++) {
    let p = createVector(points[i][0], points[i][1]);
    p.mult(20);
    polygon.push(p);
  }
}

function draw() {
  background(255);
  translate(width/3, height/2);

  let mouseXpos = mouseX - width/3; // 計算滑鼠位置相對於多邊形的x座標
  let mouseYpos = height/2 - mouseY; // 計算滑鼠位置相對於多邊形的y座標

  for (let i = 1; i <= 5; i++) {
    push();
    scale(i/6);
    scale(1, -1);
    translate(-200 + 100*i + mouseXpos, mouseYpos); // 設定位置
    strokeWeight(4);

    for (let j = 0; j < polygon.length-1; j++) {
      let from = color(100,300,150);
      let to = color(100,200,250);
      stroke(lerpColor(from, to, j/polygon.length));
      line(polygon[j].x, polygon[j].y, polygon[j+1].x, polygon[j+1].y);
    }
    pop();
  }
}


![](https://i.imgur.com/EhvcpiV.gif)










//加入文字顯示
let points = [[3, 3], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]];
let polygon = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < points.length; i++) {
    let p = createVector(points[i][0], points[i][1]);
    p.mult(20);
    polygon.push(p);
  }
}

function draw() {
  background(255);
  translate(width/3, height/2);

  let mouseXpos = mouseX - width/3; // 計算滑鼠位置相對於多邊形的x座標
  let mouseYpos = height/2 - mouseY; // 計算滑鼠位置相對於多邊形的y座標
	
	let scaleAmount = map(mouseXpos, -width/3, width/3, 0.5, 2); // 計算放大縮小倍率，依據滑鼠位置
  let flipY = mouseYpos < 0 ? -1 : 1; // 如果滑鼠位置在多邊形的上方，就將Y軸方向反轉
  
   for (let i = 1; i <= 5; i++) {
    push();
    scale(i/6);
    scale(1, -1);
		 
    translate(-200 + 100*i + mouseXpos, mouseYpos); // 設定位置
    strokeWeight(4);
		 
    for (let j = 0; j < polygon.length-1; j++) {
      let from = color(100,300,150);
      let to = color(100,200,250);
      stroke(lerpColor(from, to, j/polygon.length));
      line(polygon[j].x, polygon[j].y, polygon[j+1].x, polygon[j+1].y);
    }
    pop();
  }
	push
	scale(scaleAmount);  //上下翻轉
	textSize(10)  //文字大小
  fill(400, 100, 100);  //設定顏色
  text("Ｈarry Potter",10,10)  //顯示文字
	pop();
}


![](https://i.imgur.com/Wca1X4d.gif)

