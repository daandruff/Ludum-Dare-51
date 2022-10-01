import { Level } from './level.js';
import { Player } from './player.js';

export class Game {
    #canvas = document.createElement('div');

    timer = {
        start: Date.now(),
        lastFrame: Date.now(),
        delta: 0
    };

    input = {
        left: false,
        right: false,
        up: false,
        down: false,
        search: false
    }

    constructor(_width, _height, _class) {
        // Add element
        this.#canvas.style.width = `${_width}px`;
        this.#canvas.style.height = `${_height}px`;
        this.#canvas.classList.add(_class);
        document.body.appendChild(this.#canvas);

        // Add event listeners for input
        document.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowLeft') { this.input.left = true; }
            if (e.code === 'ArrowRight') { this.input.right = true; }
            if (e.code === 'ArrowUp') { this.input.up = true; }
            if (e.code === 'ArrowDown') { this.input.down = true; }
            if (e.code === 'Space') { this.input.search = true; }
        });
        document.addEventListener('keyup', (e) => {
            if (e.code === 'ArrowLeft') { this.input.left = false; }
            if (e.code === 'ArrowRight') { this.input.right = false; }
            if (e.code === 'ArrowUp') { this.input.up = false; }
            if (e.code === 'ArrowDown') { this.input.down = false; }
            if (e.code === 'Space') { this.input.search = false; }
        });
    }

    init() {
        // Add player
        this.level = new Level(this.#canvas);
        this.player = new Player(this.level.dom);
        this.player.setPosition(300, 60);

        // Start loop
        window.requestAnimationFrame((_t) => { this.#update(_t); });
    }

    #update(_t) {
        this.#updateDelta();
        let dt = this.timer.delta;

        this.player.update(dt, this);

        window.requestAnimationFrame((_t) => { this.#update(_t); });
    }

    #updateDelta() {
        this.timer.delta = Date.now() - this.timer.lastFrame;
        this.timer.lastFrame = Date.now();
    }
}