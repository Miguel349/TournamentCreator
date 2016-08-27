/* Javascript for mytestXBlock. */
function TClosed(runtime, element) {
	
        function updateCount(date) {
		var d = new Date();
		var calculate=parseInt((date.getTime()-d.getTime())/(24*3600*1000));
		$('.fdate', element).text(date.toString());
		$('.date', element).text(d.toLocaleTimeString());
		$('.count', element).text(calculate.toString());
        }

	
        $(function ($) {
		/* Here's where you'd do things on page load. */
		
}
