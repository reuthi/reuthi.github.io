/**
 * Created by ronen on 13/06/2016.
 */
'use strict';

var gCurrQuest = 0;
var gQuests = [
    {
        id: 1,
        txt: 'Who was created by Gepetto the woodcarver??',
        opts:['Arthur','Moffie','Vincent','Pinokio'],
        correctOpt: 3
    },

    {
        id: 2,
        txt: 'Who painted the Mona Lisa?',
        opts:['Leonardo dicaprio','Leonardo da Vinci','Picaso','Michaelangelo'],
        correctOpt: 1
    },

    {
        id: 3,
        txt: 'Who is the bear in The Jungle Book??',
        opts:['Joffrie','Arthamis','Baloo','Aviv'],
        correctOpt:2
    }
];


function init(){
    renderQuest();
}


function renderQuest(){
    var elQuests = document.querySelector('.quests');
    var $elQuest = $('.questDis').html(gQuests[gCurrQuest].txt);

    var elImg = document.querySelector('.frame');
    elImg.innerHTML = '<img src="img/game1Img/pic'+ gQuests[gCurrQuest].id + '.jpg" class="img-rounded display" alt="">';


    var strHtmls = gQuests[gCurrQuest].opts.map(function (opt, i) {
        var strHtml = '<li class="quest" onclick="checkOpt('+i+')">' + opt + '</li>';
        return strHtml;
    });

    elQuests.innerHTML = strHtmls.join('');
}


function checkOpt(i){


    if(i === gQuests[gCurrQuest].correctOpt){
        alert('Correct!');
        gCurrQuest++;
        console.log(gCurrQuest);
        ifWon();
        renderQuest();
    }

    else{
        gameOver();
    }

}


function gameOver(){

    alert('Sry wrong answer, please try again.');
    $('.options').hide();
    gCurrQuest = 0;
    renderQuest();

}

function ifWon(){
    if(gCurrQuest === gQuests.length){
        alert('game won');
        window.location.href = 'index.html';
    }

}



function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}