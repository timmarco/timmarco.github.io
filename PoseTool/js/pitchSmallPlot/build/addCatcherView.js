/* jshint esversion:6 */
PitchSmallPlot.prototype.addCatcherView = function() {
  const plot = this;

  let pitchPosition = {
    "x":+plot.pitchData.pX,
    "y":+plot.pitchData.pZ
  };


  let view;

  plot.layers.catcherView
    .attr("transform","translate("+plot.layout.catcherViewCoordinates.x+","+plot.layout.catcherViewCoordinates.y+")");

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([-3,3])
    .range([plot.layout.catcherViewBounds.xMin,plot.layout.catcherViewBounds.xMax]);

  scales.y = d3.scaleLinear()
    .domain([0,6])
    .range([plot.layout.catcherViewBounds.yMin,plot.layout.catcherViewBounds.yMax]);

  let hpPoints = [
    {"x":scales.x(-8.5/12),"y":scales.y(0)},
    {"x":scales.x(8.5/12),"y":scales.y(0)},
    {"x":scales.x(8.5/12),"y":scales.y(-4.25/12)},
    {"x":scales.x(0),"y":scales.y(-8.5/12)},
    {"x":scales.x(-8.5/12),"y":scales.y(-4.25/12)},
    {"x":scales.x(-8.5/12),"y":scales.y(0)}
  ];

  let pathGen = d3.line().x((d) => { return d.x; }).y((d) => { return d.y;});

  let homePlate = plot.layers.catcherView
    .append("path")
    .datum(hpPoints)
    .attr("stroke","#666")
    .attr("fill","none")
    .attr("stroke-width",1)
    .attr("d",pathGen);


  let strikeZoneHeight = plot.pitchData.strikeZoneTop - plot.pitchData.strikeZoneBottom;

  let strikeZone = plot.layers.catcherView
    .append("rect")
    .attr("x",scales.x(-8.5/12))
    .attr("width",scales.x(17/12) - scales.x(0))
    .attr("y",scales.y(plot.pitchData.strikeZoneTop))
    .attr("height",scales.y(0) - scales.y(strikeZoneHeight))
    .attr("fill","none")
    .attr("stroke","black")
    .attr("stroke-width",1);

  let expected = plot.layers.catcherView
    .append("circle")
    .attr("cx",scales.x(pitchPosition.x - (plot.pitchData.pfxX / 12)))
    .attr("cy",scales.y(pitchPosition.y - (plot.pitchData.pfxZ / 12)))
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","red");

  let pitch = plot.layers.catcherView
    .append("circle")
    .attr("cx",scales.x(pitchPosition.x))
    .attr("cy",scales.y(pitchPosition.y))
    .attr("r",3)
    .attr("fill","red");


  return view;
};
