/* jshint esversion:6 */
NumberlineReference.prototype.addCircleKey = function() {
  const line = this;

  let circleKey = line.svg
    .append("g")
    .attr("transform","translate(225,12)");

  circleKey
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",4)
    .attr("fill","#f6d55c")
    .attr("stroke","black");

  circleKey
    .append("text")
    .attr("x",8)
    .attr("y",0)
    .attr("dominant-baseline","middle")
    .attr("font-family","Source Sans Pro")
    .attr("font-weight","normal")
    .attr("font-size","8pt")
    .text(line.playerName + " 2018 Season");


  return circleKey;
}
