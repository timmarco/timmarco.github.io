Portfolio.prototype.focusOnItem = function(whichItem) {
  const portfolio = this;
  portfolio.items
    .forEach((item) => {
      if(item === whichItem) {
        item
          .drawAttention();
      } else {
        item
          .reduceFocus();
      }
    })
}
