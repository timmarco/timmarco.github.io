Timeline.prototype.applyLayout = function() {
  const timeline = this;

  let runningYPosition = 0;

  timeline.companies.forEach((company) => {
    const translateY = 50 + timeline.layout.margins.top + runningYPosition;
    const translateX = timeline.layout.margins.left + timeline.scale(company.data.endDate);
    const translateString = "translate(0,"+translateY+")";

    company.group
      .attr("transform",translateString);

    runningYPosition += company.group.node().getBBox().height + 25;
  });


  const lastNode = timeline.companies[timeline.companies.length-1].group.node().getBBox();
  timeline.svg.attr("height",runningYPosition + lastNode.height);

  return timeline;
}
