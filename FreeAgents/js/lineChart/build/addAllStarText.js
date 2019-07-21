/* jshint esversion:6 */
LineChart.prototype.addAllStarText = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .text("All-Star")
    .attr("font-size","10pt")
    .attr("fill","#999")
    .attr("cursor","pointer")
    .attr("x",chart.scales.x(chart.scales.x.domain()[1]))
    .attr("y",chart.scales.y(5))
    .on('mouseover',() => {
      chart.tooltip
        .update("Players producting at least <strong>5 WAR</strong> in a season are generally considered to be All-Star candidates.")
        .show()
        .move();

      line
        .attr("fill","black");

      chart.allStarLine
        .attr("stroke","black")
        .attr("stroke-dasharray","1,0");
    })
    .on('mouseout',() =>{
      chart.tooltip
        .hide();

      line
        .attr("fill","#aaa");

      chart.allStarLine
        .attr("stroke","#aaa")
        .attr("stroke-dasharray","3,3");

    })
    .on('mousemove',() => {
      chart.tooltip
        .move();
    });



  return line;
};
