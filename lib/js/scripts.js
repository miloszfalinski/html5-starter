/*
 * Site Name:
 * Author:
 *
 * Site Scripts go in here. Keep it organized!
 */

/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;

// as the page loads, call these scripts
jQuery(document).ready(function($) {

	/*
	 * Here's an example so you can see how we're using the above function
	 *
	 * This is commented out so it won't work, but you can copy it and
	 * remove the comments.
	 *
	 *
	 * If we want to only do it on a certain page, we can setup checks so we do it
	 * as efficient as possible.
	 *
	 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
	 *
	 * This once checks to see if you're on the home page based on the body class
	 * We can then use that check to perform actions on the home page only
	 *
	 * When the window is resized, we perform this function
	 * $(window).resize(function () {
	 *
	 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
	 *    if( is_home ) { waitForFinalEvent( function() {
	 *
	 *      // if we're above or equal to 768 fire this off
	 *      if( viewport.width >= 768 ) {
	 *        console.log('On home page and window sized to 768 width or more.');
	 *      } else {
	 *        // otherwise, let's do this instead
	 *        console.log('Not on home page, or window sized to less than 768.');
	 *      }
	 *
	 *    }, timeToWaitForLast, "your-function-identifier-string"); }
	 * });
	 *
	 *
	*/
}); /* end of as page load scripts */