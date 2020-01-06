SvgTutorialSvgElement.prototype.addGroup = function() {
  const element = this;

  const group = element.parent.layers.svgElement
    .append("g")
    .attr("transform","translate("+ element.parent.layout.gridHorizontal(5) +","+ element.parent.layout.gridVertical(0.25) +")");

  return group;
}
