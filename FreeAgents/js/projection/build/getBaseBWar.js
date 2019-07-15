/* jshint esversion:6 */
Projection.prototype.getBaseBWar = function() {
  const projection = this;
  let baseBWar = projection.data[Object.keys(projection.data)[Object.keys(projection.data).length - 1]].bWar;
  return baseBWar;
};
