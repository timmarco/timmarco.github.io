SkillBoxCard.prototype.deactivate = function() {
  const card = this;

  card.group
    .transition()
    .duration(150)
    .attr("opacity",0);

  return card;
}
