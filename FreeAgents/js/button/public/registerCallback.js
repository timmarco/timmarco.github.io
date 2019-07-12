/* jshint esversion:6 */
Button.prototype.registerCallback = function(callback) {
  const button = this;

  button.callback = callback;

  return button;
};
