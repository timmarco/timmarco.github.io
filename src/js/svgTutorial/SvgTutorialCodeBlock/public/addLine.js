SvgTutorialCodeBlock.prototype.addLine = function(options) {
  const block = this;

  const indentSize = 2 * options.indent + "em"

  const addedLine = block.div.append("div")
    .style("padding-left",indentSize)
    .html(options.html)
    .on("mouseover",function() {
      d3.select(this)
        .style("background-color","#9FDE9C")
        .style("font-weight","bold")
        .style("color","black");

      if(options.mouseover) { options.mouseover(); }
      
    })
    .on("mouseout",function() {
      d3.select(this)
        .style("background-color",block.parent.style.codeBlock.background)
        .style("font-weight",block.parent.style.codeBlock.fontWeight)
        .style("color","white");

        if(options.mouseover) { options.mouseout(); }
    })

  return block;
}
