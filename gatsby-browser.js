exports.onClientEntry = () => {
  const smoothscroll = require('smoothscroll-polyfill');
  smoothscroll.polyfill();
};
