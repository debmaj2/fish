function Menu(gameState) {
  this.gameState = gameState;
  this.buttons = [];
  var w = width * 0.3;
  var h = 50;
  var x = width / 2 - w / 2;
  var y = height / 2 - h / 2;
  var playButton = new MenuButton(x, y, w, h);
  playButton.setText("Play Game");
  playButton.setClickHandler(() => {
    gameState.setState(new Game());
  });
  this.buttons.push(playButton);
}
Menu.prototype.draw = function() {
  for (var i = 0; i < this.buttons.length; i++) {
    this.buttons[i].draw();
  }
};

Menu.prototype.mouseClicked = function(mX, mY) {
  for (var i = 0; i < this.buttons.length; i++) {
    if (wasButtonClicked(this.buttons[i], mX, mY)) {
      this.buttons[i].click();
    }
  }
};

var wasButtonClicked = function(button, mX, mY) {
  return collidePointRect(mX, mY, button.x, button.y, button.w, button.h);
};
