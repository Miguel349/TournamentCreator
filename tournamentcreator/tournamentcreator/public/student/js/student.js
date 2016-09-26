/* Javascript for configuration of TournamentCreator. */
function student(runtime, element) {
    var questionId=0;
    var tournamentEnded=false;
    var questionCount=0;



    function loadSelectTournament() {
        $("#mainMenu").fadeOut();
        for(var i=0; i<tournamentsList.length;i++){
            $('#selectTournamentContainer').append("<div class='menu' value='"+tournamentsList[i].name+"'><h5 class=title>"+tournamentsList[i].name+"</h5></div>");
        }
        $("#selectTournament").show("slow");
        $('.menu', element).bind("click", function (e) {
            var id = $(this).attr('value');
            loadTournament(id);
            var count = 0;
            var size=0;
            var increment=false;
            var myTimer = setInterval(function () {
                count = count + 1;
                questionCount=questionCount+1;
                $(".countDown").text(questionCount);
                if(size>5){
                    increment=false;
                }
                if (size<-5){
                    increment=true;
                }
                document.getElementById("countDown").style.transform = "rotate("+size*7+"deg)";
                if(increment)
                    size=size+1;
                else
                    size=size-1;
                if (tournamentEnded) {
                    clearInterval(myTimer);
                    console.log("Tournament Ended");

                }
            }, 1000);
        });
    }


    function loadSelectResultsTournament() {
        $("#mainMenu").fadeOut();
        for(var i=0; i<tournamentsList.length;i++){
            $('#selectTournamentContainer').append("<div class='menu' value='"+tournamentsList[i].name+"'><h5 class=title>"+tournamentsList[i].name+"</h5></div>");
        }
        $("#selectTournament").show("slow");
        $('.menu', element).bind("click", function (e) {
            var id = $(this).attr('value');
            loadResultTournament(id);
            var count = 0;
            var size=0;
            var increment=false;
        });
    }

    function loadSelectAllResultsTournament() {
        $("#mainMenu").fadeOut();
        for(var i=0; i<tournamentsList.length;i++){
            $('#selectTournamentContainer').append("<div class='menu' value='"+tournamentsList[i].name+"'><h5 class=title>"+tournamentsList[i].name+"</h5></div>");
        }
        $("#selectTournament").show("slow");
        $('.menu', element).bind("click", function (e) {
            var id = $(this).attr('value');
            loadTournament(id);
            var count = 0;
            var size=0;
            var increment=false;
            var myTimer = setInterval(function () {
                count = count + 1;
                questionCount=questionCount+1;
                $(".countDown").text(questionCount);
                if(size>5){
                    increment=false;
                }
                if (size<-5){
                    increment=true;
                }
                document.getElementById("countDown").style.transform = "rotate("+size*7+"deg)";
                if(increment)
                    size=size+1;
                else
                    size=size-1;
                if (tournamentEnded) {
                    clearInterval(myTimer);
                    console.log("Tournament Ended");

                }
            }, 1000);
        });
    }

    function loadTournament(id){
        $("#selectTournament").fadeOut();
        //questionData=loadQuestionData(id);
        $('#submitQuestion',element).bind("click", submitQuestion);
        $('.studentAnswer',element).bind("click", function(e){
            $('.activeResult').removeClass("activeResult");
            $(this).addClass("activeResult");
        });
        loadQuestion();
    }
    function loadResultTournament(id){
        $("#selectTournament").fadeOut();
        //questionData=loadQuestionData(id);
        $("#view")
    }

    function submitQuestion(){
        //Post QuestionAnswer

        $("#hugeCount").text(questionCount);
        $("#hugeCount").fadeIn();
        $("#hugeCount").fadeOut(1000);
        questionCount=0;

        loadQuestion();
    }

    function loadQuestion(){
        $("#questionArea").fadeOut();
        if(questionId==questionData.length){
            endTournament();
            return;
        }
        $("#statement").text(questionData[questionId].statement);
        if(questionData[questionId].videoUrl!=undefined){
            $('#multimediaContainer').append("<iframe width='420' height='315'"+
            "src='"+questionData[questionId].videoUrl+"'>"+
            "</iframe>");
            $('#textContainer').text("");
        }
        else if(questionData[questionId].imageUrl!=undefined){
            $('#multimediaContainer').text("");
            $('#multimediaContainer').text(questionData[questionId].imageUrl);
            $('#textContainer').text("");
        }
        else if(questionData[questionId].text != undefined){
            $('#textContainer').text(questionData[questionId].text);
        }

        $('#result1Text').text(questionData[questionId].result1);
        $('#result2Text').text(questionData[questionId].result2);
        $('#result3Text').text(questionData[questionId].result3);
        $('#result4Text').text(questionData[questionId].result4);
        $("#questionArea").fadeIn();
        questionId=questionId+1;
    }

    function load(option){
        return;
    }

    function loadTournamentsStatistics(){

    }

    function loadTournamentResults(id){

    }

    function loadModifyTournament() {
        $(".mainMenu").fadeOut();
        $(".modifyTournamentSection").show("slow");
        $('#quest', element).bind("click", addNQuestions);
        $('#start', element).bind("click", sendData);
    }

    function loadShowTournamentsStatistics() {
        console.log("Showing Tournaments Statistics...");
        $("#mainMenu").fadeOut();
        $("#showTournamentsStatisticsSection").show("slow");
        studentData.push(calculateAverageData(studentData,questionsData.length));
        questionsData.push(calculateAverageData(questionsData, studentData.length));
    }

    function downloadData(){
       var contenidoEnBlob, nombreArchivo="file1";
            var reader = new FileReader();
            reader.onload = function (event) {
                var save = document.createElement('a');
                save.href = event.target.result;
                save.target = '_blank';
                save.download = nombreArchivo || 'archivo.dat';
                var clicEvent = new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                });
                save.dispatchEvent(clicEvent);
                (window.URL || window.webkitURL).revokeObjectURL(save.href);
            };
        var objectString="Student Data: \n";
        for(var i=0;i<studentData.length;i++){
            objectString=objectString+JSON.stringify(studentData[i])+"\n";
        }
        objectString=objectString+"\nQuestion Data:\n";

        for(var i=0;i<questionsData.length;i++){
            objectString=objectString+JSON.stringify(questionsData[i])+"\n";
        }
        var oMyBlob = new Blob([objectString], {type : 'json'});
            reader.readAsDataURL(oMyBlob);
    }

    function newMorrisLine(studentData, questionsData,id){
        /* var totalAnswers=studentData.length-1;
        new Morris.Donut({
            element: 'donut-example',
            data: [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
            ]
        });

        */
        console.log(studentData);
        console.log(questionsData);
        switch(id){
            case "PABS":
                new Morris.Bar({
                    // ID of the element in which to draw the chart.
                    element: id,
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    data: studentData,
                    // The name of the data record attribute that contains x-values.
                    xkey: 'id',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['percentage'],
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Percentage of correct answers by student']
                });
                break;
            case "ABS":
                new Morris.Bar({
                    // ID of the element in which to draw the chart.
                    element: id,
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    data: studentData,
                    // The name of the data record attribute that contains x-values.
                    xkey: 'id',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['points'],
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Correct answers by student']
                });
                break;
            case "TBS":
                new Morris.Bar({
                    // ID of the element in which to draw the chart.
                    element: id,
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    data: studentData,
                    // The name of the data record attribute that contains x-values.
                    xkey: 'id',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['time'],
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Time by student']
                });
                break;

            case "ABQ":

                new Morris.Bar({
                    // ID of the element in which to draw the chart.
                    element: id,
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    data: questionsData,
                    // The name of the data record attribute that contains x-values.
                    xkey: 'id',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['points'],
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Total points by question']
                });
                break;

            case "PABQ":

                new Morris.Bar({
                    // ID of the element in which to draw the chart.
                    element: id,
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    data: questionsData,
                    // The name of the data record attribute that contains x-values.
                    xkey: 'id',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['percentage'],
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Percentage of correct points by question']
                });
                break;

            case "TBQ":
                new Morris.Bar({
                    // ID of the element in which to draw the chart.
                    element: id,
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    data: questionsData,
                    // The name of the data record attribute that contains x-values.
                    xkey: 'id',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['time'],
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Time by question']
                });
                break;
        }










    }

    function calculateAverageData(data,length) {
        var max = 0;
        var maxId;
        var minId;
        var points = 0;
        var time = 0;
        var min = 10000;
        for (var i = 0; i < data.length; i++) {
            points = points + data[i].points;
            if (max > data[i].points) {
                max = data[i].points;
                maxId=data[i].id;
            }
            data[i].percentage=(data[i].points/length) * 100;
            time = time + data[i].time;
            if (min < data[i].time) {
                min = data[i].time;
                minId=data[i].id;
            }
        }
        var averageTime = time / data.length;
        var averagePoints = points / data.length;
        var average = {id:'average', points:averagePoints, percentage:(averagePoints/length)*100, time:averageTime, max: max, maxId:maxId, min:min, minId:minId};
        return average;
    }

    function addNQuestions() {
        console.log("Here");
        var i = 0;
        var n = ($('.NQuestions', element).val());
        for (i = 0; i < n; i++) {

            addQuestion();
            n_quest++;
        }
        $("select").change(function () {
            var selected = $(this).val();
            var id = $(this).attr('class');

            SelectOption(selected, id);
            console.log($(this));

        });


    }

    function addQuestion() {
        var QuestionTemplate = '<div id="Question' + n_quest + ' class="question""><p>Question ' + n_quest + '</p><select class=' + n_quest + ' id="' + n_quest + '"><option value="Select">Select a Type</option><option value="Multiple">MultipleQuestion</option><option value="Image">Image and Text</option><option value="Video">Video and Text</option></select></div>';
        $('.questions', element).append(QuestionTemplate);
    }

    function selectOption(option, id) {

        if (option == "Multiple") {
            var QuestionTemplate = '<div class="Container' + id + '">';
            $('.Container' + id, element).remove();
            QuestionTemplate = '<div class="Container' + id + '">';
            var Question = '<br/>Question Text <input type="text" class="QuestionI' + id + '"><br/>';
            var answer1 = 'Answer 1 <input type="text" class="Answer' + id + '1"><br/>';
            var answer2 = 'Answer 2 <input type="text" class="Answer' + id + '2"><br/>';
            var answer3 = 'Answer 3 <input type="text" class="Answer' + id + '3"><br/>';
            var answer4 = 'Answer 4 <input type="text" class="Answer' + id + '4"><br/>';
            var correct_answer = 'Correct Answer <input type="number" class="Correct' + id + '"><br/>';
            QuestionTemplate = QuestionTemplate + Question + answer1 + answer2 + answer3 + answer4 + correct_answer + "</div>";
            $('.Question' + id, element).append(QuestionTemplate);
            return;
        }

        if (option == "Image") {
            var QuestionTemplate = '<div class="Container' + id + '">';
            $('.Container' + id, element).remove();
            QuestionTemplate = '<div class="Container' + id + '">';
            var Question = '<br/>Question Text <input type="text" class="QuestionI' + id + '"><br/>';
            var answer1 = 'Answer<input type="text" class="Answer' + id + '"><br/>';
            var url = 'Url <input type="text" class="Url' + id + '"><br/>';
            var note = 'Tip<input type="text" class="Tip' + id + '"><br/>';
            QuestionTemplate = QuestionTemplate + Question + note + answer1 + url + "</div>";
            $('.Question' + id, element).append(QuestionTemplate);
            return;
        }
        if (option == "Video") {
            var QuestionTemplate = '<div class="Container' + id + '">';
            $('.Container' + id, element).remove();
            QuestionTemplate = '<div class="Container' + id + '">';
            var Question = '<br/>Question Text <input type="text" class="QuestionI' + id + '"><br/>';
            var answer1 = 'Answer<input type="text" class="Answer' + id + '"><br/>';
            var url = 'Url <input type="text" class="Url' + id + '"><br/>';
            var note = 'Tip<input type="text" class="Tip' + id + '"><br/>';
            QuestionTemplate = QuestionTemplate + Question + note + answer1 + url + "</div>";
            $('.Question' + id, element).append(QuestionTemplate);
            return;
        }
        else {
            alert("Not a valid option");
        }

    }

    function multipleQuestion() {


    }

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

    $(function ($) {
        $('#joinTournament', element).bind("click", loadSelectTournament);
        $('#seeResults', element).bind("click", loadSelectResultsTournament);
        $('#seeAllResults', element).bind("click", loadSelectAllResultsTournament);
    });
}


