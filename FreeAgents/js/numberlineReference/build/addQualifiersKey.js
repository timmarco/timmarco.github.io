/* jshint esversion:6 */
NumberlineReference.prototype.addQualifierKey = function() {
  const line = this;

  let circleKey = line.svg
    .append("g")
    .attr("transform","translate(100,12)");

  circleKey
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","black");

  circleKey
    .append("text")
    .attr("x",8)
    .attr("y",0)
    .attr("dominant-baseline","middle")
    .attr("font-family","Source Sans Pro")
    .attr("font-weight","normal")
    .attr("font-size","8pt")
    .text("2018 Qualified Players");


  return circleKey;
}
