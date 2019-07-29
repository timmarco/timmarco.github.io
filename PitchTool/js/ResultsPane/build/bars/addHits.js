/* jshint esversion:6 */
ResultsPane.prototype.addHits = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.swingResults,
    "leftLabel":"Hits",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[2]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightHits(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }

  });

  return bar;
};
