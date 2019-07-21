/* jshint esversion:6 */
WinChart.prototype.addCircles = function() {
  const chart = this;

  let groups = chart.layers.circles
    .selectAll("g")
    .data(chart.data)
    .enter()
    .append("g")
    .attr("cursor","pointer")
    .attr("transform",function(datum,index) {
      return "translate("+chart.scales.x(datum)+","+chart.scales.y(index + 2019)+")"
    })
    .on('mouseover',chart.groupMouseover())
    .on('mouseout',chart.groupMouseout())
    .call(d3.drag()
      .on('start',chart.groupDragStart())
      .on('drag',chart.groupDrag())
      .on('end',chart.groupDragEnd())
    )

  let highlights = groups
    .append("circle")
    .classed("circle-highlight",true)
    .attr("r",chart.styles.circleRadius)
    .attr("fill",chart.styles.highlightCircleFill)
    .attr("opacity",chart.styles.highlightCircleOpacity);


  let circles = groups
    .append("circle")
    .classed("circle-visible",true)
    .attr("r",chart.styles.circleRadius)
    .attr("fill",chart.styles.circleFill)
    .attr("stroke",chart.styles.circleStroke)
    .attr("stroke-width",chart.styles.circleStrokeWidth)

  let text = groups
    .append("text")
    .attr("x",10)
    .attr("y",0)
    .attr("dominant-baseline","middle")
    .attr("text-anchor","start")
    .attr("font-family",chart.styles.labelFontFamily)
    .attr("font-size",chart.styles.labelFontSize)
    .attr("fill",chart.styles.labelFontFill)
    .attr("opacity",chart.styles.labelFontOpacity)
    .text((d) => { return "$" + d.toFixed(2) + "MM";})


  return groups;
}
