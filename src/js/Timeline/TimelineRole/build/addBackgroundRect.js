TimelineRole.prototype.addBackgroundRect = function() {
  const role = this;

  const roleWidth = role.parent.scale(role.data.startDate) - role.parent.scale(role.data.endDate);

  const backgroundRect = role.group
    .append("rect")
    .attr("height",20)
    .attr("y",-10)
    .attr("rx",3)
    .attr("fill","#984BA3")
    .attr("width",roleWidth);


  return backgroundRect;
}
