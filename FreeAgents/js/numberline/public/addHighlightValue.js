/* jshint esversion:6 */
Numberline.prototype.addHighlightValue = function(datum,player) {
  const chart = this;

  let circle;

  chart.highlightDatum = datum;

  chart.highlightValueCircle = chart.layers.activeLayer
    .append("circle")
    .attr("cy",chart.referencePoints.midline)
    .attr("cx",chart.scale(datum))
    .attr("r",chart.styles.highlightedCircleRadius)
    .attr("stroke","black")
    .attr("fill",chart.styles.highlightedCircleFill)
    .on('mouseover',function(d) {
      chart.tooltip
        .showNumberlineDatum({
          "chartName":d.key,
          "name":player.Name,
          "value":datum,
          "summaryData":chart.summaryData
        })
    })
    .on('mouseout',function() {
      chart.tooltip
        .hide();
    })
    .on('mousemove',function() {
      chart.tooltip
        .move();
    })

  return chart;
};
