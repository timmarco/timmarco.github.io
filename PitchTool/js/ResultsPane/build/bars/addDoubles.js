/* jshint esversion:6 */
ResultsPane.prototype.addDoubles = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Doubles",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[2]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightDoubles(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
