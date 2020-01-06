SkillBoxGroup.prototype.addGroup = function() {
  const skillGroup = this;

  const group = skillGroup.parent.layers.skillGroups
    .append("g")
    .attr("transform","translate(0,"+skillGroup.layout.verticalOffset+")");

  return group;
}
