let _height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let _width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let _block_height = Math.round(_height / 9);
let _block_width = Math.ceil(_width / 16);
let _animation_delay = 1;
let _blocks = "<div id='unfold-block'><st" + "yle> .unfold-box{ width:" + _block_width + "px;" + "height:" + _block_height + "px; } </st" + "yle>";
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 15; j++) {
    _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;'></div>"
    _animation_delay += 0.03;
  }
  _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;width:"+ ( _width - (_block_width * 15)) + "px;'></div>";
  _animation_delay += 0.03;
}


_blocks += "<div id='loader'><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span>...<span></span></div></div>";
document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', _blocks);
document.getElementsByTagName("body")[0].style.overflow = "hidden";
setTimeout(function() {

  let _blocksDOM = document.querySelectorAll(".unfold-box");
  for (let k = 0; k < _blocksDOM.length; k++) {
    let block = _blocksDOM[k];
    block.classList.add("clear");
  }
  document.getElementById("unfold-block").classList.add("clear");
}, 2000);

setTimeout(function() {
  document.getElementById('loader').classList.add('clear');
}, 4000);

setTimeout(function() {
  document.getElementById("unfold-block").remove();
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}, 7000);
