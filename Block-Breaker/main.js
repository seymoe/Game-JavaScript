var loadLevel = function(game, n) {
  n = n - 1
  var level = levels[n]
  var blocks = []
  for (var i = 0; i < level.length; i++) {
      var p = level[i]
      var b = Block(game, p)
      blocks.push(b)
  }
  return blocks
}

var enableDebugMode = function(game, enable) {
  if(!enable) {
      return
  }
  window.paused = false
  window.addEventListener('keydown', function(event){
      var k = event.key
      if (k == 'p') {
          // 暂停功能
          window.paused = !window.paused
      } else if ('1234567'.includes(k)) {
          // 为了 debug 临时加的载入关卡功能
          blocks = loadLevel(game, Number(k))
      }
  })
}

var __main = function() {
  var images = {
      ball: 'images/ball.png',
      block: 'images/block.png',
      paddle: 'images/paddle.png',
  }
  var game = GaiaGame.instance(30, images, function(g){
      var s = SceneTitle.new(g)
      g.runWithScene(s)
  })

  enableDebugMode(game, true)
}

window.onload = function () {
  __main()
}