class SceneTitle extends GaiaScene {
  constructor(game) {
      super(game)
      game.registerAction('k', function(){
          var s = Scene(game)
          game.replaceScene(s)
      })
  }
  draw() {
      // draw labels
      var ctx = this.game.context
      var g = this.game
      var menubg = g.imageByName('menubg')
      menubg.x = 0
      menubg.y = 0
      
      log(g.imageByName('menubg'))
      g.drawImage(menubg)
    //   ctx.fillText('按 k 开始游戏', 100, 190)
  }
}