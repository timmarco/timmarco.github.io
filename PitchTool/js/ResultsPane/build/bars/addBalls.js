/* jshint esversion:6 */
ResultsPane.prototype.addBalls = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Balls",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[0]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightBalls(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
