SvgTutorialCodeBlock.prototype.addCodeDiv = function() {
  const block = this;

  const div = block.body.append("div")
    .style("padding",0)
    .style("margin",0)
    .style("width","100%")
    .style("height","100%")
    .style("font-family",block.parent.style.codeBlock.fontFamily)
    .style("font-size",block.parent.style.codeBlock.fontSize)
    .style("font-weight",block.parent.style.codeBlock.fontWeight)
    .style("color",block.parent.style.codeBlock.fontColor);

  return div;
}
