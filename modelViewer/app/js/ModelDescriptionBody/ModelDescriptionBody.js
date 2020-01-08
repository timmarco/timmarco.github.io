function ModelDescriptionBody(options) {
  const body = this;
  init(options);
  return body;

  function init(options) {
    body.parent = options.parent;
    body.text = options.model.description;

    body.foreignObject = body.addForeignObject();
    body.htmlBody = body.addHtmlBody();
    body.div = body.addDiv();

  }
}
