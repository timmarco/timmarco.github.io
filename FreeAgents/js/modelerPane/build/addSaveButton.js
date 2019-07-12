/* jshint esversion:6 */
ModelerPane.prototype.addSaveButton = function() {
  const pane = this;

  let button;

  button = new Button({
    "where":pane.group,
    "text":"Save",
    "coordinates":pane.referencePoints.buttonCoordinates
  }).registerCallback(function() {
    pane.finishEditing();
  });

  return button;
};
