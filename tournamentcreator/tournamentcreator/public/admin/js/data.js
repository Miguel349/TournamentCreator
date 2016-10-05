/**
 * Created by miguelpaganmurphy on 24/09/16.
 */

var tournamentsActiveList = [
    {id:0, name:"Javascript Tournament"},
    {id:1, name: "Random Tournament"},
    {id:2, name: "Python Tournament"}
];



var tournamentsInactiveList = [
    {id:0, name:"Python Math Tournament"},
    {id:1, name: "Test Tournament"},
];

var michaelData=[
];

var joseData=[
    { id: 'Question1', correct: 0, time:8, answerGiven:2, correctAnswer:3 },
    { id: 'Question2', correct: 1, time:12, answerGiven:3, correctAnswer:3},
    { id: 'JavascriptVideo', correct: 0, time:30, answerGiven:1, correctAnswer:2},
    { id: 'OptionCombo', correct: 1, time:15, answerGiven: 4, correctAnswer:4}
];

var juanData=[
    { id: 'Question1', correct: 1, time:4, answerGiven:2, correctAnswer:3 },
    { id: 'Question2', correct: 0, time:10, answerGiven:3, correctAnswer:3},
    { id: 'JavascriptVideo', correct: 1, time:20, answerGiven:1, correctAnswer:2},
    { id: 'OptionCombo', correct: 0, time:10, answerGiven: 4, correctAnswer:4}
];

var isabelData=[
    { id: 'Question1', correct: 1, time:7, answerGiven:2, correctAnswer:3 },
    { id: 'Question2', correct: 1, time:90, answerGiven:3, correctAnswer:3},
    { id: 'JavascriptVideo', correct: 1, time:20, answerGiven:1, correctAnswer:2},
    { id: 'OptionCombo', correct: 0, time:10, answerGiven: 4, correctAnswer:4}
];

var studentData= [
    { id: 'Michael', points: 12, time:30 },
    { id: 'Ferran', points: 10, time:20 },
    { id: 'John', points: 4, time:10 },
    { id: 'Antonio', points: 6, time:14 },
    { id: 'Jesus', points: 9, time:5 }
];

var studentsResults=[
  joseData,
    juanData,
    isabelData,
];



var tournamentsResult = [
    {id:0, name:'Javascript Tournament', averageGrades:5.5, averageQuestionTime:10, averageTotalTime:150},
    {id:1, name: 'Random Tournament', averageGrades:7, averageQuestionTime:6, averageTotalTime:120},
    {id:2, name: 'Python Tournamen', averageGrades:6, averageQuestionTime:12, averageTotalTime:400}
];

var tournamentsList = [
    {id:0, name:"Javascript Tournament"},
    {id:1, name: "Random Tournament"},
    {id:2, name: "Python Tournament"}
];

var questionData= [
    {tournamentId:0, questionId:"Question1",statement: "What is the result of executing this code?", text: "var j=0; \n for (j=0;j<1000;j++){\n for (var i=0;i<10;i++){\n if(i>j){\n console.log(i)}\n}\n }\n}",
        result1:"Javascript Error", result2:"Nothing", result3: "1 2 3 4 5 6 7 8 9 2 3 4 5 6 7 8 9 3 4 5 6 7 8 9 4 5 6 7 8 9 5 6 7 8 9 6 7 8 9 7 8 9 8 9 9",
        result4: "0 1 2 3 4 5 6 7 8 9 2 3 4 5 6 7 8 9 3 4 5 6 7 8 9 4 5 6 7 8 9 5 6 7 8 9 6 7 8 9 7 8 9 8 9 9", correct:"4"},
    {tournamentId:0, questionId:"Question2",statement: "Do objects exist in Javascript?", text:"",
        result1:"no", result2:"not explicitely", result3: "no, but you can emulate them with structures", result4: "yes", correct:"2"},
    {tournamentId:0, questionId:"Javascript video", statement: "Do you need to implement a prototype to share methods and attributes?", videoUrl:"https://www.youtube.com/embed/G6l5CHl67HQ?rel=0",
        result1:"Not sure", result2: "yes", result3:"No, but it is a very usefull way to implement them",
        result4:"No, you can create javascript objects with other methods",correct:"3"},
    {tournamentId:0, questionId:"Option Combo", statement: "What is the result of the execution on screen?", imageUrl:"",
        result1: "Error", result2:"42", result3: "The sum of the first N prime numbers", result4: "Nothing", correct:"1"}
];

var questionsData= [

];

var michaelTournamentData= [
    {id:0, name:'Python Tournament', result:5, totalTime:65, averageTime:16.5, position:2, timePosition:1},
    {id:1, name: 'Random Tournament', result:6, totalTime:80, averageTime:10, position:4, timePosition:3},
];
function newGraph() {
    var totalPoints=0;
    var totalTime=0;
    for(var i=0; i<questionData.length;i++){
        console.log("Question: "+i +"out of " + questionsData.length);
        console.log(juanData[i].correct);
        var averagePoints=(juanData[i].correct+isabelData[i].correct+joseData[i].correct+michaelData[i].correct)/4;
        var averageTime=(juanData[i].time+isabelData[i].time+joseData[i].time+michaelData[i].time)/4;
        totalPoints=totalPoints+michaelData[i].correct;
        totalTime=totalTime+michaelData[i].time;
        questionsData.push({id:questionData[i].questionId,points:averagePoints, time:averageTime});
    }

    $('.nParticipants').text('4');
    var tempSumPoints;
    var tempSumTime;
    var pointsRanking=4;
    var timeRanking=4;
    for(var i=0;i<studentsResults.length;i++){
       tempSumPoints=0;
        tempSumTime=0;
        for (var j=0; j<studentsResults[i].length;j++){
            tempSumPoints=tempSumPoints+studentsResults[i][j].correct;
            tempSumTime=tempSumPoints+studentsResults[i][j].time;
        }
        if(totalPoints>=tempSumPoints){
            pointsRanking=pointsRanking-1;
        }
        if(totalTime>=timeRanking){
            timeRanking=timeRanking-1;
        }
    }
    $('#position').text(pointsRanking);
    $('#timePosition').text(timeRanking);
    michaelTournamentData.push({id:michaelTournamentData.length,name:"Javascript Tournament",result:totalPoints/questionData.length*10,
        totalTime:totalTime, position:pointsRanking, timePosition:timeRanking});
        new Morris.Bar({
            // ID of the element in which to draw the chart.
            element: "T",
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: michaelData,
            // The name of the data record attribute that contains x-values.
            xkey: 'id',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['time'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Time per question']
        });
        new Morris.Bar({
            // ID of the element in which to draw the chart.
            element: "TA",
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: questionsData,
            // The name of the data record attribute that contains x-values.
            xkey: 'id',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['time'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Time average']
        });
        new Morris.Bar({
            // ID of the element in which to draw the chart.
            element: "R",
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: michaelData,
            // The name of the data record attribute that contains x-values.
            xkey: 'id',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['correct'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Correct answers by student']
        });
        new Morris.Bar({
            // ID of the element in which to draw the chart.
            element: "RA",
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: questionsData,
            // The name of the data record attribute that contains x-values.
            xkey: 'id',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['points'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Percentage of correct answers average']
        });
}