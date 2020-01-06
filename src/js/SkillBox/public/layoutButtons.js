SkillBox.prototype.layoutButtons = function() {
  const box = this;

  let runningX = 0;

  Object.keys(box.buttons).forEach((key) => {
    const button = box.buttons[key];
    button.move({
      "x":runningX,
      "y":0
    });

    runningX += button.getSize().width + 20;
  });

}
