ModelDescriptionBody.prototype.transitionIn = function(duration = 300, delay = 200, ease = d3.easeLinear) {
  const description = this;

  description.foreignObject
    .transition()
    .duration(duration)
    .delay(delay)
    .ease(ease)
    .attr("y",description.parent.layout.safeAreas.text.y)
    .attr("opacity",1);
}
