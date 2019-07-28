/* jshint esversion:6 */
ResultsPane.prototype.addOuts = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.swingResults,
    "leftLabel":"Outs",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins
  });

  return bar;
};
