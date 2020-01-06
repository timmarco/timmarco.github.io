SkillBoxCard.prototype.defineLayout = function() {
  const card = this;
  const layout = {};
  
  layout.size = {};

  layout.size.width = card.parent.skillSvgs[card.index].attr("width");
  layout.size.height = card.parent.skillSvgs[card.index].attr("height");

  layout.padding = {};
  layout.padding.horizontal = layout.size.width * 0.1;
  layout.padding.vertical = layout.size.height * 0.1;

  layout.bodySize = {};
  layout.bodySize.width = layout.size.width - layout.padding.horizontal * 2;
  layout.bodySize.height = layout.size.height - layout.padding.vertical * 3;

  return layout;
}
