function DetailsBox(portfolio) {
  const box = this;
  init(portfolio);
  return box;

  function init(portfolio) {
    box.parent = portfolio;
    box.containerDiv = box.addContainerDiv();
    box.contentDiv = box.addContentDiv();
    box.subtitleDiv = box.addSubtitleDiv();
    box.dateDiv = box.addDateDiv();
  }
}
