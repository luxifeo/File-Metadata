// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
setInterval(function() {
        $('div').css("color",randomColor());
},750);

function randomColor() {
	var color =  Math.floor(Math.random()*65536)
 return "#"+color.toString(16);
}