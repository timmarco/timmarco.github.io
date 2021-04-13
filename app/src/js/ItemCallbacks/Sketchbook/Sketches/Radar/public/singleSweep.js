RadarSketch.prototype.singleSweep = function() {
  const radar = this;

  radar.rotateGroup
    .attr("transform","rotate(0)")
    .transition()
    .duration(2000)
    .ease(d3.easeLinear)
    .attr("transform","rotate(180)")
    .transition()
    .duration(2000)
    .ease(d3.easeLinear)
    .attr("transform","rotate(359.999)")
    .ease(d3.easeLinear)
    .on("end",() => { radar.singleSweep(); });

  radar.bogeyGroup
    .selectAll("circle")
    .each(function(coordinates) {
      const bogey = d3.select(this);
      const xCoordinate = bogey.attr("cx");
      const yCoordinate = bogey.attr("cy");
      let delay = ((coordinates.theta) / (Math.PI * 2) + 0.25) * 4000;
      if(delay > 4000) {
        delay -= 4000;
      }

      bogey
        .transition()
        .delay(delay)
        .duration(0)
        .attr("r",7)
        .attr("fill-opacity",1)
        .transition()
        .ease(d3.easeQuadIn)
        .duration(2000)
        .attr("fill-opacity",0)
        .attr("r",2)
    });

}
