ModelThumbnail.prototype.highlight = function() {
  const thumbnail = this;

  if(thumbnail.isActive)  { return }

  thumbnail.layers.headlineScale
    .transition()
    .duration(125)
    .attr("transform","scale(1.1)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(125)
    .attr("fill",thumbnail.style.highlightColor);

  return thumbnail;
}
