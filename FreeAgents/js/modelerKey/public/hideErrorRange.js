/* jshint esversion:6 */
ModelerKey.prototype.hideErrorRange = function() {
  const key = this;

  key.errorRange.group
    .attr("display","none");

  key
    .layout();

  return key;
};
