WorkExample.prototype.addSvg = function() {
  const example = this;

  const svg = d3.select("#exampleContainer")
    .append("svg")
    .attr("width",example.layout.size.width)
    .attr("height",example.layout.size.height)
    .style("background-color","white")
    .style("margin",0)
    .style("padding",0)
    .attr("cursor","pointer")
    .attr("xmlns:svg","http://www.w3.org/2000/svg")
    .attr("xmlns","http://www.w3.org/2000/svg")
    .attr("version","1.1")
    .attr("viewBox","0 0 "+example.layout.size.width+" " +example.layout.size.height);


  return svg;
}
