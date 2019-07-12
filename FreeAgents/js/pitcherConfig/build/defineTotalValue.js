/* jshint esversion:6 */
PitcherConfig.prototype.defineTotalValue = function() {
  const config = this;
  let group;

  group = {
    "display":"Total Value",
    "description":"Measures of pitcher's overall contribution to team performance."
  };

  let subGroups = [config.defineFangraphsValue(),config.defineBBRefValue()];

  return subGroups;
};
