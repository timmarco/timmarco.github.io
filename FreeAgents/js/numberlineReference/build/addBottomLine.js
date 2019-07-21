/* jshint esversion:6 */
NumberlineReference.prototype.addBottomLine = function() {
  const chart = this;
  let line;

  line = chart.svg
    .append("line")
    .attr("x1",0)
    .attr("x2",500)
    .attr("y1",19)
    .attr("y2",19)
    .attr("stroke","#aaa")
    .attr("stroke-dasharray","1,3")

  return line;
};
