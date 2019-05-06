/*
 this is my first project that i wrote it on 2019/5/6
  Im going to  improve my knowledge :)
*/

var scores, roundscore, playinggames, activeplayer;
init();

dice = Math.floor(Math.random() *6 ) +1;


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (playinggames){
        var dice = Math.floor(Math.random() *6 ) +1;
        var diceDom;
        diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-'+ dice + '.png';
        if ( dice !== 1){
            roundscore += dice;
            document.querySelector('#current-'+ activeplayer).textContent = roundscore;

        }else{
            nextplayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (playinggames){
        scores[activeplayer] += roundscore;
        document.querySelector('#score-'+activeplayer).textContent = scores[activeplayer];
        if (scores[activeplayer] >= 50){
            document.getElementById('name-'+activeplayer).textContent = 'winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            playinggames = false;

        }else {
            nextplayer();

        }
    }
});

document.querySelector('.btn-new').addEventListener('click',init);




function nextplayer() {
    activeplayer === 0 ? activeplayer =1 : activeplayer =0;
    roundscore =0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}






function init() {
    scores = [0,0];
    roundscore = 0;
    playinggames =true;
    activeplayer =0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player1';
    document.getElementById('name-1').textContent = 'player2';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}