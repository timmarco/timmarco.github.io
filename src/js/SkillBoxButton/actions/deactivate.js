SkillBoxButton.prototype.deactivate = function() {
  const button = this;

  button.curtain
    .transition()
    .duration(250)
    .attr("y",button.getSize().height)
    .attr("height",0);

  button.skillGroup
    .deactivate();

  return button;

}
