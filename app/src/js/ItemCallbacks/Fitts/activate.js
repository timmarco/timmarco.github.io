function activateFittsLaw(where) {

  const content = new PortfolioItemContent(where)
    .vimeo("523023575","app/assets/previews/fittsPreview.jpeg")
    .div("<p class='videoCaption'><em>Scroll to the bottom to see the full explorable</em></p>")
    .div("<div class='explanation-div'><h1>AN EXPLORABLE EXPLANATION</h1><p>I've long been inspired by Bret Victor's concept of <a href=\"http://worrydream.com/ExplorableExplanations/\" target=\"_blank\">Explorable Explanations</a>, which are interactive documents to encourage active reading. I wanted to try my hand at creating one of these documents in part as an exercise in anticipating and responding to how readers think about complex topics.</p></div>")
    .div("<img src='app/assets/media/fittsNotes.jpeg' style='width:100%'  />")
    .div("<p style='width:90%; margin:auto'>Creating an Explorable Explanation has as much in common with typical user interface design as it does with essay or textbook writing. While planning this project, I spent as much time designing and coding interactions as I did researching and writing about Fitts' Law.</p> ")
    .div("<p style='width:90%; margin:auto; padding-top:1em; margin-bottom:3em'>Yet by the end of the project, I was struck by how similar those seemingly disparate activities actually are.</p> ")
    .div("<div style='text-align:right; margin-top:2em'><a href='https://timmarco.com/fitts' target='_blank'><div class='callDown'>VIEW THE EXPLORABLE (OPENS A NEW TAB)</div><img src='app/assets/media/fittsScreenshot.png'/ class='link-screenshot-image''></a></div>");

  return content;

}
