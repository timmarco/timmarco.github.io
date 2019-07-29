/* jshint esversion:6 */
CatcherView.prototype.updateActive = function(data) {
  const view = this;

  if(data !== undefined) {
    view.activeData = data;
  }

  view.layers.activeCircles
    .selectAll("*")
    .remove();


  let colorScheme = colorSchemePitchResults();

  view.layers.activeCircles
    .selectAll("circle")
    .data(view.activeData)
    .enter()
    .append("circle")
    .attr("cx",(pitch) => { return view.scales.x(pitch.pX); })
    .attr("cy",(pitch) => { return view.scales.y(pitch.pZ); })
    .attr("r",4)
    .attr("fill",(d) => {
        return colorScheme[d.pitchResultCode];
    })
    .attr("fill-opacity",0.00675)
    .attr("stroke",(d) => {
        return colorScheme[d.pitchResultCode];
    })
    .attr("stroke-opacity",0.25)
    .on('mouseover',function(d,i) {
      let element = d3.select(this);
      let tooltip = d3.select("#tooltip");

      element
        .attr("fill",colorScheme[d.pitchResultCode])
        .attr("fill-opacity",1)
        .attr("stroke-opacity",1)
        .attr("r",8);

      let xPosition = d3.event.x + 15;
      let yPosition = d3.event.y - 75;
      tooltip
        .style("display","block")
        .style("left",xPosition + "px")
        .style("top",yPosition + "px");

      let tooltipMessage = "";
      tooltipMessage += "<div style='text-align:center; font-size:1.2em; font-weight:bold; margin-bottom:0.5em; color:white; background-color:"+colorScheme[d.pitchResultCode]+"'>" + mapPitchResult(d.pitchResultCode) + "</div>";
      tooltipMessage += "<table style='width:100%; margin-bottom:25px;>";
      tooltipMessage += "<tr style='font-size:0.75em'><td style='border-bottom:1px solid black'>Date</td><td style='border-bottom:1px solid black'>Pitcher</td><td style='border-bottom:1px solid black'>Pitch Type</td></tr>";
      tooltipMessage += "<tr style='font-size:0.75em'><td>"+d.date+"</td><td>"+d.pitcherName+"</td><td>"+mapPitch(d.pitchType)+"</td></tr>";
      tooltipMessage += "<tr style='font-size:0.75em'><td style='border-bottom:1px solid black'>Spin Rate</td><td style='border-bottom:1px solid black'>Start Velo</td><td style='border-bottom:1px solid black'>End Velo</td></tr>";
      tooltipMessage += "<tr style='font-size:0.85em'><td>"+d.spinRate+" rpm</td><td>"+d.startSpeed+" mph</td><td>"+d.endSpeed+" mph</td></tr>";
      tooltipMessage += "<tr style='font-size:0.75em'><td style='border-bottom:1px solid black'>Break Angle</td><td style='border-bottom:1px solid black'>Horizontal Movement</td><td style='border-bottom:1px solid black'>Vertical Movement</td></tr>";
      tooltipMessage += "<tr style='font-size:0.85em'><td>"+d.breakAngle+"</td><td>"+d.pfxX+"\"</td><td>"+d.pfxZ+"\"</td></tr>";
      tooltipMessage += "</table>";

      // tooltipMessage += "<table>";
      // tooltipMessage += "<tr><td>Start Speed</td><td>"+d.startSpeed+" mph</td></tr>";
      // tooltipMessage += "<tr><td>End Speed</td><td>"+d.endSpeed+" mph</td></tr>";
      // tooltipMessage += "<tr><td>Spin Rate</td><td>"+d.spinRate+" rpm</td></tr>";
      // tooltipMessage += "</table>";

      tooltip.html(tooltipMessage);

    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);
      let tooltip = d3.select("#tooltip");

      element
        .attr("fill",colorScheme[d.pitchResultCode])
        .attr("fill-opacity",0.00675)
        .attr("stroke-opacity",0.25)
        .attr("r",5);

      element
        .attr("fill","rgba(0,0,0,0.00675)");

      tooltip
        .style("display","none");

    })
    .on('mousemove',function() {
      let tooltip = d3.select("#tooltip");
      let xPosition = d3.event.x + 15;
      let yPosition = d3.event.y - 75;
      tooltip
        .style("display","block")
        .style("left",xPosition + "px")
        .style("top",yPosition + "px");
    });


  return view;
};
