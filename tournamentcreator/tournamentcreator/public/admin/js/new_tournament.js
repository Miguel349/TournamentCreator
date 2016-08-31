/* Javascript for configuration of TournamentCreator. */


function Load (){
		$( ".Main_Menu" ).fadeOut();
		$( ".Main_Menu" ).remove();
		$.get("New_Tournament.html", function(data){
		$(".Studio").append(data);
		});
		$('.submit', element).bind("click", AddNQuestions);
		$('.start', element).bind("click", SendData);
		
		}
function New_Tournament(runtime, element) {
    var n_quest=0;
    function AddNQuestions() {
        var i=0;
	var n=($('.NQuestions', element).val());
	for (i=0;i<n;i++){
        n_quest++;
        AddQuestion();
     }
    }
    
    function AddQuestion(){

    var QuestionTemplate='<p>Question '+n_quest+'</p><input type="text" class="question'+n_quest+'"></input><br/>'
    var Question="";
    var answer1='Answer 1 <input type="text" class="Answer'+n_quest+'1"></input><br/>';
    var answer2='Answer 2 <input type="text" class="Answer'+n_quest+'2"></input><br/>';
    var answer3='Answer 3 <input type="text" class="Answer'+n_quest+'3"></input><br/>';
    var answer4='Answer 4 <input type="text" class="Answer'+n_quest+'4"></input><br/>';
    var correct_answer='Correct Answer <input type="number" class="Correct'+n_quest+'"></input><br/>';
    QuestionTemplate=QuestionTemplate+Question+answer1+answer2+answer3+answer4+correct_answer;
    $('.questions',element).append(QuestionTemplate);
		
    }
    function SendData(){
    if(n_quest==0){
		alert("Not enough Questions");
		return;
    }
    
    var handlerUrl = runtime.handlerUrl(element, 'init_tournament');
    var n=1;
    var questions = {
    question: []
		};
    for(n=1;n<n_quest+1;n++){


    questions.question.push({ 
        "QuestionN" : n,
	"Question" : ($('.question'+n, element).val()),
        "Answer1" : ($('.Answer'+n+'1', element).val()),
        "Answer2" : ($('.Answer'+n+'2', element).val()),
	"Answer3" : ($('.Answer3'+n+'3', element).val()),
	"Answer4" : ($('.Answer4'+n+'4', element).val()),
	"CAnswer" : ($('.Correct'+n, element).val()),
    });
    alert(n+" Question Added to Array")
}
		//runtime.notify('save', {state: 'start'});
		$.post(handlerUrl, JSON.stringify(questions)).done(function(response) {
		//runtime.notify('save', {state: 'end'});
		});		
}

    $(function ($) {
        
	
    });
}

