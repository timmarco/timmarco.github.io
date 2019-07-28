/* jshint esversion:6 */
ResultsPane.prototype.addTriples = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Triples",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins,
    "callbacks":{
      "mouseover":function() { pane.parent.highlightTriples(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
