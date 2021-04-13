RadarSketch.prototype.addBogeys = function() {
  const radar = this;
  const bogeyCount = 10;

  const bogeyPolarCoordinates = [];
  d3.range(0,bogeyCount)
    .forEach((index) => {
      bogeyPolarCoordinates
        .push({
          "theta":d3.randomUniform(0,2*Math.PI)(),
          "distance":d3.randomUniform(35,150)()
        });
    });

  return radar.bogeyGroup
    .selectAll("circle")
    .data(bogeyPolarCoordinates)
    .enter()
    .append("circle")
    .attr("r",5)
    .attr("fill",radar.green)
    .attr("stroke","none")
    .attr("cx",(coordinates) => { return Math.cos(coordinates.theta) * coordinates.distance})
    .attr("cy",(coordinates) => { return Math.sin(coordinates.theta) * coordinates.distance})
    .attr("fill-opacity",0);
}
