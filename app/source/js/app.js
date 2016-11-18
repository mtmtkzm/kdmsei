/* Triangle Animation
***** */

// 描画範囲
var canvas = document.getElementById('js-triangles');
// 三角形オブジェクトを管理する配列
var triangles = [];

function createTriangle() {
  var amount = window.innerWidth * window.innerHeight / 55000; // 面積によって
  var triangleColors = ['#2139B3', '#7B84B3', '#5D71D2', '#4558B3', '#152573'];
  if(amount > 9) {
    amount = 9;
  }
  for (var i=0; i<amount; i++) {
    var triangle = document.createElement('span');
    triangle.classList.add('js-triangle', 'icon', 'icon-triangle');
    triangle.style.color = triangleColors[ Math.floor( Math.random()*triangleColors.length ) ];
    triangle.style.bottom = Math.random()*100 + '%';
    triangle.style.left = Math.random()*100 + '%';
    triangle.style.animationDuration = Math.random()*8000 + 12000 + 'ms';
    triangles.push(triangle); // 配列で三角形objを管理

    canvas.appendChild(triangle); // ブラウザ上に描画
    triangle.style.opacity = '.75';
  }
}

function moveTriangle(i) {
  var target = triangles[i];
  var parsedBottom = parseFloat(target.style.bottom, 10);
  var parsedLeft = parseFloat(target.style.left, 10);
  var speed = {
    x: Math.floor( Math.random()*2 - 1 ),
    y: Math.floor( Math.random()*2 - 1 )
  };
  setInterval(function() {
    parsedBottom += speed.x;
    parsedLeft += speed.y;
    target.style.bottom = parsedBottom + '%';
    target.style.left = parsedLeft + '%';

    if (parsedBottom > 100 || parsedBottom < 0) speed.x = -speed.x;
    if (parsedLeft > 100 || parsedLeft < 0) speed.y = -speed.y;

  }, 250);
}

// 三角形のDOMを生成する
createTriangle();
// 三角形がゆらゆら移動するアニメーション
for (var i=0; i<triangles.length; i++) { moveTriangle(i); }
