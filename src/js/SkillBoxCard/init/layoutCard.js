SkillBoxCard.prototype.layoutCard = function() {
  const card = this;

  const headlineSize = card.layers.headline.node().getBBox();
  const verticalCenterHeadline = card.layout.padding.vertical;
  const headlineTransform = "translate("+card.layout.padding.horizontal+","+verticalCenterHeadline+")";

  card.layers.headline
    .attr("transform",headlineTransform);

  card.layers.body
    .attr("transform","translate("+card.layout.padding.horizontal+","+(card.layout.padding.vertical * 3)+")")
}
