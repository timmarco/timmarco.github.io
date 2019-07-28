/* jshint esversion:6 */
Player.prototype.constructHighlightRule = function(rule) {
  const player = this;

  return () => {
    player.catcherView
      .updateHighlight(player.filteredData.filter(rule));
  };
};
