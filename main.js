import { Game } from './js/game.js';

window.addEventListener('load', () => {
    window.myGame = new Game(1280, 720, 'game-main');

    let startScreen = document.createElement('div');
    startScreen.classList.add('start-screen');
    startScreen.innerHTML = `
        <h1>Oxylunky</h1>
        <p>A small game about exploration<br/>made for Ludum Dare 51 by Markus Kothe</p>
        <button>Start Game</button>
    `;
    startScreen.querySelector('button').addEventListener('click', () => {
        startScreen.parentNode.removeChild(startScreen);
        myGame.init();
    })
    myGame.appendChild(startScreen);

    //myGame.init();
});