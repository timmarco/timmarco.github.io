TimelineCompany.prototype.addBody = function() {
  const company = this;

  const backgroundSize = company.toplineGroup
    .node()
    .getBBox();

  const foreignObject = company.group
    .append("foreignObject")
    .attr("x",10)
    .attr("y",backgroundSize.height)
    .attr("width",company.parent.layout.margins.left - 50)
    .attr("height",150);

  const body = foreignObject
    .append("xhtml:body")
    .style("width","100%")
    .style("height","100%");

  const div = body
    .append("div")
    .attr("x",0)
    .attr("y",0)
    .attr("width",500)
    .attr("height",500)
    .style("font-weight",100)
    .style("background-color","#E1E1D6")
    .style("padding-top","0.5em")
    .style("padding-bottom","0.5em")
    .style("padding-left","0.5em")
    .style("padding-right","0.5em")
    .style("font-size","10pt")
    .html(company.data.description);


  const divHeight = div
    .node()
    .getBoundingClientRect()
    .height;

  foreignObject
    .attr("height",divHeight);

  return foreignObject;
}
