/* jshint esversion:6 */
Sparkline.prototype.addCircles = function() {
  const spark = this;

  let circles;

  let sparkData = [];

  [spark.data][0].forEach((datum,index) => {
    if(datum !== "") {
      sparkData.push({"index":index,"datum":datum});
    }
  });


  circles = spark.svg
    .selectAll("circle")
    .data(sparkData)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return spark.scales.x(d.index); })
    .attr("cy",(d) => { return spark.scales.y(+d.datum); })
    .attr("r",spark.styles.circleRadius)
    .attr("fill",spark.styles.circleFill);

  return circles;
};
