/* jshint esversion:6 */
CatcherView.prototype.addGroup = function() {
  const view = this;
  let group = view.where
    .append("g");
  return group;
};
