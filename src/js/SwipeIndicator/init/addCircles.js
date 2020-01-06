SwipeIndicator.prototype.addCircles = function() {
  const indicator = this;


  const circles = indicator.svg
    .selectAll("circles")
    .data(d3.range(0,indicator.count))
    .enter()
    .append("circle")
    .attr("cx",function(d,i) { return indicator.scale(i)})
    .attr("cy",indicator.layout.size.height / 2)
    .attr("r",indicator.layout.circleRadius)
    .attr("fill","#aaa");

  return circles;
}
