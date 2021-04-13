function PortfolioItemContent(where) {
  const content = this;
  init(where);
  return content;

  function init(where) {
    content.where = where;
    content.containerDiv = content.addContainerDiv();
    content.videoDiv = content.addVideoDiv();
    content.descriptionDiv = content.addDescriptionDiv();
  }
}
