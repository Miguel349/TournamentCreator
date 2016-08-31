 /* Javascript for mytestXBlock. */
function TCXBlock(runtime, element) {
	
	function LoadNewTournament(){
                $( ".Main_Menu" ).fadeOut();
                var handlerUrl = runtime.handlerUrl(element, 'Load_Tournaments');
		$.post(handlerUrl, JSON.stringify("")).done(function(response) {
		var QuestionTemplate="<table border='1' width='100%' class='TList'>";
		for(var i in response){
		if(i%2==0){
				
		QuestionTemplate=QuestionTemplate+"<tr><td>"+response[i]['TName']+"</td>";
		}
		
		else{
		QuestionTemplate=QuestionTemplate+"<td>"+response[i]['TName']+"</td></tr>";
		}
		}
		var end_table="</table>";
		QuestionTemplate=QuestionTemplate+end_table;
		alert(QuestionTemplate);
		$('.Load_Tournaments',element).append(QuestionTemplate);
		});
         
	 }
	  
		function LoadModifyTournament(){
                $( ".Main_Menu" ).fadeOut();
                $( ".Main_Menu" ).remove();
                $( ".configuration" ).show( "slow" );
                $('.quest', element).bind("click", AddNQuestions);
                $('.start', element).bind("click", SendData);
		}

	function SelectView(){
		
		return;
	}
	
	function Login(){
		return;
	}
	
	
	
	function QuestionsView (){
		}

        function updateCount(date) {
		}

	
        $(function ($) {
        $('.Join_Tournament', element).bind("click", LoadNewTournament);
	})
}
