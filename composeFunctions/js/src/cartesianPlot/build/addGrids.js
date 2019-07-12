/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.addGrids = function() {
  const plot = this;

  plot.xGrid = plot.gridGroup
    .append("g")
    .attr("id","xGrid");

  plot.yGrid = plot.gridGroup
    .append("g")
    .attr("id","yGrid");

  plot.xGrid
    .selectAll("line")
    .data(d3.range(plot.domain[0],plot.domain[1] + 1))
    .enter()
    .append("line")
    .attr("x1",(datum) => { return plot.xScale(datum); })
    .attr("x2",(datum) => { return plot.xScale(datum); })
    .attr("y1",plot.marginTop)
    .attr("y2",plot.height - plot.marginBottom)
    .attr("stroke","#aaa")
    .attr("stroke-width",1);

  plot.yGrid
    .selectAll("line")
    .data(d3.range(plot.range[0],plot.range[1] + 1))
    .enter()
    .append("line")
    .attr("x1",plot.marginLeft)
    .attr("x2",plot.width -  plot.marginRight)
    .attr("y1",(datum) => { return plot.yScale(datum); })
    .attr("y2",(datum) => { return plot.yScale(datum); })
    .attr("stroke","#aaa")
    .attr("stroke-width",1);

  return plot;
};
