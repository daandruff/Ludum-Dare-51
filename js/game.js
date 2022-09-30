export class Game {
    #canvas = document.createElement('div');

    timer = {
        start: Date.now(),
        lastFrame: Date.now(),
        delta: 0
    };

    constructor(_width, _height, _class) {
        this.#canvas.style.width = `${_width}px`;
        this.#canvas.style.height = `${_height}px`;
        this.#canvas.classList.add(_class);
        document.body.appendChild(this.#canvas);
    }

    init() {
        window.requestAnimationFrame((_t) => { this.#update(_t); });
    }

    #update(_t) {
        this.#updateDelta();
        let dt = this.timer.delta;

        // Do cool stuff!

        window.requestAnimationFrame((_t) => { this.#update(_t); });
    }

    #updateDelta() {
        this.timer.delta = Date.now() - this.timer.lastFrame;
        this.timer.lastFrame = Date.now();
    }
}