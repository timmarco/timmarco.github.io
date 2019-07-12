/* jshint esversion:6 */
function Button(options) {
  const button = this;
  init(options);
  return button;


  function init(options) {
    button.callback = () => { return null;};
    button.size = button.defineSize(options);
    button.styles = button.defineStyles(options);

    button.group = button.addGroup(options.where);
    button.rect = button.addRect();
    button.text = button.addText(options.text);

    if(options.coordinates !== undefined) {
      button
        .move(options.coordinates);
    }

  }
}
