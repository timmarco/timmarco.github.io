/* jshint esversion:6 */
ResultsPane.prototype.addOuts = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.swingResults,
    "leftLabel":"Outs",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[3]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightOuts(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }

  });

  return bar;
};
