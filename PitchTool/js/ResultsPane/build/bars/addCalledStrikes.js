/* jshint esversion:6 */
ResultsPane.prototype.addCalledStrikes = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Called Strikes",
    "size":{
      "width":pane.styles.width
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightCalledStrikes(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }

    // "margins":pane.styles.margins
  });

  return bar;
};
