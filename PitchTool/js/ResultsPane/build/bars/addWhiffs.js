/* jshint esversion:6 */
ResultsPane.prototype.addWhiffs = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Swinging Strikes",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[1]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightSwingingStrikes(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }

  });

  return bar;
};
