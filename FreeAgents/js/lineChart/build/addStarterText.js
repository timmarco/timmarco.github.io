/* jshint esversion:6 */
LineChart.prototype.addStarterText = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .text("Starter")
    .attr("font-size","10pt")
    .attr("fill","#999")
    .attr("cursor","pointer")
    .attr("x",chart.scales.x(0))
    .attr("y",chart.scales.y(2))
    .on('mouseover',() => {
      chart.tooltip
        .update("Players producting at least <strong>2 WAR</strong> in a season are generally considered to be MLB starter-caliber players.")
        .show()
        .move();

      line
        .attr("fill","black");

      chart.starterLine
        .attr("stroke","black")
        .attr("stroke-dasharray","1,0");
    })
    .on('mouseout',() =>{
      chart.tooltip
        .hide();

      line
        .attr("fill","#aaa");

      chart.starterLine
        .attr("stroke","#aaa")
        .attr("stroke-dasharray","3,3");

    })
    .on('mousemove',() => {
      chart.tooltip
        .move();
    });



  return line;
};
