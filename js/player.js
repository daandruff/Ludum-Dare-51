export class Player {
    dom = document.createElement('div');
    sprite = document.createElement('div');
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
    oxy = 10000;
    bubble = 500;

    constructor(_levelContainer) {
        this.dom.classList.add('player');
        this.sprite.classList.add('player-sprite');
        this.dom.appendChild(this.sprite);
        _levelContainer.appendChild(this.dom);
    }

    update(dt, game) {
        let currentPosition = {...this.position};
        let currentTileX, currentTileY, currentTileDom;
        let tileWidth = game.level.tileWidth;
        let tileHeight = game.level.tileHeight;
        let playerWidth = tileWidth * 1.5;
        let playerHeight = tileHeight * 1.5;

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
        currentTileX = Math.floor((this.position.x + (playerWidth / 2)) / tileWidth);
        currentTileY = Math.floor((this.position.y + (playerHeight / 2)) / tileHeight);
        currentTileDom = game.level.dom.querySelector(`.tile.x${currentTileX}y${currentTileY}`);
        if (!currentTileDom || !currentTileDom.classList.contains('open-water')) {
            this.position.x = currentPosition.x;
        }

        // Check vertical position
        this.position.y += this.velocity.y * dt;
        currentTileX = Math.floor((this.position.x + (playerWidth / 2)) / tileWidth);
        currentTileY = Math.floor((this.position.y + (playerHeight / 2)) / tileHeight);
        currentTileDom = game.level.dom.querySelector(`.tile.x${currentTileX}y${currentTileY}`);
        if (!currentTileDom || !currentTileDom.classList.contains('open-water')) {
            this.position.y = currentPosition.y;
        }

        // Update player position
        this.dom.style.left = `${this.position.x}px`;
        this.dom.style.top = `${this.position.y}px`;

        // Update oxy (Current tile now refers to a tile above)
        currentTileX = Math.floor((this.position.x + (playerWidth / 2)) / tileWidth);
        currentTileY = Math.floor((this.position.y + (playerHeight / 2) - 25) / tileHeight);
        currentTileDom = game.level.dom.querySelector(`.tile.x${currentTileX}y${currentTileY}`);
        if (currentTileDom.classList.contains('waves')) {
            this.oxy += dt * 500;
            if (this.oxy >= 10000) {
                this.oxy = 10000;
            }

            // Adjust ambiance
            if (this.position.y < 150) {
                game.ambiance.air.volume(1);
                game.ambiance.water.volume(0);
                game.ambiance.cave.volume(0);
            } else {
                game.ambiance.cave.volume(this.oxy / 10000);
                game.ambiance.water.volume(0);
            }
        } else {
            this.oxy -= dt * 100;
            if (this.oxy <= 0) {
                this.oxy = 10000;
                this.setPosition(250, 1.6 * game.level.tileHeight);
            }

            // Adjust ambiance
            game.ambiance.water.volume(1);
            game.ambiance.air.volume(0);
            game.ambiance.cave.volume(0);

            // Add bubble particles
            this.bubble -= dt * 100;
            if (this.bubble <= 0) {
                let bubbleSprite = document.createElement('div');
                bubbleSprite.classList.add('bubble');
                bubbleSprite.style.top = `${this.position.y + playerHeight / 2}px`;
                bubbleSprite.style.left = `${this.position.x + playerWidth / 2}px`;
                bubbleSprite.style.scale = `${Math.random() * 1}`;
                game.level.dom.appendChild(bubbleSprite);
                setTimeout(() => { bubbleSprite.parentNode.removeChild(bubbleSprite); }, 2000);
                this.bubble = Math.random() * 250;
            }
        }

        // Adjust heartbeat
        game.ambiance.heart.volume(1 - this.oxy / 10000);

        // Check hidden
        if (game.level.hidden[currentTileY] && game.level.hidden[currentTileY][currentTileX]) {
            let hiddenData = game.level.hidden[currentTileY][currentTileX];
            let allFoundBlocks = game.level.dom.querySelectorAll(`.hidden.hidden-${hiddenData}`);
            allFoundBlocks.forEach(element => {
                element.classList.add('found');
            })
        }

        // Set player rotation
        if (this.velocity.x != 0 || this.velocity.y != 0) {
            let rad = Math.atan2(this.velocity.y, this.velocity.x);
            let rot = (rad / Math.PI) * 180;
            this.dom.style.transform = `rotate(${rot + 90}deg)`;
            this.sprite.classList.add('swimming');
        } else {
            this.sprite.classList.remove('swimming');
        }
    }

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
}