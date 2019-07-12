/* jshint esversion:6 */
Button.prototype.addRect = function() {
  const button = this;

  let rect = button.group
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height",button.size.height)
    .attr("width",button.size.width)
    .attr("fill",button.styles.backgroundColor)
    .attr("stroke",button.styles.stroke)
    .attr("strokeWidth",button.styles.strokeWidth);

  return rect;
}
