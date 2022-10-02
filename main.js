import { Game } from './js/game.js';

window.addEventListener('load', () => {
    let myGame = new Game(1280, 720, 'game-main');

    let startScreen = document.createElement('div');
    startScreen.classList.add('start-screen');
    startScreen.innerHTML = `
        <h1>Oxylunky</h1>
        <button>Start Game</button>
    `;
    startScreen.querySelector('button').addEventListener('click', () => {
        startScreen.parentNode.removeChild(startScreen);
        myGame.init();
    })
    myGame.appendChild(startScreen);

    //myGame.init();
});