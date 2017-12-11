// 球
var Ball = function () {
  var image =loadImageByPath('images/ball.png')
  var o = {
    image: image,
    x: 200,
    y: 300,
    imageW: image.width,
    imageH: image.height,
    speedX: 5,
    speedY: 5,
    fired: false,
  }
  // 发射
  o.fire = function () {
    o.fired = true
  }
  // 移动
  o.move = function (cvs) {
    if (o.fired) {
      if (o.x < 0 || o.x + o.imageW > cvs.width) {
        o.speedX *= -1
      }
      if (o.y < 0 || o.y + o.imageH > cvs.height) {
        o.speedY *= -1
      }

      // move
      o.x += o.speedX
      o.y += o.speedY
    }
  }
  // 反弹
  o.rebound = function () {
    o.speedY *= -1
  }

  return o
}