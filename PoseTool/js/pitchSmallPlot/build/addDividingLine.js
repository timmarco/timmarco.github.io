/* jshint esversion:6 */
PitchSmallPlot.prototype.addDividingLine = function() {
  const plot = this;

  let line = plot.svg
    .append("line")
    .attr("x1",plot.layout.dividingLine.x1)
    .attr("x2",plot.layout.dividingLine.x2)
    .attr("y1",plot.layout.dividingLine.y1)
    .attr("y2",plot.layout.dividingLine.y2)
    .attr("stroke","#aaa");

  return line;
}
