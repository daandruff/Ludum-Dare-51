import { Game } from './js/game.js';

window.addEventListener('load', () => {
    let myGame = new Game(1280, 720, 'game-main');

    myGame.init();
});