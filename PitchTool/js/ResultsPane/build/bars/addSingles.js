/* jshint esversion:6 */
ResultsPane.prototype.addSingles = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Singles",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[2]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightSingles(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
