SvgTutorialCodeBlock.prototype.addBody = function() {
  const block = this;

  const body = block.foreignObject
    .append("xhtml:body")
    .style("width","100%")
    .style("height","100%")
    .style("padding",0)
    .style("margin",0);

  return body;
}
