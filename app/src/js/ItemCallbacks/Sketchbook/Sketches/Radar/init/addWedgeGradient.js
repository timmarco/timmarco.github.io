RadarSketch.prototype.addWedgeGradient = function() {
  const radar = this;
  const gradient = radar.defs
    .append("linearGradient")
    .attr("id","wedgeGradient")
    .attr("x1","0%")
    .attr("x2","100%")
    .attr("y1","0%")
    .attr("y2","0%")
    .attr("gradientTransform","rotate("+radar.wedgeSize+")")

  gradient
    .append("stop")
    .attr("offset","0%")
    .style("stop-color",radar.green)
    .style("stop-opacity",0)

  gradient
    .append("stop")
    .attr("offset","100%")
    .style("stop-color",radar.green)
    .style("stop-opacity",1);

}
