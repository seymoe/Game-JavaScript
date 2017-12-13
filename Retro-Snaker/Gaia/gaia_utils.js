var log = console.log.bind(console)

// 根据路劲加载图片
var loadImageByPath = function (path) {
  var img = new Image()
  img.src = path
  return img
}
// 碰撞检测
var rectIntersects = function (a, b) {
  if (a.x > b.x + b.w || b.x > a.x + a.w || a.y > b.y + b.h || b.y > a.y + a.h) {
    return false
  } else {
    return true
  }
}