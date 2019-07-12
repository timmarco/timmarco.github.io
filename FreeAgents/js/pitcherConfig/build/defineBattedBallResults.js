/* jshint esversion:6 */
PitcherConfig.prototype.definePitchingOutcomes = function() {
  const config = this;
  let group;

  group = {
    "display":"Pitching Outcomes",
    "description":"Measures of the outcomes of plate appearances."
  };

  let subGroups = [
      config.definePitchingOutcomesOverview(),
      config.definePitcherControl(),
      config.defineTeamResults(),
      config.defineBattedBallLocation(),
      config.defineContactType()
    ];

  return subGroups;
};
