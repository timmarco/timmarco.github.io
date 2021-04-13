RadialGroup.prototype.addWedges = function() {
  const radial = this;

  return radial.group
    .selectAll("path")
    .data(d3.range(0,10))
    .enter()
    .append("path")
    .attr("fill",d3.schemeCategory10[6])
    .attr("stroke",d3.schemeCategory10[0])
    .attr("stroke-width",2)
    .attr("d",(index) => {
      const startAngle = index * Math.PI / 5;
      const endAngle = startAngle + Math.PI / 5;
      return d3.arc()
        .innerRadius(radial.radius - 2)
        .outerRadius(radial.radius-1)
        .startAngle(startAngle)
        .endAngle(endAngle)()
    });
}
