/* jshint esversion: 6 */
WinChart.prototype.groupMouseout = function() {
  const chart = this;

  return function(d,i) {
    let element = d3.select(this);

    if(!chart.dragLock) {
      element
        .select(".circle-highlight")
        .transition()
        .duration(150)
        .attr("r",chart.styles.circleRadius);

      element
        .select("text")
        .transition()
        .duration(150)
        .attr("font-size",chart.styles.labelFontSize)
        .attr("opacity",chart.styles.labelFontOpacity);

      chart.axes.y
        .transition()
        .duration(150)
        .attr("opacity",1);

      chart.yearHighlight
        .transition()
        .duration(150)
        .attr("opacity",0)
        .on('end',function() {
          chart.yearHighlight
            .attr("display","none");
        });



    }

  };
};
