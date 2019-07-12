/* jshint esversion:6 */
PlayerMenu.prototype.defineFilters = function() {
  const menu = this;

  let filters = {};
  filters.name = "";
  filters.catcher = true;
  filters.firstBase = true;
  filters.secondBase = true;
  filters.shortstop = true;
  filters.thirdBase = true;
  filters.leftField = true;
  filters.centerField = true;
  filters.rightField = true;
  filters.starter = true;
  filters.reliever = true;

  return filters;
};
