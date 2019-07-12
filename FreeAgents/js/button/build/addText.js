/* jshint esversion:6 */
Button.prototype.addText = function(text) {
  const button = this;
  let label;


  label = new TextLabel({
    "where":button.group,
    "foregroundColor":button.styles.foregroundColor,
    "backgroundColor":button.styles.backgroundColor,
    "fontFamily":button.styles.fontFamily,
    "fontWeight":button.styles.fontWeight,
    "text":text
  }).show()
  .move({
    "x":button.size.width / 2,
    "y":button.size.height / 2
  });

  return label;
};
