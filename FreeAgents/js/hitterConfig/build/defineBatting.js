/* jshint esversion:6 */
HitterConfig.prototype.defineBatting = function() {
  const config = this;
  let group;

  group = {
    "display":"Batting",
    "description":"Measures of player's batting contributions."
  }

  let subGroups = [config.defineBattingOverview(),config.defineBattingResults(),config.defineBattingApproach()];

  return subGroups;
}
