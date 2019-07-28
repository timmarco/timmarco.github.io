/* jshint esversion:6 */
ResultsPane.prototype.addSwingsNoSwings = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Swing",
    "rightLabel":"No Swing",
    "size":{
      "width":pane.styles.width
    },
    "margins":pane.styles.margins
  });

  return bar;
};
