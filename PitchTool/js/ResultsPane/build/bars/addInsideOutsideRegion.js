/* jshint esversion:6 */
ResultsPane.prototype.addInsideRegionOutsideRegion = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "title":"Highlighted Pitches",
    "leftLabel":"In Region",
    "rightLabel":"Outside",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins
  });

  return bar;
};
