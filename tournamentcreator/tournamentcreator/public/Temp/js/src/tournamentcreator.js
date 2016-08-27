/* Javascript for mytestXBlock. */
function TCXblock(runtime, element) {
	
	function SelectView(){
		$('.text_t',element).append('Select date of assesment: <input type="datetime-local" class="TournamentLeft"><br/>');
		$('.text_t',element).append('Select number of questions of assesment: <input type="number" class="Nquestions"><br/>');
		$('.text_t',element).append('<button class="StartTest">Start Test deadline</button>');
		$('.StartTest', element).bind("click", QuestionsView);
		//var myVar=setInterval(function(){updateCount()},new Date("May 19, 2014 09:00:00"));
		//$('.start',element).remove();
		return;
	}
	
	function Login(){
		alert("5");
		$('.menu',element).append('User: <input type="name" class="username"><br/>');
		$('.menu',element).append('Password: <input type="number" class="pass"><br/>');
		$('.menu',element).append('<button class="Submit">Login</button>');
		$('.Submit', element).bind("click", SendData());
		//var myVar=setInterval(function(){updateCount()},new Date("May 19, 2014 09:00:00"));
		//$('.start',element).remove();
		return;
	}
	
	function SendData(){
		alert($('.username', element).val().toString());
		alert($('.pass', element).val().toString());
        }
	
	function QuestionsView (){
		alert($('.TournamentLeft', element).val().toString());
		var date= new Date($('.TournamentLeft', element).val());		
		var d=new Date();
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

	$('.login', element).bind("click",Login);
        $(function ($) {
		/* Here's where you'd do things on page load. */
		alert("5");
		$('.login', element).bind("click",Login);
        });
}
