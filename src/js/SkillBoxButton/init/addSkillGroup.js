SkillBoxButton.prototype.addSkillGroup = function(skills) {
  const button = this;
  const skillGroup = new SkillBoxGroup({
    "parent":button.parent,
    "skills":skills
  });
  return skillGroup;
}
