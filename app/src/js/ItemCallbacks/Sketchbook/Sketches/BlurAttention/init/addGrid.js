BlurAttentionSketch.prototype.addGrid = function() {
  const blur = this;

  const group = blur.sketch.svg
    .append("g")
    .attr("filter","url(#blur)");

  group
    .selectAll(".xLine")
    .data(d3.range(1,20))
    .enter()
    .append("line")
    .attr("x1",0)
    .attr("x2",640)
    .attr("y1",(datum) => { return datum * 50})
    .attr("y2",(datum) => { return datum * 50})
    .attr("stroke","#333")
    .attr("stroke-width",1)
    .attr("stroke-dasharray","10,5");

  group
    .selectAll(".yLine")
    .data(d3.range(1,20))
    .enter()
    .append("line")
    .attr("x1",(datum) => { return datum * 50})
    .attr("x2",(datum) => { return datum * 50})
    .attr("y1",0)
    .attr("y2",640)
    .attr("stroke","#333")
    .attr("stroke-width",1)
    .attr("stroke-dasharray","10,5");


  return group;
}
