/* jshint esversion: 6*/
Button.prototype.mouseclick = function() {
  const button = this;

  button.callback();

  return button;
};
