/* jshint esversion:6 */
Modeler.prototype.addRightPane = function() {
  const modeler = this;

  let pane = modeler.layers.rightPane
    .append("g")
    .attr("display","none");

  pane
    .append("rect")
    .attr("x",modeler.referencePoints.rightPaneCoordinates.x)
    .attr("y",modeler.referencePoints.rightPaneCoordinates.y)
    .attr("width",modeler.referencePoints.rightPaneSize.width)
    .attr("height",modeler.referencePoints.rightPaneSize.height)
    .attr("fill","white");

  return pane;
};
