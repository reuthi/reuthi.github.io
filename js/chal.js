
var gChals;


function init(){    

    gChals = getChals();
     
    renderChals(gChals, '.content');
    progressBar();
}


function getChals() {    
    gChals = getFromStorage('chals');
    
    if ( gChals === null ) {
        gChals = [
            {
                id: 0,
                name: 'game1',
                isSolved: false
            },
            {
                id: 1,                
                name: 'game2',
                isSolved: false
            },
            {
                id: 2,                
                name: 'game3',
                isSolved: false
            },
            {
                id: 3,                
                name: 'game4',
                isSolved: false
            }
        ];
    }    
    saveToStorage('chals', gChals); 
    console.table(gChals)   
    return gChals;

}


function renderChals(chals, selector) {
  var elContainer = document.querySelector(selector);

    var strHTMLs = chals.map(function (chal) {
        var strHtml = '<div onclick="return chalClicked(' + chal.id + ');" class="chal">' +
                        '<a href="game' + (chal.id + 1) + '.html">'
                            +'<img src="'+getImgIsSolved(chals, chal.id) + '" class="lock">' +
                            '<h2>'+ chal.name +'</h2>' + 
                        '</a>' +
                        '</div>';
        
        return strHtml;
    })

    elContainer.innerHTML = strHTMLs.join('');
}


function getImgIsSolved (chal, chalId) {
    var imgSrc;
      if (chal[chalId].isSolved === false) imgSrc = "img/img_index/lock.png";
      else imgSrc = "img/img_index/V.png";
      return imgSrc;
  }


  function getCurrChal () {
      var currChal;
      for (var i = 0; i < gChals.length; i++) {
          if (!gChals[i].isSolved) {
              currChal = gChals[i];
              return currChal;
          }
      }
  }


  function chalClicked (chalId) {
        var chelClicked = getChalById(chalId);
        var currChal = getCurrChal();              
        if (chelClicked.id === currChal.id || chelClicked.isSolved) console.log('chelClicked.id', chelClicked.id, 'currChal.id', currChal.id);
        else return false;
  }


function getChalById(chalId) {
    return gChals[chalId]    
}


function reportSolved(chalId){

    gChals = getFromStorage('chals');
    
    gChals[chalId].isSolved = true;

    saveToStorage('chals', gChals);
    
    //change the buttons to a href:
    window.location.href = 'index.html';
}


function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


function getFromStorage(key) {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
}

function progressBar(){
    var elPorgress = document.querySelector('.progressBar');
    var progress = 0;

    for(var i = 0; i < gChals.length;i++){
        if(gChals[i].isSolved)
        progress += (100 / gChals.length);
        elPorgress.innerHTML = (progress + '%') ;
        elPorgress.style.width = (progress + '%');
    }
}

