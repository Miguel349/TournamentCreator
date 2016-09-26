/* Javascript for configuration of TournamentCreator. */
function studio(runtime, element) {
    var nQuest = 0;
    var debug=true;
    var serverInteraction=SERVERINTERACTION();

    function back(){
        $("#mainMenu").fadeOut();
        $('#newTournamentSection', element).fadeOut();
        $('#mainMenu').show("slow");
    }


    function publishTournament(){
        $("#mainMenu").fadeOut();
        $("#publishTournamentSection").show("slow");
        for(var i=0; i<tournamentsActiveList.length;i++){
            $('#selectTournamentActiveContainer').append("<div class='menu' value='"+tournamentsActiveList[i].name+"'><h5 class='title'>"+tournamentsActiveList[i].name+"</h5></div>");
        }

        for(var i=0; i<tournamentsInactiveList.length;i++){
            $('#selectTournamentInactiveContainer').append("<div class='menu' value='"+tournamentsInactiveList[i].name+"'><h5 class='title'>"+tournamentsInactiveList[i].name+"</h5></div>");
        }

    }
    function loadNewTournament() {
        if (debug){
            console.log("Loading New Tournament Screen");
        }
        $("#mainMenu").fadeOut();
        $("#newTournamentSection").show("slow");
        $('#nQuest').bind("click", addNQuestions);
        $(".form-horizontal").submit(function(e){
            return false;
        });
        $('#back').bind("click",back);
        //$('#start', element).bind("click", serverInteraction.sendData);

    }


    function loadModifyTournament() {
        if (debug){
            console.log("Loading Modify Tournament Screen");
        }
        $(".mainMenu").fadeOut();
        $(".modifyTournamentSection").show("slow");
        $('#quest', element).bind("click", addNQuestions);
        $('#start', element).bind("click", serverInteraction.sendData);
    }



    function loadShowTournamentsStatistics() {
        $("input.checkbox").change(function() {
            if(this.checked) {
                $selector=$("#"+this.value+"row");
                $selector.show();
                if(!$selector.hasClass( "loaded" )){
                    newMorrisLine(studentData,questionsData,this.value);
                    $selector.addClass("loaded");
                }
            }
            else{
                $("#"+this.value +"row").hide();
            }
        });
        if (debug){
            console.log("Showing Tournaments Statistics...");
        }
        $("#mainMenu").fadeOut();
        $("#showTournamentsStatisticsSection").show("slow");
        studentData.push(calculateAverageData(studentData,questionsData.length));
        questionsData.push(calculateAverageData(questionsData, studentData.length));
    }

    function tournamentsStatistics(){
        $("input.checkbox").change(function() {
            if(this.checked) {
                $selector=$("#"+this.value+"row");
                $selector.show();
                if(!$selector.hasClass( "loaded" )){
                    newTournamentsStatistics(tournamentsResult,this.value);
                    $selector.addClass("loaded");
                }
            }
            else{
                $("#"+this.value +"row").hide();
            }
        });
        if (debug){
            console.log("Showing Tournaments Statistics...");
        }
        $("#mainMenu").fadeOut();
        $("#tournamentsStatisticsSection").show("slow");
        studentData.push(calculateAverageData(studentData,questionsData.length));
        questionsData.push(calculateAverageData(questionsData, studentData.length));
    }

    function newTournamentsStatistics(tournamentsResult,id){
        if(id=="AG"){
            new Morris.Line({
                parseTime:false,
                // ID of the element in which to draw the chart.
                element: id,
                // Chart data records -- each entry in this array corresponds to a point on
                // the chart.
                data: tournamentsResult,
                // The name of the data record attribute that contains x-values.
                xkey: 'name',
                // A list of names of data record attributes that contain y-values.
                ykeys: ['averageGrades'],
                // Labels for the ykeys -- will be displayed when you hover over the
                // chart.
                labels: ['Average Grades']
            });
        }
        if(id=="TG"){
            new Morris.Line({
                parseTime:false,
                // ID of the element in which to draw the chart.
                element: id,
                // Chart data records -- each entry in this array corresponds to a point on
                // the chart.
                data: tournamentsResult,
                // The name of the data record attribute that contains x-values.
                xkey: 'name',
                // A list of names of data record attributes that contain y-values.
                ykeys: ['averageQuestionTime'],
                // Labels for the ykeys -- will be displayed when you hover over the
                // chart.
                labels: ['name']
            });
        }
        if(id=="TT"){
            new Morris.Line({
                parseTime:false,
                // ID of the element in which to draw the chart.
                element: id,
                // Chart data records -- each entry in this array corresponds to a point on
                // the chart.
                data: tournamentsResult,
                // The name of the data record attribute that contains x-values.
                xkey: 'name',
                // A list of names of data record attributes that contain y-values.
                ykeys: ['averageTotalTime'],
                // Labels for the ykeys -- will be displayed when you hover over the
                // chart.
                labels: ['name']
            });
        }


    }

    function addNQuestions() {
        console.log("Here");
        var i = 0;
        var n = ($('#nQuestions').val());
        for (i = 0; i < n; i++) {
            addQuestion(nQuest);
            nQuest++;
        }

        $("select").change(function () {
            var selected = $(this).find(':selected').attr('value');
            console.log(selected);
            var id = $(this).attr('id');
            selectOption(selected, id);
            console.log("Adding fields");

        });
    }

    function addQuestion() {
        var QuestionTemplate = '<div id="Question' + nQuest + '"class="question">' +
            '<h5 class="display">Question ' + nQuest + '</h5>' +
            '<select class="display selectType ' + nQuest + '" id="' + nQuest + '">' +
            '<option value="Select">Select a Type</option>' +
            '<option value="Text">Text</option>' +
            '<option value="Image">Image and Text</option>' +
            '<option value="Video">Video and Text</option>' +
            '</select>'+
            '<div class="destroy">X</div></div>';
        $('.questions').append(QuestionTemplate);
    }


    function selectOption(option, id) {
        $('.Container' + id, element).remove();
        var QuestionTemplate = '<div class="Container' + id + '">';
        var Question = '<br/><div class="row marginTS"><div class="col-xs-3"><label class="control-label">Question Text </label></div><div class="col-xs-8"><input type="text" placeholder="Question Title" class="form-control QuestionI' + id + '"></div></div>';
        var QuestionStatement;
        var answer1 = '<div class="row marginTS"><div class="col-xs-3"><label class="control-label">Answer 1 </label> </div><div class="col-xs-8"><input type="text" placeholder="Answer" class="form-control Answer' + id + '1"></div></div>';
        var answer2 = '<div class="row marginTS"><div class="col-xs-3"><label class="control-label">Answer 2 </label> </div><div class="col-xs-8"><input type="text" placeholder="Answer" class="form-control Answer' + id + '2"></div></div>';
        var answer3 = '<div class="row marginTS"><div class="col-xs-3"><label class="control-label">Answer 3 </label> </div><div class="col-xs-8"><input type="text" placeholder="Answer" class="form-control Answer' + id + '3"></div></div>';
        var answer4 = '<div class="row marginTS"><div class="col-xs-3"><label class="control-label">Answer 4 </label> </div><div class="col-xs-8"><input type="text" placeholder="Answer" class="form-control Answer' + id + '4"></div></div>';
        var correctAnswer = '<div class="row marginTS"><div class="col-xs-3"><label class="control-label">Correct Answer </label> </div><div class="col-xs-8"><input type="number" class="form-control Correct' + id + '" placeholder="Correct Answer in Number format"></div></div>';

        if (option == "Text") {
            QuestionStatement = '<div class="row marginTS"><div class="col-xs-3"><label class="control-label">Question Additional Statement </label></div><div class="col-xs-8"><input type="text" placeholder="Question Additional Statement" class="form-control QuestionBodyI' + id + '"></div></div>';
        }

        if (option == "Image") {
           QuestionStatement = '<div class="row marginTS"><div class="col-xs-3"><label class="control-label">Image Url </label></div><div class="col-xs-8"><input type="text" placeholder="Image Url" class="form-control QuestionBodyI' + id + '"></div></div>';

        }
        if (option == "Video") {
            QuestionStatement = '<div class="row marginTS"><div class="col-xs-3"><label class="control-label">Video Url </label></div><div class="col-xs-8"><input type="text" placeholder="Video Url" class="form-control QuestionBodyI' + id + '"></div></div>';


        }
        QuestionTemplate = QuestionTemplate + Question + QuestionStatement+ answer1 + answer2 + answer3 + answer4 + correctAnswer + "</div>";

        $('#Question' + id, element).append(QuestionTemplate);


    }



    function downloadData(){
        $('#mainMenu').hide();
        $('#selectTournamentSection').show('slow');
        if (debug){
            console.log("Downloading Data");
        }
        for(var i=0; i<tournamentsActiveList.length;i++){
            $('#selectTournamentSelectorActiveContainer').append("<div class='menu' value='"+tournamentsActiveList[i].name+"'><h5 class='title'>"+tournamentsActiveList[i].name+"</h5></div>");
        }
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

    $(function ($) {
        $('#newTournament', element).bind("click", loadNewTournament);
        $('#modifyTournament', element).bind("click", loadNewTournament);
        $('#publishTournament', element).bind("click", publishTournament);
        $('#showResults', element).bind("click", loadShowTournamentsStatistics);
        $('#showTournamentsStatistics', element).bind("click", tournamentsStatistics);
        $('#downLoadTournamentData', element).bind("click", downloadData);

    });
}


