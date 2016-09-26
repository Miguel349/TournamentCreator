/**
 * Created by miguelpaganmurphy on 24/09/16.
 */

function SERVERINTERACTION (){

    function sendData() {
        if (n_quest == 0) {
            alert("Not enough Questions");
            return;
        }

        var handlerUrl = runtime.handlerUrl(element, 'init_tournament');
        var n = 1;
        var TN = $('.TName').val();
        alert(TN);
        var tournament = {
            TName: TN,
            NQuestions: n_quest,
            question: []
        };
        var type = [n_quest];
        var j = 0;
        $('select').each(function (index) {
            console.log($(this).val());
            type[j] = $(this).val();
            j++;
        });
        for (var i = 0; i < n_quest; i++) {
            alert($('.Correct' + i).val());
            if (type[i] == "Multiple") {
                tournament.question.push({
                    "QuestionN": i,
                    "Type": "Multiple",
                    "Question": ($('.QuestionI' + i, element).val()),
                    "Answer1": ($('.Answer' + i + '1', element).val()),
                    "Answer2": ($('.Answer' + i + '2', element).val()),
                    "Answer3": ($('.Answer' + i + '3', element).val()),
                    "Answer4": ($('.Answer' + i + '4', element).val()),
                    "CAnswer": ($('.Correct' + i, element).val()),

                });
            }
            if (type[i] == "Image") {

                tournament.question.push({
                    "QuestionN": i,
                    "Type": "Image",
                    "Question": ($('.QuestionI' + i, element).val()),
                    "Tip": ($('.Tip' + i, element).val()),
                    "Answer": ($('.Answer' + i, element).val()),
                    "Url": ($('.Url' + i, element).val()),
                });
            }

            if (type[i] == "Video") {
                tournament.question.push({
                    "QuestionN": i,
                    "Type": "Video",
                    "Question": ($('.QuestionI' + i, element).val()),
                    "Tip": ($('.Tip' + i, element).val()),
                    "Answer": ($('.Answer' + i, element).val()),
                    "Url": ($('.Url' + i, element).val()),
                });
            }


        }
        //runtime.notify('save', {state: 'start'});
        $.post(handlerUrl, JSON.stringify(tournament)).done(function (response) {
            //runtime.notify('save', {state: 'end'});
        });
    }

}