/* jshint esversion:6 */
ResultsPane.prototype.addBallsInPlay = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.swingResults,
    "leftLabel":"Balls In Play",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins
  });

  return bar;
};
