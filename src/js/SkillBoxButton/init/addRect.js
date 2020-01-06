SkillBoxButton.prototype.addRect = function() {
  const button = this;

  const rect = button.group
    .append("rect")
    .attr("fill","black");

  return rect;
}
