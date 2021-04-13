RadialGroup.prototype.addGroup = function() {
  const radial = this;
  return radial.sketch.svg
    .append("g")
    .attr("transform","translate(320,180)");
}
