/* jshint esversion:6 */
Button.prototype.hide = function() {
  const button = this;

  button.group
    .attr("display","none");

  return button;
}
