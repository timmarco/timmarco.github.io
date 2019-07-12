/* jshint esversion:6 */
ModelerKey.prototype.hideSimilarPlayers = function() {
  const key = this;

  key.similarPlayers.group
    .attr("display","none");

  key
    .layout();

  return key;
};
