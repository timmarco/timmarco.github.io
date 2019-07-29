/* jshint esversion:6 */
ResultsPane.prototype.addBallsInPlay = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.swingResults,
    "leftLabel":"Balls In Play",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":"#666"
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightBallsInPlay(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
