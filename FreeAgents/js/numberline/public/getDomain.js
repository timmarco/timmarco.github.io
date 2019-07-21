/* jshint esversion:6 */
Numberline.prototype.getDomain = function() {
  const line = this;
  return line.scale.domain();
}
