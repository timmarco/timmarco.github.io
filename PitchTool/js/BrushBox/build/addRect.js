/* jshint esversion:6 */
BrushBox.prototype.addRect = function() {
  const box = this;

  let rect = box.layers.rect
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",box.size.width)
    .attr("height",box.size.height)
    .attr("fill",box.styles.defaultRect.fill)
    .attr("stroke",box.styles.defaultRect.stroke)
    .attr("stroke-width",box.styles.defaultRect.strokeWidth)
    .attr("stroke-dasharray",box.styles.defaultRect.strokeDashArray)
    .on('mouseover',box.rectMouseover())
    .on('mouseout',box.rectMouseout());


  return rect;
}
