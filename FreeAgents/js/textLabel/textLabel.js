/* jshint esversion:6 */
function TextLabel(options) {
  const label = this;

  init(options);

  return label;

  function init(options) {
    label.values = options.values;
    label.text = options.text;
    label.styles = label.defineStyles(options);
    label.group = label.addGroup(options.where);
    label.background = label.addBackground(options);
    label.foreground = label.addForeground(options);
  }
}
