TimelineCompany.prototype.addCompanyName = function() {
  const company = this;

  const background = company.toplineGroup
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("fill","black");

  const name = company.toplineGroup
    .append("text")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .attr("text-anchor","start")
    .attr("dominant-baseline","text-before-edge")
    .attr("dx",10)
    .attr("fill","white")
    .text(company.data.company);

  const nameSize = name
    .node()
    .getBBox();

  background
    .attr("width",nameSize.width + 20)
    .attr("height",nameSize.height);

  const backgroundSize = background
    .node()
    .getBBox();

  const offsetX = company.parent.layout.margins.left - backgroundSize.width - 40;

  company.toplineGroup
    .attr("transform","translate("+offsetX+",0)");

  return name;
}
