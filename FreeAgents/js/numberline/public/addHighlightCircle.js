/* jshint esversion:6 */
Numberline.prototype.addHighlightCircle = function() {
  const chart = this;

  let circle;

  circle = chart.layers.highlightData
    .append("circle")
    .attr("r",chart.styles.inactiveCircleRadius)
    .attr("cy",chart.referencePoints.midline)
    .attr("fill",chart.styles.activeCircleFill)
    .attr("stroke",chart.styles.highlightCircleStroke)
    .attr("stroke-width",chart.styles.highlightCircleStrokeWidth)
    .attr("opacity",chart.styles.highlightStrokeOpacity)
    .attr("cursor","pointer")
    .style("display","none")
    .on('mouseout',chart.handleBackgroundCircleMouseout)
    .on('mouseout',chart.handleBackgroundCircleMouseout)
    .on('mousemove',function() {
      chart.tooltip
        .move();
    });

  return circle;
};
