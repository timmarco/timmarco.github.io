/* jshint esversion:6 */
Numberline.prototype.addBottomLine = function() {
  const chart = this;

  let bottomLine = chart.layers.base
    .append("line")
    .attr("stroke","#999")
    .attr("stroke-width",1)
    .attr("stroke-dasharray","1,3")
    .attr("x1",0)
    .attr("x2",chart.size.width)
    .attr("y1",chart.size.height - chart.margins.bottom)
    .attr("y2",chart.size.height - chart.margins.bottom);

  return bottomLine;
}
