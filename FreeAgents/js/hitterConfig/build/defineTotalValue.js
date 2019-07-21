/* jshint esversion:6 */
HitterConfig.prototype.defineTotalValue = function() {
  const config = this;
  let group;

  group = {
    "display":"Total Value",
    "description":"Measures of player's overall contribution to team performance."
  }

  let subGroups = [config.defineFangraphsValue(),config.defineBBRefValue()];

  return subGroups;
}
