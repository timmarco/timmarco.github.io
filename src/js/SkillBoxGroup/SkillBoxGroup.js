function SkillBoxGroup(options) {
  const skillGroup = this;
  init(options);
  return skillGroup;

  function init(options) {
    skillGroup.parent = options.parent;
    skillGroup.skills = options.skills;
    skillGroup.layout = skillGroup.defineLayout();
    skillGroup.group = skillGroup.addGroup();
    skillGroup.skillCards = skillGroup.addSkillCards();
  }
}
