import { Level } from './level.js';
import { Oxytank } from './oxytank.js';
import { Player } from './player.js';

export class Game {
    #canvas = document.createElement('div');
    #blackbox = document.createElement('div');
    #overlay = document.createElement('div');

    size = {
        width: 0,
        height: 0
    };

    won = false;

    stats = {
        deaths: 0,
        found: [],
        foundMax: 15
    };

    ambiance = {
        air: new Howl({ src: [window.location.href + '/snd/amb_air.mp3'], loop: true }),
        water: new Howl({ src: [window.location.href + '/snd/amb_water.mp3'], loop: true }),
        cave: new Howl({ src: [window.location.href + '/snd/amb_cave.mp3'], loop: true }),
        heart: new Howl({ src: [window.location.href + '/snd/amb_heart.mp3'], loop: true }),
    };

    sfx = {
        splash: new Howl({ src: [window.location.href + '/snd/splash.mp3'], loop: false }),
        dive: new Howl({ src: [window.location.href + '/snd/dive.mp3'], loop: false }),
        discovery: new Howl({ src: [window.location.href + '/snd/discovery.mp3'], loop: false }),
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
    };

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

        // Add overlay
        this.#overlay.style.width = `${_width}px`;
        this.#overlay.style.height = `${_height}px`;
        this.#overlay.classList.add('overlay');

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

        // Set sfx sound levels
        this.sfx.splash.volume(0.5);
        this.sfx.dive.volume(0.5);
        this.sfx.discovery.volume(0.5);

        // Set all sound levels to 0
        this.ambiance.air.volume(1);
        this.ambiance.water.volume(0);
        this.ambiance.cave.volume(0);
        this.ambiance.heart.volume(0);
    }

    init() {
        this.#canvas.appendChild(this.#blackbox);
        this.#canvas.appendChild(this.#overlay);
        this.drawInfo('start');
        this.timer.start = Date.now();

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

        // Start loop
        window.requestAnimationFrame((_t) => { this.#update(_t); });
    }

    drawInfo(_screen) {
        this.input = {
            active: false,
            up: false,
            down: false,
            left: false,
            right: false
        }

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
                <h1>Swimming around</h1>
                <p>
                    To swim around, you just use the arrow-keys.
                </p>
                <img src="gfx/tutor-1.png"/>
                <p>
                    Just press in the direction you want to move in and you'll go that way.
                </p>
                <button onclick="myGame.drawInfo('tutor-2')">Alright</button>
            </div>
            `;
            this.#blackbox.classList.remove('hidden');
        }

        if (_screen == 'tutor-2') {
            this.#blackbox.innerHTML = `
            <div class="message">
                <h1>Oxygen</h1>
                <p>
                    As soon as you are fully submerged your oxy will start to drop.
                </p>
                <img src="gfx/tutor-2.png"/>
                <p>
                    The tank holds 10 seconds of air. When the air is depleted, you'll
                    fail and need to start over from the surface.
                </p>
                <button onclick="myGame.drawInfo('tutor-3')">Don't die, got it!</button>
            </div>
            `;
            this.#blackbox.classList.remove('hidden');
        }

        if (_screen == 'tutor-3') {
            this.#blackbox.innerHTML = `
            <div class="message">
                <h1>Air pockets</h1>
                <p>
                    To get further down, you'll need to find secret areas
                    and hidden air pockets.
                </p>
                <img src="gfx/tutor-3.png"/>
                <p>
                    As soon as you swim into one, it will be revealed and
                    stay visible during the rest of your session.
                </p>
                <button onclick="myGame.drawInfo('none-release')">Let's go!</button>
            </div>
            `;
            this.#blackbox.classList.remove('hidden');
        }

        if (_screen == 'death') {
            this.#blackbox.innerHTML = `
            <div class="message">
                <h1>You didn't make it!</h1>
                <p>
                    No worries though. All your progress is saved<br/>
                    and you can try as many times as you like!<br/>
                    Just keep swiming ;)
                </p>
                <button onclick="myGame.drawInfo('none-release')">Phew!</button>
            </div>
            `;
            this.#blackbox.classList.remove('hidden');
        }

        if (_screen == 'death-2') {
            this.#blackbox.innerHTML = `
            <div class="message">
                <h1>Again?</h1>
                <p>
                    Didn't you do this once already?<br/>
                    Are you sure you're looking in the<br/>
                    correct spot?
                </p>
                <button onclick="myGame.drawInfo('none-release')">No?</button>
            </div>
            `;
            this.#blackbox.classList.remove('hidden');
        }

        if (_screen == 'death-3') {
            this.#blackbox.innerHTML = `
            <div class="message">
                <h1>Need some help?</h1>
                <p>
                    If you look carefully, hidden areas<br/>
                    have a small tell to look for.<br/>
                    (Not all of them though)
                </p>
                <button onclick="myGame.drawInfo('none-release')">Oh, cool thanks!</button>
            </div>
            `;
            this.#blackbox.classList.remove('hidden');
        }

        if (_screen == 'win') {
            let time = Date.now() - this.timer.start;

            this.#blackbox.innerHTML = `
            <div class="message">
                <h1>Awesome!</h1>
                <p>
                    You made it to the depest part of the
                    sea. You died ${this.stats.deaths} times and
                    found ${this.stats.found.length - 1} of ${this.stats.foundMax} secret areas.
                    The trip took you ${Math.floor((time / 1000) / 60)} minutes and ${Math.floor(time / 1000) % 60} seconds.<br/>
                    Think you can do it better?<br/>
                    <br/>
                    (Special thanks to <a href="https://ldjam.com/users/vidarn/games" target="_blank">@vidarn</a> for keeping me company and supporting me throughout the game jam!)
                </p>
                <button onclick="location.reload()">Maybe?</button>
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

        if (!this.won) {
            // Update player position
            this.player.update(dt, this);

            // Update oxytank
            this.oxytank.update(this.player.oxy / 10000);

            // Update level
            this.level.update(dt, this);
        }

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