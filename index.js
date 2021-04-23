

var scores, activeplayer, roundscore, dice , gamePlaying ;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {

if(gamePlaying){
dice = Math.floor(Math.random() *6) + 1;    
console.log(dice);
var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'DICE_'+ dice + '.png';

//3. Update the value only if the value is NOT a 1
if(dice!==1){
    //Add the no.
    roundscore += dice;
    document.querySelector("#current-"+ activeplayer).textContent = roundscore;
}
else{
    
    nextPlayer();
    roundscore=0;
    }
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    scores[activeplayer]+= roundscore; 
    document.querySelector('#score-'+ activeplayer).textContent = scores[activeplayer];
    if(scores[activeplayer]>=100){
        document.querySelector('#name-' + activeplayer ).textContent = 'WINNER!!!!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-1').classList.add('winner');
        document.querySelector('.player-0').classList.remove('active');
        gamePlaying= false;
    }
    else{
        nextPlayer();
        roundscore=0;
        
    }
}

});

document.querySelector('.btn-new').addEventListener('click', init );// here we are not putting init() with paranthesis becoz then it will be invoked immediately but we dont want that we want to invoke this fuction when that event happen  


function init(){
    scores=[0,0];
    roundscore=0;
    activeplayer=0;
    gamePlaying = true; 

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');




}

function nextPlayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

