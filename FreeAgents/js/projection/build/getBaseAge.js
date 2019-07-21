/* jshint esversion:6 */
Projection.prototype.getBaseAge = function() {
  const projection = this;

  let baseAge = projection.data.stats["2018"].age;

  return baseAge;
};
