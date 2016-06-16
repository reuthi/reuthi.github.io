/**
 * Created by ronen on 15/06/2016.
 */
'use strict';

var gStageNow = 0;
// var gDifficult = 4;


var gStages = [
    {
        id: 1,
        txt: 'How much??',
        answers:['a','b','correct','d'],
        correctOpt: 2,
        className: 'flower',
        objNum: 4
    },

    {
        id: 2,
        txt: 'How much?',
        answers:['correct','b','c','d'],
        correctOpt: 0,
        className: 'bird',
        objNum: 3
    },

    {
        id: 3,
        txt: 'How much?',
        answers:['a','b','c','correct'],
        correctOpt: 3,
        className: 'tree',
        objNum: 5
    }
];


function init(){
    renderObjs();
}

function renderObjs(){
    var elAnswers = document.querySelector('.answers');
    var elObjFrame = document.querySelector('.objFrame');
    var counter = 1;

    // var $elQuestion = $('.question').html(gQuests[gCurrQuest].txt);


    var strHtmls = gStages[gStageNow].answers.map(function (answer,i) {
        var strHtml = '<li class="answer" onclick="checkAnswer('+i+')">' + answer + '</li>';
        return strHtml;
    });

    elAnswers.innerHTML = strHtmls.join('');


    for(var i = 0; i < gStages[gStageNow].objNum; i++){

        var strImg = '<img class="objectBox ' + (gStages[gStageNow].className + counter) +
            '" src="img/game4Img/' + gStages[gStageNow].className + '.png">';

        counter++;
        
        elObjFrame.innerHTML += strImg;
    }

}


function checkAnswer(i){
    console.log('answers index is: ',i);
    if(i === gStages[gStageNow].correctOpt){
        alert('Correct!');
        gStageNow++;
        cleanLastStage();
        renderObjs();
    }

    else{
        gameOver();
    }

}

function gameOver(){
    console.log('Game Over');
}


function cleanLastStage(){

    $('.objFrame').html('');
}
