/* jshint esversion:6 */
Button.prototype.show = function() {
  const button = this;

  button.group
    .attr("display","block");

  return button;
}
