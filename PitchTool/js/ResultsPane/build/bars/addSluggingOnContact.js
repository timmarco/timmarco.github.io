/* jshint esversion:6 */
ResultsPane.prototype.addSluggingOnContact = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Slugging On Contact",
    "size":{
      "width":pane.styles.width
    }
  });

  return bar;
};
