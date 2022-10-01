export class Player {
    dom = document.createElement('div');
    position = {
        x: 0,
        y: 0
    }
    velocity = {
        x: 0,
        y: 0
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

        // Check horisontal position
        if (game.input.left) { this.position.x -= 0.5 * dt; }
        if (game.input.right) { this.position.x += 0.5 * dt; }
        currentTileX = Math.floor((this.position.x + (tileWidth / 2)) / tileWidth);
        currentTileY = Math.floor((this.position.y + (tileWidth / 2)) / tileHeight);
        currentTileDom = game.level.dom.querySelector(`.tile.x${currentTileX}y${currentTileY}`);
        if (!currentTileDom || !currentTileDom.classList.contains('open-water')) {
            this.position.x = currentPosition.x;
        }

        // Check vertical position
        if (game.input.up) { this.position.y -= 0.5 * dt; }
        if (game.input.down) { this.position.y += 0.5 * dt; }
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