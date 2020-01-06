SkillBoxCard.prototype.resizeRect = function() {
  const card = this;

  const textSize = card.headlineText.node().getBBox();

  card.headlineRect
    .attr("width",textSize.width + 20)
    .attr("height",textSize.height);

  card.headlineText
    .attr("x",10)
    .attr("y",textSize.height / 2 + 3);

}
