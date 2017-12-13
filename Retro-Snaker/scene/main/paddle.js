var Paddle = function(game) {
  var o = game.imageByName('paddle')
  o.x = 100
  o.y = 250
  o.speed = 15
  var paddle = o
  o.move = function(x) {
      if (x < 0) {
          x = 0
      }
      if (x > 400 - o.w) {
          x = 400 - o.w
      }
      o.x = x
  }
  o.moveLeft = function() {
      o.move(paddle.x - paddle.speed)
  }
  o.moveRight = function() {
      o.move(paddle.x + paddle.speed)
  }

  o.collide = function(b) {
    return rectIntersects(o, b) || rectIntersects(b, o)
  }
  return o
}