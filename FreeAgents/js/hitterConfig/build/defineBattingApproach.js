/* jshint esversion:6 */
HitterConfig.prototype.defineBattingApproach = function() {
  const config = this;
  let group;

  group = {
    "heading":"Batting Approach",
    "description":"Measures of hitter's approach and discipline.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });


  group.metrics.push({
    "key":"walk_rate",
    "display":"BB%",
    "description":"Percentage of at-bats resulting in non-intentional walks.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"strikeout_rate",
    "display":"K%",
    "description":"Percentage of at-bats resulting in strikeouts.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  group.metrics.push({
    "isHeader":true,
    "headerType":"strikeouts-walks",
    "startGroup":true
  });

  group.metrics.push({
    "key":"walk_strikeout_ratio",
    "display":"BB:K",
    "description":"Walk to strikeout ratio.",
    "source":"Fangraphs",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });

  group.metrics.push({
    "key":"total_contact_rate",
    "display":"Total Contact",
    "description":"Hitter's total contact rate on swings.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"swinging_strike_percentage",
    "display":"Swinging Strike Rate",
    "description":"Hitter's total contact rate on swings.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"outside_zone_swing_percentage",
    "display":"Outside Swing",
    "description":"Percentage of time batter swung at pitches outside the strike zone.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });


  group.metrics.push({
    "key":"inside_zone_swing_percentage",
    "display":"Inside Swing",
    "description":"Percentage of time batter swung at pitches inside the strike zone.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "endGroup":true
  });


  return group;

}
