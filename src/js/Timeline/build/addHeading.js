Timeline.prototype.addHeading = function() {
  const timeline = this;

  const svg = d3.select(timeline.where)
    .append("div")
    .style("background-color","black")
    .style("padding-left","1em")
    .style("padding-right","1em")
    .style("font-size","2.5em")
    .style("border-left","0.25em solid #984BA3")
    .style("font-weight","500")
    .style("color","white")
    .style("font-family","Oswald")
    .style("display","inline-block")
    .html("WORK HISTORY");

  return svg;
}
