var socket = io();
var sprite = document.getElementById('sprite');
sprite.style.top = 0; sprite.style.left = 0;

function moveSprite(dir){
  var top = sprite.style.top;
  var left = sprite.style.left;
  switch (dir) {
    case "a":
    sprite.style.transform = "rotate(90deg)";
      break;
    case "b":
    sprite.style.transform = "rotate(0deg)";
      break;
    case "up":
    sprite.style.top = (parseInt(top.slice(0, -2)) - 10) + 'px';
      break;
    case "down":
    sprite.style.top = (parseInt(top.slice(0, -2)) + 10) + 'px';
      break;
    case "left":
    sprite.style.left = (parseInt(left.slice(0, -2)) - 10) + 'px';
      break;
    case "right":
    sprite.style.left =  (parseInt(left.slice(0, -2)) + 10) + 'px';
      break;
    default: console.log("no switch");
  }
}

socket.on('pad input', function(msg){
  //$('main').append($('div').text(msg));
  console.log(msg, 'msgggggggg');
    moveSprite(msg);
});
