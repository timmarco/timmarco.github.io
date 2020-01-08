ModelThumbnail.prototype.deactivate = function() {
  const thumbnail = this;

  thumbnail.isActive = false;
  
  thumbnail.layers.headlineScale
    .transition()
    .duration(75)
    .attr("transform","scale(1)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(75)
    .attr("fill",thumbnail.style.baseColor);

  return thumbnail;
}
