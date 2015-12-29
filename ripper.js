
var scrollSpeed = 3000;
var ripSpeed = 3000;
var last = 0;
var pid = null;
var links = [];
var linksArr = [];

function scrollIt() {
  var objDiv = document.getElementById("tile-grid");
  objDiv.scrollTop = objDiv.scrollHeight;
}

function getLinks(){
	// click next arrow.
	$('#next_article_button').click();
	$('.reading-view-frame').load(function(){
		window.console.debug("iFrame Loaded!");
		links.push($('iframe:last').contents()[0].links)
	});
	if(links.length == articles) {
		console.log("We are done, clearing timeout.");
		clearTimeout(pid)
	} else {
		console.log("articles", articles, "links.length", links.length);
		articles--;
	}
}

function countSavedArticles() {
  clearTimeout(pid);
  var articles = 0;
  var saved = [];

  $('#tile-grid div.story_tile').each(function(i,o) {
  	var obj = {};
  	obj['title'] = $(o).find('div.title').html();
  	obj['bg'] = $(o).find('div.story-bg').attr('style');
  	var source = $(o).find('div.source').html();
  	if(obj['bg'] != undefined) {
  		if(saved[source] == undefined) {
  			saved[source] = [];
  		}
  		articles++;
  		obj.markup = o;
  		saved[source].push(obj);
  	}
  });
  console.log("articles", articles);
  console.log("saved", saved);
}

function mapSavedArticles(){
  clearTimeout(pid);
  links.map(function(o,i){
  	for(var l in o) {
  	if(o[l] != undefined) {
  			if(o[l].href != undefined) {
  				var obj = {};
  				for(var attr in o[l]) {
  					obj[attr] = o[l][attr];
  				}
  				linksArr.push(obj);	
  			}
  		}
  	}
  })
}  

function scrollToLoadAllStories() {
  	window.location='saved';
    pid = setInterval(function(){scrollIt();}, scrollSpeed);
}

function ripStoriesFromIFrame() {
  pid = setInterval(function(){ getLinks(); }, ripSpeed);
}


////1. open up pulse.me and log in.
////2. open up Chrome console and paste this script in
////2. Run this first, but pay attention to when the story tiles stop loading!
  //scrollToLoadAllStories();
////3. Then run this to get a rough estimate of how many stories you have saved
  //countSavedArticles();
////4. Open up the first saved story at the top left of the page and run this to extract all links from your saved stories(this will take a while):
  //ripStoriesFromIFrame();
////5. run this to Map it into exportable data
  //mapSavedArticles();
////6. When that is done paste this console.save script into console: https://raw.githubusercontent.com/bgrins/devtools-snippets/master/snippets/console-save/console-save.js
////7. Save your object to JSON from console:
  //console.save(linksArr)


