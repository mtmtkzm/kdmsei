
/* Triangle Animation
***** */

// 描画範囲
var canvas = document.getElementById('js-triangles');

// 三角形DOMを生成
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
    triangle.style.top = Math.random()*100 + 'vh';
    triangle.style.left = Math.random()*100 + 'vw';
    triangle.style.animationDuration = Math.random()*10000 + 8000 + 'ms';
    canvas.appendChild(triangle);
  }
}
createTriangle();


