var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var background = document.getElementById("background");
c.width = window.innerWidth;
c.height = window.innerHeight;
function animate(){
  ctx.drawImage(background, 0, 0, c.width, c.height);
  player.update();
  player.render();
  window.requestAnimationFrame(animate);
}

animate();
