TimelineRole.prototype.addGroup = function() {
  const role = this;

  const xOffset = role.parent.scale(role.data.endDate) - role.parent.scale(role.company.endDate);
  const yPosition = (1 + role.index) * 20;

  const group = role.where
    .append("g")
    .attr("transform","translate("+xOffset+","+yPosition+")")
    .on('mouseover',role.mouseover())
    .on('mouseout',role.mouseout());

  return group;
}
