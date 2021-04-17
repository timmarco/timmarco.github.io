function PortfolioItem(parent,manifest) {
  const item = this;
  init(parent,manifest);
  return item;

  function init(parent,manifest) {
    item.state = "inactive";

    item.parent = parent;
    item.manifest = manifest;

    item.containerDiv = item.addContainerDiv();
    item.substrate = item.addSubstrate();
    item.textLayer = item.addTextLayer();
    item.textDiv = item.addTextDiv();
    item.title = item.addTitle();
    item.heroOffset = item.addHeroOffset();
    item.hero = item.addHero();
    item.heroSource = item.addHeroSource();

  }
}
