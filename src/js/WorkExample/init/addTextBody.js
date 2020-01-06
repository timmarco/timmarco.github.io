WorkExample.prototype.addTextBody = function() {
  const example = this;

  const foreignObject = example.layers.body
    .append("foreignObject")
    .attr("width",300)
    .attr("height",300)
    .attr("x",example.layout.textTranslateX)
    .attr("y",example.layout.size.height);

  const body = foreignObject
    .append("xhtml:body")
    .style("margin",0)
    .style("padding",0)
    .style("background-color","black")
    .style("color","white");

  const div = body
    .append("div")
    .style("width","100%")
    .style("height","100%")
    .style("padding-left","0.5em")
    .style("padding-right","0.5em")
    .style("padding-top","0.25em")
    .style("padding-bottom","0.25em")
    .style("font-family","Merriweather")
    .style("font-weight",200)
    .html(example.description);

  return foreignObject;
}
