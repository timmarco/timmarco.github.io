/* jshint esversion:6 */
WinChart.prototype.addYearHighlight = function() {
  const chart = this;

  let highlightGroup = chart.layers.circles
    .append("g")
    .attr("opacity",0)
    .attr("display","none")
    .attr("transform","translate("+chart.referencePoints.xMin+","+chart.referencePoints.yMin+")")

  highlightGroup
    .append("text")
    .attr("x",-6)
    .attr("y",0)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("text-anchor","end")
    .attr("stroke",chart.styles.highlightYearStroke)
    .attr("stroke-width",chart.styles.highlightYearStrokeWidth)
    .text("2019");

  highlightGroup
    .append("text")
    .attr("x",-6)
    .attr("y",0)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("text-anchor","end")
    .attr("fill",chart.styles.highlightYearFill)
    .text("2019");

  return highlightGroup;
}
