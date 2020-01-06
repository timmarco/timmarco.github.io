SkillBoxCard.prototype.addGroup = function() {
  const card = this;

  const group = card.parent.skillSvgs[card.index]
    .append("g")
    .attr("opacity",0);


  return group;
}
