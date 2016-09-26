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
    { id: 'Question1', correct: 0, time:10, answerGiven:2, correctAnswer:3 },
    { id: 'Question2', correct: 1, time:10, answerGiven:3, correctAnswer:3},
    { id: 'JavascriptVideo', correct: 0, time:20, answerGiven:1, correctAnswer:2},
    { id: 'OptionCombo', correct: 1, time:24, answerGiven: 4, correctAnswer:4}
];

var studentData= [
    { id: 'Michael', points: 12, time:30 },
    { id: 'Ferran', points: 10, time:20 },
    { id: 'John', points: 4, time:10 },
    { id: 'Antonio', points: 6, time:14 },
    { id: 'Jesus', points: 9, time:5 }
];

var questionsData= [
    { id: 'Question1', points: 3, time:10 },
    { id: 'Question2', points: 2, time:10 },
    { id: 'JavascriptVideo', points: 5, time:20 },
    { id: 'OptionCombo', points: 5, time:24 },
    { id: 'TrueOrFalse', points: 4, time:15 },
    { id: 'TrueOrFalse', points: 1, time:15 },
    { id: 'TrueOrFalse', points: 2, time:15 },
    { id: 'TrueOrFalse', points: 4, time:15 },
    { id: 'TrueOrFalse', points: 2, time:15 },
    { id: 'TrueOrFalse', points: 3, time:15 },
    { id: 'TrueOrFalse', points: 5, time:15 },
    { id: 'TrueOrFalse', points: 0, time:15 },
];

var tournamentsResult = [
    {id:0, name:'Javascript Tournament', averageGrades:5.5, averageQuestionTime:10, averageTotalTime:150},
    {id:1, name: 'Random Tournament', averageGrades:7, averageQuestionTime:6, averageTotalTime:120},
    {id:2, name: 'Python Tournamen', averageGrades:6, averageQuestionTime:12, averageTotalTime:400}
];

var studentData= [
    { id: 'Michael', points: 12, time:30 },
    { id: 'Ferran', points: 10, time:20 },
    { id: 'John', points: 4, time:10 },
    { id: 'Antonio', points: 6, time:14 },
    { id: 'Jesus', points: 9, time:5 }
];

var tournamentsList = [
    {id:0, name:"Javascript Tournament"},
    {id:1, name: "Random Tournament"},
    {id:2, name: "Python Tournament"}
];

var questionData= [
    {tournamentId:0, questionId:0,statement: "What is the result of executing this code?", text: "var j=0; \n for (j=0;j<1000;j++){\n for (var i=0;i<10;i++){\n if(i>j){\n console.log(i)}\n}\n }\n}",
        result1:"Javascript Error", result2:"Nothing", result3: "1 2 3 4 5 6 7 8 9 2 3 4 5 6 7 8 9 3 4 5 6 7 8 9 4 5 6 7 8 9 5 6 7 8 9 6 7 8 9 7 8 9 8 9 9", result4: "0 1 2 3 4 5 6 7 8 9 2 3 4 5 6 7 8 9 3 4 5 6 7 8 9 4 5 6 7 8 9 5 6 7 8 9 6 7 8 9 7 8 9 8 9 9"},
    {tournamentId:0, questionId:1,statement: "Do objects exist in Javascript?", text:"",
        result1:"no", result2:"not explicitely", result3: "no, but you can emulate them with structures", result4: "yes"},
    {tournamentId:0, questionId:2, statement: "Do you need to implement a prototype to share methods and attributes?", videoUrl:"https://www.youtube.com/embed/G6l5CHl67HQ?rel=0",
        result1:"Not sure", result2: "yes", result3:"No, but it is a very usefull way to implement them", result4:"No, you can create javascript objects with other methods"},
    {tournamentId:0, questionId:3, statement: "What is the result of the execution on screen?", imageUrl:"",
        result1: "Error", result2:"42", result3: "The sum of the first N prime numbers", result4: "Nothing"}
];