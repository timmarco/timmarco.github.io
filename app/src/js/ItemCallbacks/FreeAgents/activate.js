function activateFreeAgents(where) {

  return new PortfolioItemContent(where)
    .vimeo("539927920","app/assets/previews/freeAgents.jpeg")
    .div("<p class='videoCaption'><em>Scroll to the bottom to see the live demo</em></p>")
    .div("<div class='explanation-div'><h1>AN EXPLORTAORY DAYA ANALYSIS DEMO</h1></div>")
    .div("<p style='width:90%; margin:auto'>Analyzing data can be as much an art as a science. The measure of a tool's effectiveness in Exploratory Data Analysis is the degree to which it helps users <em>discover new insights</em> and <em>contextualize information</em>.</p> ")
    .div("<p style='width:90%; margin:auto'>Here, I've created a demo of an EDA tool with a <em>very</em> specific audience in mind: Major League Baseball General Managers and front office staffs. The concept behind the tool is to help them evaluate hypothetical contracts for free agent players, by condensing simple projections of future performance with assumptions about the market rate of that performance.</p> ")
    .div("<p style='width:90%; margin:auto'>The tool is intended to be more of an illustration of EDA design principles (especially <a href='http://www.ifp.illinois.edu/nabhcs/abstracts/shneiderman.html' target='_new'>Ben Schneiderman's mantra</a> of <em>Overview First, aoom-and-filter, then details-on-Demand</em>) than a fully realized application.</p> ")
    .div("<div style='text-align:right; margin-top:2em'><a href='https://timmarco.com/FreeAgents' target='_blank'><div class='callDown'>VIEW THE DEMO (OPENS A NEW TAB)</div><img src='app/assets/media/freeAgents.png' class='link-screenshot-image' ></a></div>")

}
