TimelineCompany.prototype.addToplineGroup = function() {
  const company = this;

  const group = company.group
    .append("g")
    .on('mouseover',company.mouseover())
    .on('mouseout',company.mouseout());


  return group;
}
