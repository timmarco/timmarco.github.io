ModelThumbnail.prototype.activate = function() {
  const thumbnail = this;

  thumbnail.isActive = true;

  thumbnail.layers.headlineScale
    .transition()
    .duration(125)
    .attr("transform","scale(1.15)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(125)
    .attr("fill",thumbnail.style.activeColor);


  return thumbnail;
}
