TimelineCompany.prototype.addRoleGroup = function() {
  const company = this;

  const offsetX = company.parent.layout.margins.left + company.parent.scale(company.data.endDate);

  const group = company.group
    .append("g")
    .attr("transform","translate("+offsetX+",0)");

  return group;
}
