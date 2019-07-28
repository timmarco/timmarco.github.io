/* jshint esversion:6 */
ResultsPane.prototype.addSingles = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Singles",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins,
    "callbacks":{
      "mouseover":function() { pane.parent.highlightSingles(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
