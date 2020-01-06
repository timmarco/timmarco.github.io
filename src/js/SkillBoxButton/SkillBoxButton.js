function SkillBoxButton(options) {
  const button = this;
  init(options);
  return button;

  function init(options) {
    button.parent = options.parent;
    button.key = options.key;
    button.group = button.addGroup();
    button.rect = button.addRect();
    button.curtain = button.addCurtain();
    button.text = button.addText(options.text);
    button.highlightLine = button.addHighlight();

    button.skillGroup = button.addSkillGroup(options.skills);

    button.resizeRect();

  }

}
