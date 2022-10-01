export class Player {
    dom = document.createElement('div');
    position = {
        x: 0,
        y: 0
    }
    velocity = {
        x: 0,
        y: 0,
        max: 7,
        inc: 2,
        dec: 0.5
    }
    air = 10000;

    constructor(_levelContainer) {
        this.dom.classList.add('player');
        _levelContainer.appendChild(this.dom);
    }

    update(dt, game) {
        let currentPosition = {...this.position};
        let currentTileX, currentTileY, currentTileDom;
        let tileWidth = game.level.tileWidth;
        let tileHeight = game.level.tileHeight;

        // Update velocity
        if (game.input.up) { this.velocity.y = this.velocity.y < -this.velocity.max ? -this.velocity.max : this.velocity.y - this.velocity.inc * dt; }
        if (game.input.down) { this.velocity.y = this.velocity.y > this.velocity.max ? this.velocity.max : this.velocity.y + this.velocity.inc * dt; }
        if (game.input.left) { this.velocity.x = this.velocity.x < -this.velocity.max ? -this.velocity.max : this.velocity.x - this.velocity.inc * dt; }
        if (game.input.right) { this.velocity.x = this.velocity.x > this.velocity.max ? this.velocity.max : this.velocity.x + this.velocity.inc * dt; }
        if (!game.input.up && !game.input.down && this.velocity.y != 0) {
            if (this.velocity.y > 0) {
                this.velocity.y -= this.velocity.dec * dt;
                if (this.velocity.y < 0) { this.velocity.y = 0; }
            } else if (this.velocity.y < 0) {
                this.velocity.y += this.velocity.dec * dt;
                if (this.velocity.y > 0) { this.velocity.y = 0; }
            }
        }
        if (!game.input.left && !game.input.right && this.velocity.x != 0) {
            if (this.velocity.x > 0) {
                this.velocity.x -= this.velocity.dec * dt;
                if (this.velocity.x < 0) { this.velocity.x = 0; }
            } else if (this.velocity.x < 0) {
                this.velocity.x += this.velocity.dec * dt;
                if (this.velocity.x > 0) { this.velocity.x = 0; }
            }
        }

        // Check horisontal position
        this.position.x += this.velocity.x * dt;
        currentTileX = Math.floor((this.position.x + (tileWidth / 2)) / tileWidth);
        currentTileY = Math.floor((this.position.y + (tileWidth / 2)) / tileHeight);
        currentTileDom = game.level.dom.querySelector(`.tile.x${currentTileX}y${currentTileY}`);
        if (!currentTileDom || !currentTileDom.classList.contains('open-water')) {
            this.position.x = currentPosition.x;
        }

        // Check vertical position
        this.position.y += this.velocity.y * dt;
        currentTileX = Math.floor((this.position.x + (tileWidth / 2)) / tileWidth);
        currentTileY = Math.floor((this.position.y + (tileWidth / 2)) / tileHeight);
        currentTileDom = game.level.dom.querySelector(`.tile.x${currentTileX}y${currentTileY}`);
        if (!currentTileDom || !currentTileDom.classList.contains('open-water')) {
            this.position.y = currentPosition.y;
        }

        this.dom.style.left = `${this.position.x}px`;
        this.dom.style.top = `${this.position.y}px`;
    }

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
}