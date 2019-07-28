/* jshint esversion:6 */
BrushBox.prototype.addEdgeIndicators = function() {
  const box = this;

  let indicators = {};

  indicators.left = box.layers.hints
    .append("line")
    .attr("x1",0)
    .attr("x2",0)
    .attr("y1",0)
    .attr("y2",box.size.height)
    .attr("stroke",box.styles.edgeIndicators.stroke)
    .attr("stroke-width",0);

  indicators.top = box.layers.hints
    .append("line")
    .attr("x1",0)
    .attr("x2",box.size.width)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",box.styles.edgeIndicators.stroke)
    .attr("stroke-width",0);

  indicators.right = box.layers.hints
    .append("line")
    .attr("x1",box.size.width)
    .attr("x2",box.size.width)
    .attr("y1",0)
    .attr("y2",box.size.height)
    .attr("stroke",box.styles.edgeIndicators.stroke)
    .attr("stroke-width",0);

  indicators.bottom = box.layers.hints
    .append("line")
    .attr("x1",0)
    .attr("x2",box.size.width)
    .attr("y1",box.size.height)
    .attr("y2",box.size.height)
    .attr("stroke",box.styles.edgeIndicators.stroke)
    .attr("stroke-width",0);


  return indicators;
}
