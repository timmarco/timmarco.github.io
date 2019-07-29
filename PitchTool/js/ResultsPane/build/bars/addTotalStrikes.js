/* jshint esversion:6 */
ResultsPane.prototype.addTotalStrikes = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Total Strikes",
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[1]
      }
    },
    "size":{
      "width":pane.styles.width
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightTotalStrikes(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
