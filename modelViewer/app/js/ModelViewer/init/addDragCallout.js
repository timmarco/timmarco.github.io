ModelViewer.prototype.addDragCallout = function() {
  const viewer = this;

  const callout = d3.select("#rightPane")
    .append("div")
    .style("width","100%")
    .style("height","5vh")
    .style("z-index",10)
    .style("position","absolute")
    .style("text-align","center")
    .style("bottom","-5vh");

  callout
    .append("div")
    .style("font-size","2em")
    .style("font-weight",500)
    .style("font-family","Oswald")
    .style("padding-left","1em")
    .style("padding-right","1em")
    .style("padding-top","0.25em")
    .style("padding-bottom","0.25em")
    .style("display","inline-block")
    .style("color","white")
    .style("background-color","#E31A1C")
    .html("CLICK AND DRAG TO ROTATE MODEL");

  return callout;
}
