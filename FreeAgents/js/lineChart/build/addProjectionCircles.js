/* jshint esversion:6 */
LineChart.prototype.addProjectionCircles = function() {
  const chart = this;

  let projectionCircles = chart.layers.projection
    .selectAll("g")
    .data(chart.projection.bWarSimilarPlayersMean)
    .enter()
    .append("g")
    .attr("transform",function(d,i) {
      return "translate(0,0)"
    })
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element = d3.select(this)
      let circle = element.select(".dataCircle");

      circle
        .transition()
        .duration(125)
        .attr("fill",chart.styles.playerYearHighlightFill)
        .attr("r",5);

      let display = chart.playerName + " projects to produce <strong>";
      if(chart.currentWARType == "bWar") {
        display += d.bWar.toFixed(1) + "</strong> Baseball-Reference wins above replacement in his age <strong>";
      } else {
        display += d.fWar.toFixed(1) + "</strong> Fangraphs wins above replacement in his age <strong>";
      }
      display += d.age;
      display += "</strong> season.</div>";

      chart.tooltip
        .update(display)
        .show()
        .move();
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);
      let circle = element.selectAll(".dataCircle");

      chart.tooltip
        .hide();

      circle
      circle
        .transition()
        .duration(125)
        .attr("fill",chart.styles.playerYearFill)
        .attr("r",3);

    })
    .on('mousemove',function() {

      chart.tooltip
        .move();

    })

  let hotspots = projectionCircles
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",10)
    .attr("fill","rgba(255,255,255,0)")
    .attr("opacity",0);

  let dataCircles = projectionCircles
    .append("circle")
    .classed("dataCircle",true)
    .attr("cx",0)
    .attr("cy",0)
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke);

  return projectionCircles;
};
