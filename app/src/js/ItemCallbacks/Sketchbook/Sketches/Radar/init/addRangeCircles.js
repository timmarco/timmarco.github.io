RadarSketch.prototype.addRangeCircles = function() {
  const radar = this;
  const circleDistances = [50,100,150];
  return radar.group
    .selectAll(".rangeCircle")
    .data(circleDistances)
    .enter()
    .append("circle")
    .attr("fill","none")
    .attr("stroke",radar.green)
    .attr("stroke-width",1)
    .attr("r",(datum) =>{ return datum});

}
