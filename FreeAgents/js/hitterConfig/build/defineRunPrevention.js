/* jshint esversion:6 */
HitterConfig.prototype.defineRunPrevention = function() {
  const config = this;
  let group;

  group = {
    "heading":"",
    "display":"Run Prevention",
    "description":"Measures of player's overall contribution to run prevention."
  }

  let subGroups = [runPreventionTable()];

  return subGroups;

  function runPreventionTable() {
    let group = {
      "metrics":[]
    };

    group.metrics.push({
      "key":"ultimate_zone_rating_150",
      "display":"UZR / 150",
      "description":"Fangraphs' Ultimate Zone Rating. Measured in runs saved above average per 150 games.",
      "source":"Fangraphs",
      "shareScale":[]
    });

    group.metrics.push({
      "key":"error_runs_saved",
      "display":"Error Runs",
      "description":"Runs saved by avoiding errors relative to average player.",
      "source":"Fangraphs",
      "shareScale":[]
    });

    group.metrics.push({
      "key":"error_runs_saved",
      "display":"Error Runs",
      "description":"Runs saved by avoiding errors relative to average player.",
      "source":"Fangraphs",
      "shareScale":[]
    });

    group.metrics.push({
      "key":"range_runs_saved",
      "display":"Range Runs",
      "description":"Runs saved by fielder's range relative to average player.",
      "source":"Fangraphs",
      "shareScale":[]
    });

    group.metrics.push({
      "key":"double_play_runs_saved",
      "display":"Double Plays",
      "description":"Runs saved by fielder's contribution to double plays relative to average player.",
      "source":"Fangraphs",
      "shareScale":[]
    });



  }
}
