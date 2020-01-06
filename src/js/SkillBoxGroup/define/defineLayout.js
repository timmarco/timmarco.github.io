SkillBoxGroup.prototype.defineLayout = function() {
  const skillGroup = this;

  const layout = {};

  const navHeight = skillGroup.parent.layers.nav.node().getBBox().height;

  layout.size = {};
  layout.size.width = skillGroup.parent.layout.size.width;
  layout.size.height = skillGroup.parent.layout.size.height - (navHeight * 4);

  layout.verticalOffset = navHeight * 1.5;

  layout.gridWidth = layout.size.width / 2;
  layout.gridHeight = layout.size.height / 2;

  return layout;
}
