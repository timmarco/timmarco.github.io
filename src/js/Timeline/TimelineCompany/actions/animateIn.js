TimelineCompany.prototype.animateIn = function(delay) {
  const company = this;

  const timelineWidth = company.parent.scale(company.data.startDate) - company.parent.scale(company.data.endDate);
  const startAnimation = delay;

  company.companyName
    .attr("opacity",0)
    .attr("dx",-20)
    .transition()
    .duration(350)
    .delay(startAnimation)
    .attr("dx",10)
    .attr("opacity",1);

  company.body
    .attr("opacity",0)
    .transition()
    .delay(delay)
    .duration(1000)
    .attr("opacity",1);

  company.toplineGroup
    .select("rect")
    .attr("opacity",0)
    .transition()
    .delay(delay)
    .duration(1000)
    .attr("opacity",1);

  company.roles.forEach((role,index) => {
    role.animateIn(delay + (index + 1) * 250);
  });

}
