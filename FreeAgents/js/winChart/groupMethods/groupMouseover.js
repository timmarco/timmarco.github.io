/* jshint esversion:6 */
WinChart.prototype.groupMouseover = function() {
  const chart = this;

  return function(datum,index) {
    let element = d3.select(this);

    if(!chart.dragLock) {
      element
        .select(".circle-highlight")
        .transition()
        .duration(150)
        .attr("r",chart.styles.highlightCircleRadius);

      element
        .select("text")
        .transition()
        .duration(150)
        .attr("font-size",chart.styles.labelHighlightFontSize)
        .attr("opacity",chart.styles.labelHighlightOpacity);

      chart.axes.y
        .transition()
        .duration(150)
        .attr("opacity",0.25);

      chart.yearHighlight
        .attr("transform","translate("+chart.referencePoints.xMin+","+chart.scales.y(index + 2019)+")");

      chart.yearHighlight
        .selectAll("text")
        .text(index + 2019);

      chart.yearHighlight
        .attr("display","block")
        .transition()
        .duration(150)
        .attr("opacity",1);

    }
  };

};
