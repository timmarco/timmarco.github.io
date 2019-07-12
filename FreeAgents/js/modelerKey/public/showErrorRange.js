/* jshint esversion:6 */
ModelerKey.prototype.showErrorRange = function() {
  const key = this;

  key.errorRange.group
    .attr("display","none");

  key
    .layout();

  return key;
};
