function PitcherConfig() {
  const config = this;
  init();
  return config;

  function init() {
    config.totalValue = config.defineTotalValue();
    config.pitchingOutcomes = config.definePitchingOutcomes();
    config.pitchDetails = config.definePitchDetails();

    config.tables = [config.totalValue,config.pitchingOutcomes,config.pitchDetails];
  }
}
