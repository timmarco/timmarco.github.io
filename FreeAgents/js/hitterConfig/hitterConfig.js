function HitterConfig() {
  const config = this;
  init();
  return config;

  function init() {
    config.totalValue = config.defineTotalValue();
    config.batting = config.defineBatting();
    config.runPrevention = config.defineRunPrevention();
    config.baseRunning = config.defineBaseRunning();

    config.tables = [
      {
        "name":"Total Value",
        "tables":config.totalValue,
        "description":"Measures of the player's total contribution to his team."
      },
      {
        "name":"Batting",
        "description":"Measures of the player's batting contributions to his team.",
        "tables":config.batting
      },
  ];
  }
}
