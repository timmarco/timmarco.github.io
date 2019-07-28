/* jshint esversion:6 */
ResultsPane.prototype.addTotalStrikes = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Total Strikes",
    "size":{
      "width":pane.styles.width
    },
    // "margins":pane.styles.margins
  });

  return bar;
};
