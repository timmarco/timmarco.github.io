SkillBoxCard.prototype.addBody = function() {
  const card = this;

  const foreignObject = card.layers.body
    .append("foreignObject")
    .attr("width",card.layout.bodySize.width)
    .attr("height",card.layout.bodySize.height);

  const body = foreignObject
    .append("xhtml:body")
    .style("height","100%")
    .style("width","100%")
    .style("padding",0)
    .style("margin",0);

  const div = body
    .append("div")
    .style("width","100%")
    .style("height","100%");

  const descriptionBody = div
    .append("div")
    .style("background-color","rgb(225,225,214)")
    .style("color","black")
    .style("font-size","1em")
    .style("padding-top","0.5em")
    .style("padding-bottom","0.5em")
    .style("padding-left","1em")
    .style("padding-right","1em")
    .html(card.details.description);

  return foreignObject;
}
