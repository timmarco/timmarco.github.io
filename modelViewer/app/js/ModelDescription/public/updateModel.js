ModelDescription.prototype.updateModel = function(model) {
  const description = this;

  description.svg
    .selectAll("*")
    .remove();

  const body = new ModelDescriptionBody({
    "parent":description,
    "model":model
  });

  const headline = new ModelDescriptionHeadline({
    "parent":description,
    "model":model
  });

  body
    .transitionIn();

  headline
    .transitionIn();
}
