SkillBoxCard.prototype.activate = function(delayStart) {
  const card = this;

  card.group
    .transition()
    .delay(delayStart)
    .duration(250)
    .attr("opacity",1);

  card.layers.headlineOffset
    .attr("transform","translate(0,50)")
    .attr("opacity",0)
    .transition()
    .ease(d3.easeCubicOut)
    .delay(175 + delayStart)
    .duration(375)
    .attr("opacity",1)
    .attr("transform","translate(0,0)");

  card.layers.bodyOffset
    .attr("transform","translate(0,50)")
    .attr("opacity",0)
    .transition()
    .duration(d3.easeCubicOut)
    .delay(225 + delayStart)
    .duration(325)
    .attr("opacity",1)
    .attr("transform","translate(0,0)");

  return card;
}
