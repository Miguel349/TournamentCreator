/* Javascript for mytestXBlock. */
function mytestXBlock(runtime, element) {

    function updateCount(result) {
	var d = new Date();
	var d1 = new Date("October 20, 2014 11:13:00")
	var calculate=parseInt((d1.getTime()-d.getTime())/(24*3600*1000));
	
	$('.fdate', element).text(d1.toString());
        $('.date', element).text(d.toLocaleTimeString());
	$('.count', element).text(calculate.toString());
	
    }

    var handlerUrl = runtime.handlerUrl(element, 'increment_count');
var myVar=setInterval(function(eventObject) {
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({"hello": "world"}),
            success: updateCount
        });
    },1000);
    

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}
