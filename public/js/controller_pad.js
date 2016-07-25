var socket = io();

function initPad(element, content){
  $(element).click(function(){
    socket.emit('pad input', content);
  });
};

(function(){
  initPad('.btn-up', 'up');
  initPad('.btn-down', 'down');
  initPad('.btn-left', 'left');
  initPad('.btn-right', 'right');
  initPad('.a-button', 'a');
  initPad('.b-button', 'b');
})();
