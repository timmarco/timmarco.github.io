SkillBox.prototype.addSkillSvgs = function() {
  const box = this;
  const skillSvgs = [];
  d3.range(0,4).forEach((counter) => {
    const height = window.innerHeight * 0.4;
    const width = window.innerWidth * 0.5;

    const svg = d3.select("#skillBoxSkillSvgs")
      .append("svg")
      .attr("width",width)
      .attr("height",height)
      .style("margin",0)
      .style("padding",0);

    skillSvgs.push(svg);
  });

  return skillSvgs;
}
