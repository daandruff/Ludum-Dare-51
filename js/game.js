import { Level } from './level.js';
import { Oxytank } from './oxytank.js';
import { Player } from './player.js';

export class Game {
    #canvas = document.createElement('div');
    #blackbox = document.createElement('div');

    size = {
        width: 0,
        height: 0
    }

    ambiance = {
        air: new Howl({ src: [window.location.href + '/snd/amb_air.mp3'], loop: true }),
        water: new Howl({ src: [window.location.href + '/snd/amb_water.mp3'], loop: true }),
        cave: new Howl({ src: [window.location.href + '/snd/amb_cave.mp3'], loop: true }),
        heart: new Howl({ src: [window.location.href + '/snd/amb_heart.mp3'], loop: true }),
    }

    timer = {
        start: Date.now(),
        lastFrame: Date.now(),
        delta: 0
    };

    input = {
        active: false,
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

        // Add black-box
        this.#blackbox.style.width = `${_width}px`;
        this.#blackbox.style.height = `${_height}px`;
        this.#blackbox.classList.add('black-box');

        // Save size
        this.size.width = _width;
        this.size.height = _height;

        // Add event listeners for input
        document.addEventListener('keydown', (e) => {
            if (this.input.active) {
                if (e.code === 'ArrowLeft') { this.input.left = true; }
                if (e.code === 'ArrowRight') { this.input.right = true; }
                if (e.code === 'ArrowUp') { this.input.up = true; }
                if (e.code === 'ArrowDown') { this.input.down = true; }
                if (e.code === 'Space') { this.input.search = true; }
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.code === 'ArrowLeft') { this.input.left = false; }
            if (e.code === 'ArrowRight') { this.input.right = false; }
            if (e.code === 'ArrowUp') { this.input.up = false; }
            if (e.code === 'ArrowDown') { this.input.down = false; }
            if (e.code === 'Space') { this.input.search = false; }
        });

        // Set all sound levels to 0
        this.ambiance.air.volume(1);
        this.ambiance.water.volume(0);
        this.ambiance.cave.volume(0);
        this.ambiance.heart.volume(0);
    }

    init() {
        this.#canvas.appendChild(this.#blackbox);
        this.drawInfo('start');

        // Add player
        this.level = new Level(this, this.#canvas);
        this.player = new Player(this.level.dom);
        this.oxytank = new Oxytank(this.#canvas);
        this.player.setPosition(250, 1.6 * this.level.tileHeight);

        // Start all sounds
        this.ambiance.air.play();
        this.ambiance.water.play();
        this.ambiance.cave.play();
        this.ambiance.heart.play();

        // ACtivate keys
        //this.input.active = true;

        // Start loop
        window.requestAnimationFrame((_t) => { this.#update(_t); });
    }

    drawInfo(_screen) {
        this.input.active = false;

        if (_screen == 'start') {
            this.#blackbox.innerHTML = `
                <div class="message">
                    <h1>Welcome to Oxylunky</h1>
                    <p>
                        The objective of the game is to explore
                        the depths of the sea and find your way
                        to the bottom to find whats there. That
                        might seem simple, but with only a limited
                        supply of oxygen, that might prove harder
                        than you think.
                    </p>
                    <button onclick="myGame.drawInfo('tutor-1')">Next</button>
                </div>
            `;
            this.#blackbox.classList.remove('hidden');
        }

        if (_screen == 'tutor-1') {
            this.#blackbox.innerHTML = `
            <div class="message">
                <h1>Tutor 1</h1>
                <p>
                    This is some dummy things
                </p>
                <button onclick="myGame.drawInfo('none-release')">Let's Go!</button>
            </div>
            `;
            this.#blackbox.classList.remove('hidden');
        }

        if (_screen == 'win') {
            this.#blackbox.innerHTML = `
            <div class="message">
                <h1>Win message</h1>
                <p>
                    You won!
                </p>
                <button onclick="myGame.drawInfo('none-release')">Hide this</button>
            </div>
            `;
            this.#blackbox.classList.remove('hidden');
        }

        if (_screen == 'none-release') {
            this.input.active = true;

            this.#blackbox.classList.add('hidden');
        }
    }

    appendChild(_node) {
        this.#canvas.appendChild(_node);
    }

    #update(_t) {
        this.#updateDelta();
        let dt = (this.timer.delta / 100.0);

        // Update player position
        this.player.update(dt, this);

        // Update oxytank
        this.oxytank.update(this.player.oxy / 10000);

        // Update level
        this.level.update(dt, this);

        // Update map position
        if (this.player.position.y > this.size.height / 2) {
            this.level.dom.style.top = `${Math.floor(this.size.height / 2 - this.player.position.y)}px`;
        } else {
            this.level.dom.style.top = '0px';
        }

        window.requestAnimationFrame((_t) => { this.#update(_t); });
    }

    #updateDelta() {
        this.timer.delta = Date.now() - this.timer.lastFrame;
        this.timer.lastFrame = Date.now();
    }
}