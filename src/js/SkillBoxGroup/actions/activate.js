SkillBoxGroup.prototype.activate = function() {
  const skillGroup = this;

  skillGroup.skillCards.forEach((card,index) =>{
    card.activate(index * 200);
  });

  return skillGroup;
}
