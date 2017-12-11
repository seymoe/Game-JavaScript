// 砖块
var Block = function () {
  var image =loadImageByPath('images/block.png')
  var o = {
    image: image,
    x: 10,
    y: 50,
    imageW: image.width,
    imageH: image.height,
    alive: true,
  }

  // 杀死
  o.kill = function () {
    o.alive = false
  }
  // 相撞
  o.collide = function (b) {
    return o.alive && rectIntersect(o, b) || rectIntersect(b, o)
  }

  return o
}