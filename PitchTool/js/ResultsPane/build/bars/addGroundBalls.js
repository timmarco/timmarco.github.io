/* jshint esversion:6 */
ResultsPane.prototype.addGroundBalls = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.swingResults,
    "title":"Ground Balls",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins
  });

  return bar;
};
