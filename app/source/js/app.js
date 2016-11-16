// Triangle Animation
var canvas = document.getElementById('js-triangles');

// DOM生成
function createTriangle() {
  var amount = window.innerWidth * window.innerHeight / 150000; // 面積によって

  for (var i=0; i<amount; i++) {
    var triangle = document.createElement('span');
    triangle.classList.add('js-triangle', 'icon', 'icon-triangle');
    triangle.style.color = '#7B84B3'; // '#5D71D2'; // ベースの青
    triangle.style.top = Math.random()*100 + 'vh';
    triangle.style.left = Math.random()*100 + 'vw';
    canvas.appendChild(triangle);
  }
}

// 生成
createTriangle();

