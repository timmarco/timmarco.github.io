/* jshint esversion:6 */
ResultsPane.prototype.addSwingsNoSwings = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Swings",
    "rightLabel":"No Swing",
    "styles":{
      "active":{
        "fill":"#666",
      }
    },
    "size":{
      "width":pane.styles.width
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightSwings(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
