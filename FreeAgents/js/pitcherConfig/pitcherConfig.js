function PitcherConfig() {
  const config = this;
  init();
  return config;

  function init() {

    config.totalValue = config.defineTotalValue();
    config.pitchingOutcomes = config.definePitchingOutcomes();
    // config.pitchDetails = config.definePitchDetails();


    config.tables = [
      {
        "name":"Total Value",
        "tables":config.totalValue,
        "description":"Measures of the pitcher's total contribution to his team."
      },
      {
        "name":"Pitching Outcomes",
        "description":"Measures of the player's pitching results.",
        "tables":config.pitchingOutcomes
      },
      // {
      //   "name":"Pitch Details",
      //   "description":"Specific measures of individual pitches and tendencies",
      //   "tables":config.pitchDetails
      // }
  ];

  }
}
