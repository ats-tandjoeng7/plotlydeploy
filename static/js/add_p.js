// UCB-VIRT-DATA-ANALYTICS-2022, Parto T.

// insert a paragraph about each chart
function addP(txt, divId) {
  var newP = `<p class="fs1x">${txt}</p>`;
  var htmlDiv = document.getElementById(divId);
  htmlDiv.innerHTML = newP;
}

const aboutBar = "The bar chart shows the top 10 bacteria cultures that were found in a volunteer's navel sorted by the corresponding operational taxonomic units (OTUs). Hovering over each bar will give the label(s) of the bacteria cultures.";
const aboutGauge = "The indicator gauge with colorful ranges can be used to explore the washing frequency of the belly button of each volunteer who participated in our study. The black indicator provides the washing frequency of a certain volunteer.";
const aboutBubble = "The bubble plot shows all the bacteria cultures per sample found in a volunteer's navel against the corresponding sample values. When viewing on small screens, resolution of the bubble plot will be better in horizontal mode.";
addP(aboutBar, Object.keys({aboutBar})[0]);
addP(aboutGauge, Object.keys({aboutGauge})[0]);
addP(aboutBubble, Object.keys({aboutBubble})[0]);
