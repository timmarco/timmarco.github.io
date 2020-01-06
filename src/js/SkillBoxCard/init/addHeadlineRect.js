SkillBoxCard.prototype.addHeadlineRect = function() {
  const card = this;

  const rect = card.layers.headline
    .append("rect")
    .attr("fill","black");

  return rect;
}
