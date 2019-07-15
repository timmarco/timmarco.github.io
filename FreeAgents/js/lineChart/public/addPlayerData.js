/* jshint esversion:6 */
LineChart.prototype.addPlayerData = function(data,projections,playerName) {
  const chart = this;

  chart.playerData = data;

  chart.projections = projections;
  chart.playerLine = chart.layers.foregroundLine
    .append("path")
    .datum(data)
    .attr("stroke",chart.styles.playerYearLine)
    .attr("stroke-width",chart.styles.playerYearLineStrokeWidth)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);

  chart.playerCircles = chart.layers.foregroundLine
    .selectAll(".circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return chart.scales.x(d.age);})
    .attr("cy",(d) => { return chart.scales.y(d.bWar);})
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke)
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element = d3.select(this);


      chart.tooltip
        .showPlayerYear(playerName,d);

      element
        .attr("fill",chart.styles.playerYearHighlightFill);
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);

      chart.tooltip
        .hide();

      element
        .attr("fill",chart.styles.playerYearFill);

    });

  /*
  chart.meanProjectionLine = chart.layers.projection
    .append("path")
    .datum(projections.mean)
    .attr("stroke",chart.styles.playerYearLine)
    .attr("stroke-width",chart.styles.playerYearLineStrokeWidth)
    .attr("stroke-dasharray",chart.styles.playerProjectionDashArray)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);

  chart.meanProjectionCircles = chart.layers.projection
    .selectAll(".circle")
    .data(projections.mean)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return chart.scales.x(d.age);})
    .attr("cy",(d) => { return chart.scales.y(d.bWar);})
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke)
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element;
      element = d3.select(this);

      element
        .attr("fill",chart.styles.playerYearHighlightFill);

      chart.tooltip
        .showPlayerProjection(playerName,d);
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);

      chart.tooltip
        .hide();

      element
        .attr("fill",chart.styles.playerYearFill);

    });

  chart.projectionArea = chart.layers.projectionArea
    .append("path")
    .datum(projections.area)
    .attr("stroke","none")
    .attr("fill",chart.styles.projectionAreaFill)
    .attr("d",chart.areaGenerator);

  chart.top25ProjectionLine = chart.layers.projection
    .append("path")
    .datum(projections.top25)
    .attr("stroke",chart.styles.projectionAreaStroke)
    .attr("stroke-width",1)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);

  chart.bottom25ProjectionLine = chart.layers.projection
    .append("path")
    .datum(projections.bottom25)
    .attr("stroke",chart.styles.projectionAreaStroke)
    .attr("stroke-width",1)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);
  */

  return chart;
};
