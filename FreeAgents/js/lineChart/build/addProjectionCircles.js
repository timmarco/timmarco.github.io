/* jshint esversion:6 */
LineChart.prototype.addProjectionCircles = function() {
  const chart = this;

  let projectionCircles = chart.layers.projection
    .selectAll(".circle")
    .data(chart.projection.bWarSimilarPlayersMean)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return chart.scales.x(d.age);})
    .attr("cy",(d) => { return chart.scales.y(d[chart.currentWarType]);})
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke)
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element;
      element = d3.select(this);

      element
        .attr("fill",chart.styles.playerYearHighlightFill);

      // chart.tooltip
      //   .showPlayerProjection(playerName,d);
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);

      chart.tooltip
        .hide();

      element
        .attr("fill",chart.styles.playerYearFill);

    });

  return projectionCircles;
};
