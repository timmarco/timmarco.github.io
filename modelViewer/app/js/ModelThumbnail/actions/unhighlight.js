ModelThumbnail.prototype.unhighlight = function() {
  const thumbnail = this;

  if(thumbnail.isActive)  { return }

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
