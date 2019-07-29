/* jshint esversion:6 */
Player.prototype.constructHighlightRule = function(rule,fill) {
  const player = this;

  return () => {
    player.catcherView
      .updateHighlight(player.filteredData.filter(rule),fill);
  };
};
