SkillBoxButton.prototype.unhighlight = function() {
  const button = this;

  const width = button.getSize().width / 2;

  button.highlightLine
    .transition()
    .duration(125)
    .attr("x1",button.getSize().width / 2)
    .attr("x2",button.getSize().width / 2);

  return button;
}
