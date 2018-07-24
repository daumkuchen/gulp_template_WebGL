// const TweenMax = require('gsap');
const WebGL = require('./WebGL').default;

(() => {

  // ===== var
  let webgl = new WebGL;

  // ===== init
  let init = () => {
    webgl.render();
  }

  init();

})();
