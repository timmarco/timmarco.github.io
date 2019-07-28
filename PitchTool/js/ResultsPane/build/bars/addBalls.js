/* jshint esversion:6 */
ResultsPane.prototype.addBalls = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Balls",
    "size":{
      "width":pane.styles.width
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightBalls(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }

    // "margins":pane.styles.margins
  });

  return bar;
};
