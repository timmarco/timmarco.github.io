SkillBoxGroup.prototype.addSkillCards = function() {
  const skillGroup = this;

  const skillCards = [];
  skillGroup.skills.forEach((skill,index) => {
    const coords = {};
    coords.x = (index % 2) * skillGroup.layout.gridWidth;
    coords.y = Math.floor(index / 2) * skillGroup.layout.gridHeight;
    const bounds = {};
    bounds.width = skillGroup.layout.gridWidth;
    bounds.height = skillGroup.layout.gridHeight;

    skillCards.push(new SkillBoxCard({
      "parent":skillGroup.parent,
      "skillGroup":skillGroup,
      "coords":coords,
      "bounds":bounds,
      "skill":skill,
      "index":index
    }));
  })

  return skillCards;
}
