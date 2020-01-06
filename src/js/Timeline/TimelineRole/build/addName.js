TimelineRole.prototype.addName = function() {
  const role = this;

  const roleWidth = role.parent.scale(role.data.startDate) - role.parent.scale(role.data.endDate);

  const name = role.group
    .append("text")
    .attr("font-size","14pt")
    .attr("dominant-baseline","middle")
    .attr("x",roleWidth + 5)
    .text(role.data.title);

  return name;
}
