function SkillBox(parent) {
    const box = this;

    init(parent);

    return box;

    function init(parent) {
      box.parent = parent;

      box.layout = box.defineLayout();
      box.skillSvgs = box.addSkillSvgs();

      box.svg = box.addSvg();
      box.layers = box.addLayers();
      box.buttons = box.addButtons();
      box.layoutButtons()

      box.buttons.languages.activate();
      box.applyLayout();


    }
}
