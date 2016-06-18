/**
 * Created by ronen on 15/06/2016.
 */
'use strict';

var gStageNow = 0;

var gStages = [
    {
        id: 1,
        txt: 'How much pink flowers are in the picture?',
        answers:['1','2','3','4'],
        correctOpt: 3,
        className: 'flower',
        objNum: 4
    },

    {
        id: 2,
        txt: 'How much birds are in the picture?',
        answers:['1','2','3','4'],
        correctOpt: 2,
        className: 'bird',
        objNum: 3
    },

    {
        id: 3,
        txt: 'How much tress are displayed?',
        answers:['2','4','1','5'],
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

    var $elQuestion = $('.questDis').html(gStages[gStageNow].txt);

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
    if(i === gStages[gStageNow].correctOpt){
        alert('Correct!');
        gStageNow++;
        cleanLastStage();
        renderObjs();
        checkLvl();
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

function checkLvl(){
    if(gStageNow === 1)
        console.log('Hello blat');
}

function level2(){

}
