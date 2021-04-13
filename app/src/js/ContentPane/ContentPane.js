function ContentPane(portfolio) {
  const pane = this;
  init(portfolio);
  return pane;

  function init(portfolio) {
    pane.parent = portfolio;
    pane.containerDiv = pane.addContainerDiv();
  }
}
