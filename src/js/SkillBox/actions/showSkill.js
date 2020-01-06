SkillBox.prototype.showSkill = function(skill) {
  const box = this;

  Object.keys(box.buttons).forEach((key) => {
    if(key == skill) {
      box.buttons[key].activate();
    } else {
      box.buttons[key].deactivate();
    }
  })

  return box;
}
