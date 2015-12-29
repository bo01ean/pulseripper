# pulseripper
A javascript tool to rip out your saved storied from pulse.me


##instructions

1. open up pulse.me and log in, then open up Chrome console and paste this script in
2. Run this first, but pay attention to when the story tiles stop loading!
```
scrollToLoadAllStories();
```
3. Then run this to get a rough estimate of how many stories you have saved
```
countSavedArticles();
```
4. Open up the first saved story at the top left of the page and run this to extract all links from your saved stories(this will take a while):
```
ripStoriesFromIFrame();
```
5. run this to Map it into exportable data
```
mapSavedArticles();
```
6. When that is done paste this console.save script into console: https://raw.githubusercontent.com/bgrins/devtools-snippets/master/snippets/console-save/console-save.js
7. Save your object to JSON from console:
```
console.save(linksArr);
```
