function SkillBoxCard(options) {
  const skill = this;
  init(options);
  return skill;

  function init(options) {
    skill.index = options.index;
    skill.parent = options.parent;
    skill.skillGroup = options.skillGroup;
    skill.details = options.skill;
    skill.coords = options.coords;
    skill.bounds = options.bounds;
    skill.imageSource = options.skill.imageSource;
    skill.imageSize = options.skill.imageSize;

    skill.layout = skill.defineLayout();

    skill.group = skill.addGroup();
    skill.layers = skill.addLayers();
    skill.image = skill.addImage();
    skill.headlineRect = skill.addHeadlineRect();
    skill.headlineText = skill.addHeadlineText();
    skill.body = skill.addBody();

    skill.resizeRect();
    skill.layoutCard();



  }
}
