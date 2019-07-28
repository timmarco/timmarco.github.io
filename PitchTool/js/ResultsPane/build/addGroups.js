/* jshint esversion:6 */
ResultsPane.prototype.addGroups = function() {
  const pane = this;
  let groups = {};

  groups.summary = singleGroup();
  groups.battedBallResults = singleGroup();
  groups.swingResults = singleGroup();

  return groups;
  function singleGroup() {

    return pane.div
      .append("div")
      .classed("resultsPaneGroup",true);
  }
};
