/* jshint esversion:6 */
ResultsPane.prototype.addDoubles = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Doubles",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins,
    "callbacks":{
      "mouseover":function() { pane.parent.highlightDoubles(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
