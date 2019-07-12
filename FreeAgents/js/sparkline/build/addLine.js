/* jshint esversion:6 */
Sparkline.prototype.addLine = function() {
  const spark = this;

  let sparkData = [];

  [spark.data][0].forEach((datum,index) => {
    if(datum !== "") {
      sparkData.push({"index":index,"datum":datum});
    }
  });

  let area = spark.svg
    .append("path")
    .datum(sparkData)
    .attr("stroke",spark.styles.lineStroke)
    .attr("stroke-width",spark.styles.lineStrokeWidth)
    .attr("fill",spark.styles.areaFill)
    .attr("d",spark.areaGenerator);


  return area;
};
