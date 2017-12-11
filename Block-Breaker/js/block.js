// 砖块
var Block = function (position) {
  // position的格式为[0,0]
  var p = position
  var image =loadImageByPath('images/block.png')
  var o = {
    image: image,
    x: p[0],
    y: p[1],
    imageW: image.width,
    imageH: image.height,
    alive: true,
    lifes: p[2] || 1,
  }

  // 杀死
  o.kill = function () {
    o.lifes--
    if (o.lifes < 1) {
      o.alive = false
    }
  }
  // 相撞
  o.collide = function (b) {
    return o.alive && rectIntersect(o, b) || rectIntersect(b, o)
  }

  return o
}