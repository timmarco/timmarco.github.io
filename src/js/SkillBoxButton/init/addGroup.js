SkillBoxButton.prototype.addGroup = function() {
  const button = this;

  const group = button.parent.layers.nav
    .append("g")
    .attr("cursor","pointer")
    .attr("transform","translate(0,0)")
    .on('mouseover',function() { button.highlight(); })
    .on('mouseout',function() { button.unhighlight(); })
    .on('click',function() { button.parent.showSkill(button.key); });

  return group;
}
