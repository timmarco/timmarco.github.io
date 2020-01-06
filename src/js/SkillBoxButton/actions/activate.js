SkillBoxButton.prototype.activate = function() {
  const button = this;

  button.curtain
    .transition()
    .duration(250)
    .attr("y",0)
    .attr("height",button.getSize().height);

  button.skillGroup
    .activate();

  return button;
}
