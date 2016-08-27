/* Javascript for configuration of TournamentCreator. */
function studio(runtime, element) {
 var n_quest=0;
    
    function Back(){
                    }
                    
function AnimateMenu(menu){
                if(menu=="new"){
                                }
                                
                if(menu=="modify"){
                                }
                                
                if(menu=="results"){
                                }
                                
                if(menu=="tournaments"){
                                }
                                
                $( ".Main_Menu" ).fadeOut( "slow", function() {
                // Animation complete.
                LoadNewTournament();
                });
                }
                
function LoadNewTournament(){
                
                $( ".configuration" ).show( "slow" );
                $('#quest', element).bind("click", AddNQuestions);
                $('#start', element).bind("click", SendData);
}

function LoadModifyTournament(){
                 
                $( ".configuration" ).show( "slow" );
                $('#quest', element).bind("click", AddNQuestions);
                $('#start', element).bind("click", SendData);
}

function LoadShowResults(){
              
                $( ".Main_Menu" ).fadeOut();
                $( ".Main_Menu" ).remove();
                $( ".configuration" ).show( "slow" );
                $('#quest', element).bind("click", AddNQuestions);
                $('#start', element).bind("click", SendData);
}

function LoadShowTournaments(){
               
                $( ".Main_Menu" ).fadeOut();
                $( ".Main_Menu" ).remove();
                $( ".configuration" ).show( "slow" );
                $('#quest', element).bind("click", AddNQuestions);
                $('#start', element).bind("click", SendData);
}

function AddNQuestions() {
                console.log("Here");
        var i=0;
	var n=($('.NQuestions', element).val());
	for (i=0;i<n;i++){
        
        AddQuestion();
        n_quest++;
}
$( "select" ).change(function () {
var selected=$(this).val();
var id=$(this).attr('class');

      SelectOption(selected,id);
      console.log($(this));

    });
     
    
    }

function AddQuestion(){
var QuestionTemplate='<div id="Question'+n_quest+'" class="question"><p>Question '+n_quest+'</p><select class='+n_quest+' id="'+n_quest+'"><option value="Select">Select a Type</option><option value="Multiple">MultipleQuestion</option><option value="Image">Image and Text</option><option value="Video">Video and Text</option></select></div>';
$('.questions',element).append(QuestionTemplate);		
}
    
function SelectOption(option, id) {

if(option=="Multiple"){
    var QuestionTemplate='<div class="Container'+id+'">';
    $('.Container'+id,element).remove();
    QuestionTemplate='<div class="Container'+id+'">';
    var Question='<br/>Question Text <input type="text" class="QuestionI'+id+'"></input><br/>';
    var answer1='Answer 1 <input type="text" class="Answer'+id+'1"></input><br/>';
    var answer2='Answer 2 <input type="text" class="Answer'+id+'2"></input><br/>';
    var answer3='Answer 3 <input type="text" class="Answer'+id+'3"></input><br/>';
    var answer4='Answer 4 <input type="text" class="Answer'+id+'4"></input><br/>';
    var correct_answer='Correct Answer <input type="number" class="Correct'+id+'"></input><br/>';
    QuestionTemplate=QuestionTemplate+Question+answer1+answer2+answer3+answer4+correct_answer+"</div>";
    $('.Question'+id,element).append(QuestionTemplate);	
return;
}

if(option=="Image"){
    var QuestionTemplate='<div class="Container'+id+'">';
    $('.Container'+id,element).remove();
    QuestionTemplate='<div class="Container'+id+'">';
    var Question='<br/>Question Text <input type="text" class="QuestionI'+id+'"></input><br/>';
    var answer1='Answer<input type="text" class="Answer'+id+'"></input><br/>';
     var url='Url <input type="text" class="Url'+id+'"></input><br/>';
     var note='Tip<input type="text" class="Tip'+id+'"></input><br/>';
    QuestionTemplate=QuestionTemplate+Question+note+answer1+url+"</div>"; 
    $('.Question'+id,element).append(QuestionTemplate);
    return;	
}
if (option=="Video"){
   var QuestionTemplate='<div class="Container'+id+'">';
    $('.Container'+id,element).remove();
    QuestionTemplate='<div class="Container'+id+'">';
    var Question='<br/>Question Text <input type="text" class="QuestionI'+id+'"></input><br/>';
    var answer1='Answer<input type="text" class="Answer'+id+'"></input><br/>';
     var url='Url <input type="text" class="Url'+id+'"></input><br/>';
     var note='Tip<input type="text" class="Tip'+id+'"></input><br/>';
    QuestionTemplate=QuestionTemplate+Question+note+answer1+url+"</div>"; 
    $('.Question'+id,element).append(QuestionTemplate);
return;
}
else{
alert("Not a valid option");
}

}
    
function MultipleQuestion(){

    	
    }
    
function SendData(){
    
    
    if(n_quest==0){
                alert("Not enough Questions");
    return;
    }
    
    var handlerUrl = runtime.handlerUrl(element, 'init_tournament');
    var n=1;
    var TN=$('.TName').val();
    alert(TN);
    var tournament = {
    TName: TN,
    NQuestions: n_quest,
    question: []
    };
    var type=[n_quest];
    var j=0;
    $('select').each(function( index ) {
    console.log($(this).val());
    type[j]=$(this).val();
    j++;
});
    for (var i = 0; i < n_quest; i++) { 
   alert($('.Correct'+i).val());
    if(type[i]=="Multiple"){
    tournament.question.push({ 
        "QuestionN" : i,
        "Type" : "Multiple",
        "Question" : ($('.QuestionI'+i, element).val()),
        "Answer1" : ($('.Answer'+i+'1', element).val()),
        "Answer2" : ($('.Answer'+i+'2', element).val()),
        "Answer3" : ($('.Answer'+i+'3', element).val()),
        "Answer4" : ($('.Answer'+i+'4', element).val()),
        "CAnswer" : ($('.Correct'+i, element).val()),
        
    });
                    }
    if(type[i]=="Image"){
                    
    tournament.question.push({ 
        "QuestionN" : i,
        "Type" : "Image",
        "Question" : ($('.QuestionI'+i, element).val()),
        "Tip" : ($('.Tip'+i, element).val()),
        "Answer" : ($('.Answer'+i, element).val()),
        "Url" : ($('.Url'+i, element).val()),
    });
    }
    
    if(type[i]=="Video"){
    tournament.question.push({ 
        "QuestionN" : i,
        "Type" : "Video",
        "Question" : ($('.QuestionI'+i, element).val()),
        "Tip" : ($('.Tip'+i, element).val()),
        "Answer" : ($('.Answer'+i, element).val()),
        "Url" : ($('.Url'+i, element).val()),
    });
}

   
    
}
		//runtime.notify('save', {state: 'start'});
		$.post(handlerUrl, JSON.stringify(tournament)).done(function(response) {
		//runtime.notify('save', {state: 'end'});
		});		
}

function modify_tournament(){}

function show_results(){}

function show_tournaments(){}
    
$(function ($) {
$('#New_Tournament', element).bind("click", AnimateMenu);
$('#Modify_Tournament', element).bind("click", LoadNewTournament);
$('#Show_Results', element).bind("click", LoadNewTournament);
$('#Show_Tournaments', element).bind("click", LoadNewTournament);
        /* Here's where you'd do things on page load. */
    });
}


