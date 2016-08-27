/* Javascript for configuration of TournamentCreator. */
function Config(runtime, element) {

    function AddQuestion(){

    	
    }
    
function Load (){
                 alert("a");
                $( ".Main_Menu" ).fadeOut();
                $( ".Main_Menu" ).remove();
                
                $.get("New_Tournament.html", function(data){
		$(".Studio").append(data);
		});
                
		
		}
    function new_tournament(){
                Load();
                }
    function modify_tournament(){}
    function show_results(){}
    function show_tournaments(){}
    
                
    function SendData(){
    alert("Sending");
    var handlerUrl = runtime.handlerUrl(element, 'New_Tournament');
    var n=1;
    //runtime.notify('save', {state: 'start'});
    $.post(handlerUrl, JSON.stringify(option)).done(function(response) {
    //runtime.notify('save', {state: 'end'});
    });		
}

    $(function ($) {
    $('#New_Tournament', element).bind("click", Load);
   
        /* Here's where you'd do things on page load. */
	
	
	
    });
}


