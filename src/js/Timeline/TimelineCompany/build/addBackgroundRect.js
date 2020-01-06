TimelineCompany.prototype.addBackgroundRect = function() {
  const company = this;

  const timelineWidth = company.parent.scale(company.data.startDate) - company.parent.scale(company.data.endDate);

  const rect = company.toplineGroup
    .append("rect")
    .attr("y",4)
    .attr("width",0)
    .attr("height",2)
    .attr("rx",10)
    .attr("fill","orange");

  return rect;
}
