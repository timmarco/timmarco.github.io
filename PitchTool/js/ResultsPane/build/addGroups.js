/* jshint esversion:6 */
ResultsPane.prototype.addGroups = function() {
  const pane = this;
  let groups = {};

  groups.sampleSize = singleGroup();
  groups.summary = singleGroup();
  groups.swingResults = singleGroup();
  groups.battedBallResults = singleGroup();
  groups.pitches = singleGroup();

  return groups;
  function singleGroup() {

    return pane.div
      .append("div")
      .classed("resultsPaneGroup",true);
  }
};
