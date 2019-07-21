/* jshint esversion:6 */
ModelerKey = function(options) {
  let key = this;

  init(options);

  return key;

  function init(options) {

    key.styles = key.defineStyles(options);
    key.size = key.defineSize(options);
    key.position = {"x":66.67,"y":425};

    key.group = key.addGroup(options.where);
    key.playerHistory = key.addPlayerHistory();
    key.playerProjections = key.addPlayerProjections();
    key.similarPlayers = key.addSimilarPlayers();
    key.errorRange = key.addErrorRange();
    key.contractValue = key.addContractValue();

    key.visibleKeys = key.defineVisibleKeys();

    key
      .hideContractValue();

    key
      .layout();

  }
};
