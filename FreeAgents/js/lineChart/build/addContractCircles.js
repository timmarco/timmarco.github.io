/* jshint esversion:6 */
LineChart.prototype.addContractCircles = function() {
  const chart = this;

  let circles = chart.layers.contract
    .selectAll("circle")
    .enter()
    .append("circle")
    .attr("cx",(d) => { return modeler.chart.scales.x(d.age); })
    .attr("cy",(d) => { return modeler.chart.scales.y(d[modeler.chart.currentWARType]); })
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width",1)
    .attr("cursor","pointer")
    .on('mouseover',function(d)  {
    })
    .on('mouseout',() => {
    })
    .on('mousemove',() => {
    })
    .exit()
    .remove();



  return circles;
}
