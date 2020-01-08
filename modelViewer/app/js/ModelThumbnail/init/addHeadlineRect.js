ModelThumbnail.prototype.addHeadlineRect = function(where) {
  const thumbnail = this;

  const rect = where
    .append("rect")
    .attr("fill",thumbnail.style.baseColor)
    .attr("x",0)
    .attr("y",0);

  return rect;
}
