'use strict';

var gMathQuest = [['3 + 4'], ['11 + 6'], ['8 + 2'], ['20 + 3'], ['1 + 2'], ['5 + 7'], ['3+6'], ['2+9'], ['4+5']]
renderQuests(gMathQuest, '.row')

function initGame3() {
    console.log('initGame3()')
    
}

function renderQuests(mathQuest, selector) {
  var elContainer = document.querySelector(selector);

    // var strHtml = '<div class="row">'
    var strHTMLs = mathQuest.map(function (quest) {
            var strHtml = '<div class="quset col-md-4">'+quest+'</div>'                    
        return strHtml;
    })

    elContainer.innerHTML = strHTMLs.join('');
}

// <div class="row">

//   <div class="col-md-4">.col-md-4</div>
//   <div class="col-md-4">.col-md-4</div>
// </div>


