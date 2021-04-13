RadialGroup.prototype.addBackground = function() {
  const radial = this;
  return radial.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","url(#background)");

}
