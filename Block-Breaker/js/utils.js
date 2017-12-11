var log = console.log.bind(console)

// 根据路劲加载图片
var loadImageByPath = function (path) {
  var img = new Image()
  img.src = path
  return img
}
// 碰撞检测
var rectIntersect = function (a, b) {
  if (a.x > b.x + b.imageW || b.x > a.x + a.imageW || a.y > b.y + b.imageH || b.y > a.y + a.imageH) {
    return false
  } else {
    return true
  }
}