/* jshint esversion:6 */
ResultsPane.prototype.addWhiffs = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Swinging Strikes",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins,
    "callbacks":{
      "mouseover":function() { pane.parent.highlightSwingingStrikes(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }

  });

  return bar;
};
