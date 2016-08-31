/* Javascript for mytestXBlock. */
function mytestXBlock(runtime, element) {

    function updateCount(date) {
	var d = new Date();
	var calculate=parseInt((date.getTime()-d.getTime())/(24*3600*1000));
	$('.fdate', element).text(date.toString());
        $('.date', element).text(d.toLocaleTimeString());
	$('.count', element).text(calculate.toString());
    }

    function questionView(questions){
		
	}
    var handlerUrl = runtime.handlerUrl(element, 'increment_count');
var myVar=setInterval(function(){updateCount()},new Date("May 19, 2014 09:00:00");
    

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}

