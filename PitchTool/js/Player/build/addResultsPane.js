/* jshint esversion:6 */
Player.prototype.addResultsPane = function() {
  const player = this;

  let pane = new ResultsPane({
    "parent":player
  });

  return pane;
};
