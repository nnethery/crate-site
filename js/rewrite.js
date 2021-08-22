// grab the current url
var url = window.location.href;

// if url is entered without the .html extension, make sure it directs to correct .html webpage
if(!url.includes('.html') && url.substr(url.lastIndexOf('/') + 1) !== ''){
	window.location.assign(url + '.html');
}

// if the url is index.html, then replace it with '/'
if(url.substr(url.lastIndexOf('/') + 1) == 'index.html') {
	window.history.replaceState(null , null, '/');
}
// if the url contains .html, then remove that from the url
else if (url.slice(-5) == '.html') {
	window.history.replaceState(null , null, url.slice(0, -5));
}