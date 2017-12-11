var XiGame = function () {
  var g = {
    actions: {},
    keydowns: {},
    fps: 50
  }

  var canvas = document.querySelector("#BlockBreaker")
  var context = canvas.getContext('2d')

  g.canvas = canvas
  g.context =context

  // update
  g.update = function () {}

  // clear
  g.clear = function () {
    context.clearRect(0, 0, canvas.width, canvas.height)
  }
  g.drawImage = function (img) {
    context.drawImage(img.image, img.x, img.y, img.imageW, img.imageH)
  }

  // draw
  g.draw = function () {}

  // events
  window.addEventListener('keydown', function (event) {
    g.keydowns[event.key] = true
  })
  window.addEventListener('keyup', function (event) {
    g.keydowns[event.key] = false
  })

  g.registerAction = function (key, callback) {
    g.actions[key] = callback
  }

  // timer
  setInterval(function () {
    var actions = Object.keys(g.actions)
    actions.forEach(function (item) {
      if (g.keydowns[item]) {
        g.actions[item]()
      }
    })

    // update
    g.update()
    // clear
    g.clear()
    // draw
    g.draw()
  }, 1000 / g.fps)

  return g
}