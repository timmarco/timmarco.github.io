/* jshint esversion:6 */
LineChart.prototype.addMvpText = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .text("MVP")
    .attr("font-size","10pt")
    .attr("fill","#999")
    .attr("cursor","pointer")
    .attr("x",chart.scales.x(0))
    .attr("y",chart.scales.y(8))
    .on('mouseover',() => {
      chart.tooltip
        .update("Players producting at least <strong>8 WAR</strong> in a season are generally considered to be MVP candidates.")
        .show()
        .move();

      line
        .attr("fill","black");

      chart.mvpLine
        .attr("stroke","black")
        .attr("stroke-dasharray","1,0");
    })
    .on('mouseout',() =>{
      chart.tooltip
        .hide();

      line
        .attr("fill","#aaa");

      chart.mvpLine
        .attr("stroke","#aaa")
        .attr("stroke-dasharray","3,3");

    })
    .on('mousemove',() => {
      chart.tooltip
        .move();
    });


  return line;
};
