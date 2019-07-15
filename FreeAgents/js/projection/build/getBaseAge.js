/* jshint esversion:6 */
Projection.prototype.getBaseAge = function() {
  const projection = this;

  let baseAge = projection.data[Object.keys(projection.data)[Object.keys(projection.data).length - 1]].age;

  return baseAge;
};
