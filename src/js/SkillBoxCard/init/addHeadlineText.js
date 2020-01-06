SkillBoxCard.prototype.addHeadlineText = function() {
  const card = this;

  const text = card.layers.headline
    .append("text")
    .attr("font-size","2em")
    .attr("font-weight",500)
    .attr("fill","white")
    .attr("dominant-baseline","middle")
    .text(card.details.headline);

  return text;
}
