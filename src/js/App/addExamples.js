TimApp.prototype.addExamples = function(list) {
  const app = this;
  const examples = [];

  if(app.browserInfo.isTouchDevice) {
    app.swipeIndicator = new SwipeIndicator(app,list.length + 1);
    app.swipeContainer = app.addExampleSwipes();
    list.forEach((item,index) => {
      examples.push(new MobileWorkExample(item,index,app));
    });

  } else {
    list.forEach((item,index) => {
      examples.push(new WorkExample(item,index,app))
    });
  }


  return examples;
}
