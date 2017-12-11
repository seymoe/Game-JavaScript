// 板子
var Paddle = function () {
  var image =loadImageByPath('images/paddle.png')
  var o = {
    image: image,
    x: 200,
    y: 360,
    imageW: image.width,
    imageH: image.height,
    speed: 15,
  }

  // 向左移动
  o.moveLeft = function () {
    o.x -= o.speed
    if (o.x < 0) {
      o.x = 0
    }
  }
  // 向右移动
  o.moveRight = function (cvs) {
    o.x += o.speed
    if (o.x + o.imageW > cvs.width) {
      o.x = cvs.width - o.imageW
    }
  }
  // 相撞
  o.collide = function (b) {
    return rectIntersect(o, b) || rectIntersect(b, o)
  }

  return o
}