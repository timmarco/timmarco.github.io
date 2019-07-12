/* jshint esversion:6 */
PitcherConfig.prototype.definePitchDetails = function() {
  const config = this;
  let group;

  group = {
    "display":"Pitch Details",
    "description":"Measures of tendency and effectiveness by pitch type."
  }

  let subGroups = [
    config.definePitchFrequency(),
  ];

  return subGroups;
}
