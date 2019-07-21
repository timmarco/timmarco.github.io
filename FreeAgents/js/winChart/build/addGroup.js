/* jshint esversion:6 */
WinChart.prototype.addGroup = function(where) {
  const chart = this;

  let group = where
    .append("g");

  return group;
}
