/* jshint esversion:6 */
LineChart.prototype.addPlayerData = function(data,playerName) {
  const chart = this;

  chart.playerData = data;
  chart.playerName = playerName;

  chart.playerLine = chart.layers.foregroundLine
    .append("path")
    .datum(data)
    .attr("stroke",chart.styles.playerYearLine)
    .attr("stroke-width",chart.styles.playerYearLineStrokeWidth)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);

  chart.playerGroups = chart.layers.foregroundLine
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform",function(d,i) {
      return "translate("+chart.scales.x(d.age)+","+chart.scales.y(d.bWar)+")";
    })
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element = d3.select(this);
      let dataCircle = element.select(".dataCircle");

      let display =  chart.playerName + " was worth <strong>";
      if(chart.currentWARType == "bWar") {
        display += d.bWar.toFixed(1) + "</strong> Baseball-Reference wins above replacement in his age " ;
        display += d.age + " season.";
      }

      if(chart.currentWARType == "fWar") {
        display += d.fWar.toFixed(1) + "</strong> Fangraphs wins above replacement in his age " ;
        display += d.age + " season.";
      }

      chart.tooltip
        .update(display)
        .show()
        .move();

      dataCircle
        .transition()
        .duration(125)
        .attr("r",5)
        .attr("fill",chart.styles.playerYearHighlightFill);

    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);
      let dataCircle = element.select(".dataCircle");

      chart.tooltip
        .hide();

      dataCircle
        .transition()
        .duration(125)
        .attr("r",3)
        .attr("fill",chart.styles.playerYearFill);
    })
    .on('mousemove',function(d,i) {
      chart.tooltip
        .move();
    })

  chart.playerHotspots = chart.playerGroups
    .append("circle")
    .attr("x",0)
    .attr("y",0)
    .attr("r",10)
    .attr("opacity",0)
    .attr("fill","black");

  chart.playerCircles = chart.playerGroups
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .classed("dataCircle",true)
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke);

    chart.updateXScale();
    chart.updateYScale();


  return chart;
};
