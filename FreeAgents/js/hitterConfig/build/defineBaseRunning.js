/* jshint esversion:6 */
HitterConfig.prototype.defineBaseRunning = function() {
  const config = this;
  let group;

  group = {
    "display":"Baserunning",
    "description":"Measures of player's overall contribution to team offense via baserunning."
  };

  let subGroups = [runPreventionTable()];

  return subGroups;

  function runPreventionTable() {
    let group = {
      "metrics":[]
    };

    group.metrics.push({
      "key":"baserunning_runs_above_average",
      "display":"Runs Above Average",
      "description":"Total baserunning runs added above average.",
      "source":"Fangraphs",
    });

    group.metrics.push({
      "key":"ultimate_base_running",
      "display":"UBR",
      "description":"Baserunning value in runs aside from caught stealing and stolen bases.",
      "source":"Fangraphs",
    });

    group.metrics.push({
      "key":"speed_score",
      "display":"Speed Score",
      "description":"Relative player speed.",
      "source":"Fangraphs",
    });

    group.metrics.push({
      "key":"gidp_above_runs",
      "display":"GIDP",
      "description":"Runs saved by avoiding grounding into double plays.",
      "source":"Fangraphs",
    });





  }
};
