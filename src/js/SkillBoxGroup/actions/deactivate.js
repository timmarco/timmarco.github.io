SkillBoxGroup.prototype.deactivate = function() {
  const skillGroup = this;

  skillGroup.skillCards.forEach((card) => {
    card.deactivate();
  });

  return skillGroup;
}
