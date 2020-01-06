MobileWorkExample.prototype.addTapButton = function() {
  const example = this;

  const tapLink = example.layers.tap
    .append("a")
    .attr("href",example.href)
    .attr("target","_new");

  const tapGroup = tapLink
    .append("g");

  const background = tapGroup
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("fill","green");

  const tapText = tapGroup
    .append("text")
    .attr("dx",10)
    .attr("text-anchor","start")
    .attr("font-family","Oswald")
    .attr("font-size","4em")
    .attr("fill","white")
    .attr("dominant-baseline","text-before-edge")
    .attr("font-weight",500)
    .text("TAP HERE TO READ");

  const textSize = tapText
    .node()
    .getBBox();

  background
    .attr("width",textSize.width + 20)
    .attr("height",textSize.height);

  const leftAlign = example.layout.size.width / 2 - textSize.width / 2 - 10;
  const topAlign = example.layout.size.height * 0.67;

  tapGroup
    .attr("transform","translate("+leftAlign+","+topAlign+")");

  return tapGroup;
}
