/* jshint esversion:6 */
ResultsPane.prototype.addInsideRegionOutsideRegion = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.sampleSize,
    "title":"Sample Size",
    "leftLabel":"Pitches",
    "rightLabel":"Outside",
    "styles":{
      "active":{
        "fill":"#666"
      }
    },
    "size":{
      "width":pane.styles.width
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightInRegion(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};
