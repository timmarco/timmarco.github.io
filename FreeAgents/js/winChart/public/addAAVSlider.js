/* jshint esversion:6 */
WinChart.prototype.addAAVSlider = function() {
  const chart = this;

  chart.aavSlider = new ModelSlider({
    "where":chart.layers.circles,
    "domain":chart.domain,
    "coordinates":{
      "x":chart.referencePoints.xMin,
      "y":chart.referencePoints.yMin - 20
    },
    "size":{
      "width":chart.referencePoints.effectiveWidth
    },
    "margins":{
      "left":0,
      "right":0
    },
    "formatter":(v) =>  { return "$" + v.toFixed(2) + "MM"},
    "callbacks":{
      "change":(value) => {
        chart
          .aavSetValues(value);
      }
    },
    "labelText":"Average Annual Value"
  }).updateValue(10);

  chart.totalValueLabel = chart.group
    .append("text")
    .attr("x",chart.referencePoints.xMin)
    .attr("y",chart.size.height + 15)
    .attr("font-family","Source Sans Pro")
    .attr("font-size","10pt")
    .attr("dominant-baseline","baseline")
    .text("Total Contract Cost:");

  chart.totalValueDisplay = chart.group
    .append("text")
    .attr("x",chart.referencePoints.xMin)
    .attr("y",chart.size.height + 17)
    .attr("font-family","Source Sans Pro")
    .attr("font-size","14pt")
    .attr("font-weight","bold")
    .attr("dominant-baseline","hanging")
    .text("");


  return chart;
}
