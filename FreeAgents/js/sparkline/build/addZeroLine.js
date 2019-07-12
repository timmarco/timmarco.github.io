/* jshint esversion:6 */
Sparkline.prototype.addZeroLine = function() {
  const spark = this;

  let line;
  line = spark.svg
    .append("line")
    .attr("x1",spark.referencePoints.xMin)
    .attr("x2",spark.referencePoints.xMax)
    .attr("y1",spark.scales.y(0))
    .attr("y2",spark.scales.y(0))
    .attr("stroke",spark.styles.zeroLineStroke)
    .attr("stroke-width",spark.styles.zeroLineStrokWidth);

  return line;
};
