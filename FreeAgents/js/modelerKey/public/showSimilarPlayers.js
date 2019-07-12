/* jshint esversion:6 */
ModelerKey.prototype.showSimilarPlayers = function() {
  const key = this;

  key.similarPlayers.group
    .attr("display","none");

  key
    .layout();

  return key;
};
