/* Triangle Animation
***** */

// 描画範囲
var canvas = document.getElementById('js-triangles');
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

// 三角形オブジェクトを管理する配列
var triangles = [];

function createTriangle() {
  var amount = window.innerWidth * window.innerHeight / 80000; // 面積によって
  var triangleColors = ['#2139B3', '#7B84B3', '#5D71D2', '#4558B3', '#152573'];
  if(amount > 9) {
    amount = 9;
  }
  for (var i=0; i<amount; i++) {
    var triangle = document.createElement('span');
    triangle.classList.add('js-triangle', 'icon', 'icon-triangle');
    triangle.style.color = triangleColors[ Math.floor( Math.random()*triangleColors.length ) ];
    triangle.style.top = Math.random()*100 + '%';
    triangle.style.left = Math.random()*100 + '%';
    triangle.style.animationDuration = Math.random()*8000 + 12000 + 'ms';
    canvas.appendChild(triangle); // ブラウザ上に描画
    triangles.push(triangle); // 配列で三角形objを管理
  }
}

function moveTriangle(i) {
  var target = triangles[i];
  var parsedTop = parseFloat(target.style.top, 10);
  var parsedLeft = parseFloat(target.style.left, 10);
  var speed = {
    x: Math.floor( Math.random()*4 - 2 ),
    y: Math.floor( Math.random()*3 - 1 )
  };
  setInterval(function() {
    parsedTop += speed.x;
    parsedLeft += speed.y;
    target.style.top = parsedTop + '%';
    target.style.left = parsedLeft + '%';

    if (parsedTop > 100 || parsedTop < -10) speed.x = -speed.x;
    if (parsedLeft > 100 || parsedLeft < -10) speed.y = -speed.y;

  }, 1000);
}

// 三角形のDOMを生成する
createTriangle();
// 三角形がゆらゆら移動するアニメーション


for (var i=0; i<triangles.length; i++) {
  moveTriangle(i);
}
