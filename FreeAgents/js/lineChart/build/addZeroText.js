/* jshint esversion:6 */
LineChart.prototype.addZeroText = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .text("Replacement")
    .attr("font-size","10pt")
    .attr("fill","#999")
    .attr("cursor","pointer")
    .attr("x",chart.scales.x(0))
    .attr("y",chart.scales.y(0))
    .on('mouseover',() => {
      chart.tooltip
        .update("Players producting <strong>0 WAR</strong> in a season are replaceable by 'AAAA'-type players.")
        .show()
        .move();

      line
        .attr("fill","black");

      chart.zeroLine
        .attr("stroke","black")
        .attr("stroke-dasharray","1,0");
    })
    .on('mouseout',() =>{
      chart.tooltip
        .hide();

      line
        .attr("fill","#aaa");

      chart.zeroLine
        .attr("stroke","#aaa")
        .attr("stroke-dasharray","3,3");

    })
    .on('mousemove',() => {
      chart.tooltip
        .move();
    });



  return line;
};
