/* jshint esversion:6 */
Modeler.prototype.addWinChartGroup = function() {
  const modeler = this;

  let group = modeler.layers.rightPane
    .append("g")
    .attr("transform","translate(550,255)")
    .attr("display","none");

  return group;
}
