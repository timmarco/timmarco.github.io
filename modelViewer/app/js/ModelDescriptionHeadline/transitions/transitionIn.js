ModelDescriptionHeadline.prototype.transitionIn = function(duration = 300, delay = 0, ease = d3.easeLinear) {
  const headline = this;

  headline.group
    .transition()
    .duration(duration)
    .delay(delay)
    .ease(ease)
    .attr("opacity",1)
    .attr("transform","translate("+headline.coordinates.x+","+headline.coordinates.y+")");

}
