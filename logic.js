var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() {
  if (keydown.left) {
    player.x -= 2;
  }

  if (keydown.right) {
    player.x += 2;
  }
}