/* jshint esversion:6 */
PitchSidePlot.prototype.addVisuals = function() {
  const plot = this;

  let scales = {};
  scales.x = d3.scaleLinear()
    .domain([0,60])
    .range([plot.layout.minX,plot.layout.maxX]);

  scales.y = d3.scaleLinear()
    .domain([0,8])
    .range([plot.layout.minY,plot.layout.maxY]);


  // SO THIS IS THE REAL GRADIENT
  let gradient = (scales.y(plot.pitchData.z0) - scales.y(plot.pitchData.pZ)) / (-scales.x(plot.pitchData.y0) + scales.x(0));
  let linearFunction = (inputX) => {
    return -(gradient * (inputX - scales.x(plot.pitchData.y0)) - scales.y(plot.pitchData.z0));
  };


  let verticalBreakFeet = (plot.pitchData.pfxZ / 12);
  let expectedVertical = +plot.pitchData.pZ - verticalBreakFeet;

  let expectedEndPoint = {
    "x":scales.x(0),
    "y":scales.y(expectedVertical)
  };

  // NOW MAKE AN EXPECTED GRADIENT
  let perceivedGradient = (scales.y(plot.pitchData.z0) - expectedEndPoint.y) / (-scales.x(plot.pitchData.y0) + expectedEndPoint.x);
  let perceivedLinearFunction = (inputX) => {
    return -(perceivedGradient * (inputX - scales.x(plot.pitchData.y0)) - scales.y(plot.pitchData.z0));
  };

  plot.layers.lines
    .append("line")
    .attr("x1",scales.x(plot.pitchData.y0))
    .attr("x2",expectedEndPoint.x)
    .attr("y1",scales.y(plot.pitchData.z0))
    .attr("y2",expectedEndPoint.y)
    .attr("stroke-dasharray","3,3")
    .attr("stroke","black");

  let points = [
    {"x":scales.x(60),"y":linearFunction(scales.x(60))},
    {"x":scales.x(plot.pitchData.y0),"y":scales.y(plot.pitchData.z0)},
    {"x":scales.x(40),"y":perceivedLinearFunction(scales.x(40))},
    {"x":scales.x(0),"y":scales.y(plot.pitchData.pZ)}
  ];

  plot.layers.circles
    .append("circle")
    .attr("cx",scales.x(0))
    .attr("cy",expectedEndPoint.y)
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","red");

  plot.layers.circles.selectAll(".f")
    .data(points)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return d.x; })
    .attr("cy",(d) => { return d.y; })
    .attr("fill","red")
    .attr("r",3);

  let lineGen = d3.line().x((d) => { return d.x; }).y((d) => { return d.y; }).curve(d3.curveCardinal);
  plot.layers.lines
    .append("path")
    .datum(points)
    .attr("stroke","black")
    .attr("stroke-width",1)
    .attr("fill","none")
    .attr("d",lineGen);


};
