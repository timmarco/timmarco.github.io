/* jshint esversion:6 */
Modeler.prototype.addSalaryChartGroup = function() {
  const modeler = this;

  let group = modeler.layers.rightPane
    .append("g")
    .attr("transform","translate(545,225)");

  return group;
};
