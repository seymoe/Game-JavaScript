class GaiaScene {
  constructor(game) {
      this.game = game
      this.init()
  }
  static new(game) {
      var i = new this(game)
      return i
  }
  // 设定画布尺寸
  setPlaygroundSize() {
    var g = this.game
    var doc = document.documentElement
    this.width = g.canvas.width = doc.clientWidth
    this.height = g.canvas.height = doc.clientHeight
  }
  draw() {

  }
  update() {

  }

  init() {
    this.setPlaygroundSize()
  }
}