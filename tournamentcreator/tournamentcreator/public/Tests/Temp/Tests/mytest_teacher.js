/* Javascript for mytestXBlock. */
function mytestXBlock(runtime, element) {
	
	function SelectView(){
	$('.text_t',element).append('Select date of assesment: <input type="datetime-local" class="TournamentLeft"><br/>');

	$('.text_t',element).append('Select number of questions of assesment: <input type="number" class="Nquestions"><br/>');
	$('.text_t',element).append('<button class="StartTest">Start Test deadline</button>');
	$('.StartTest', element).bind("click", QuestionsView);
	//var myVar=setInterval(function(){updateCount()},new Date("May 19, 2014 09:00:00"));
	//$('.start',element).remove();
	return;
	}
	function QuestionsView (){
		alert($('.TournamentLeft', element).val().toString());
		var date= new Date($('.TournamentLeft', element).val());		var d=new Date();
		var calculate=parseInt((date.getTime()-d.getTime())/(24*3600*1000));
	$('.fdate', element).text(date.toString());
        $('.date', element).text(d.toLocaleTimeString());
	$('.count', element).text(calculate.toString());
    
	}

    function updateCount(date) {
	var d = new Date();
	var calculate=parseInt((date.getTime()-d.getTime())/(24*3600*1000));
	$('.fdate', element).text(date.toString());
        $('.date', element).text(d.toLocaleTimeString());
	$('.count', element).text(calculate.toString());
    }

	$('.start', element).bind("click",SelectView);
   
    //var handlerUrl = runtime.handlerUrl(element, 'increment_count');
    //
    

    $(function ($) {
        /* Here's where you'd do things on page load. */
	
	
    });
}

