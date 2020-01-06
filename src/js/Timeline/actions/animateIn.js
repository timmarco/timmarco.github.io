Timeline.prototype.animateIn = function() {
  const timeline = this;

  if(timeline.hasStarted) { return };


  timeline.axisGroup
    .selectAll("line")
    .attr("stroke","#aaa")
    .attr("y1",0)
    .attr("y2",0)
    .transition()
    .duration(1000)
    .delay(function(d,i) {
      return timeline.timeScale(d);
    })
    .attr("y1",0)
    .attr("y2",timeline.layout.size.height);

  timeline.axisGroup
    .selectAll("text")
    .attr("opacity",0)
    .transition()
    .duration(1000)
    .delay(function(d,i) {
      return timeline.timeScale(d);
    })
    .attr("opacity",1);


  timeline.companies.forEach((company,index) => {
    company.animateIn(500 + index * 500);
  });

  timeline.hasStarted = true;
}
