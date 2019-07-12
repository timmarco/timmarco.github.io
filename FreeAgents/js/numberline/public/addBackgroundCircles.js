/* jshint esversion:6 */
Numberline.prototype.addBackgroundCircles = function(dataset) {
  const chart = this;

  let selection;

  chart.setBackgroundCircleMouseover();
  chart.setBackgroundCircleMouseout();


  selection = chart.layers.baseData
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cursor","pointer")
    .attr("cx",function(d) { return chart.scale(d.value); })
    .attr("cy",chart.referencePoints.midline)
    .attr("r",chart.styles.inactiveCircleRadius)
    .attr("fill",chart.styles.inactiveCircleFill)
    .attr("stroke",chart.styles.inactiveCircleStroke)
    .attr("stroke-width",chart.styles.inactiveCircleStrokeWidth)
    .attr("opacity",chart.styles.inactiveCircleOpacity)
    .on('mouseover',chart.handleBackgroundCircleMouseover);


  return selection;
};
