SkillBoxButton.prototype.getSize = function() {
  const box = this;

  return box.rect
    .node()
    .getBBox();
}
