/* jshint esversion:6 */
ResultsPane.prototype.addHomeRuns = function() {
  const pane = this;

  console.log("ADDING HOME RUNS");

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Home Runs",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins,
    "callbacks":{
      "mouseover":function() { pane.parent.highlightHomeRuns(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
