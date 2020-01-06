SkillBoxButton.prototype.addCurtain = function() {
  const button = this;

  const rect = button.group
    .append("rect")
    .attr("fill","#984BA3");

  return rect;
}
