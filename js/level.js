export class Level {
    tileWidth = 40;
    tileHeight = 40;

    data = [[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,2,9,9,2,2,2,2,2,2],[2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,2,1,1,1,2,2,2,2,2,2],[2,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2],[2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,2,2],[2,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2],[2,2,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2],[2,2,2,2,0,0,0,2,2,2,9,9,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],[2,2,2,2,0,0,0,0,2,1,1,1,1,2,2,2,2,0,0,0,2,2,2,0,0,0,2,2,2,2,2,2],[2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2],[2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,0,0,0,0,0,0,0,2,2,0,0,0,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2],[2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,2,2],[2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]];
    hidden = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,3,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
    decoration = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

    dustCooldown = 200;

    constructor(_game, _container) {
        this.dom = document.createElement('div');
        this.dom.classList.add('level-container');
        this.dom.style.left = `${_game.size.width / 2 - (this.data[0].length * this.tileWidth / 2)}px`

        // Add some css variables
        let cssVars = document.createElement('style');
        cssVars.innerText = `
            :root {
                --tileWidth: ${this.tileWidth}px;
                --tileHeight: ${this.tileHeight}px;
            }
        `;
        document.head.appendChild(cssVars);

        // Create dom elements for all tiles
        this.data.forEach((rowData, y) => {
            rowData.forEach((tileData, x) => {
                let newTile = document.createElement('div');
                newTile.classList.add('tile');
                newTile.style.top = `${y * this.tileHeight}px`;
                newTile.style.left = `${x * this.tileWidth}px`;
                newTile.style.animationDelay = `-${y / 2}s`;

                switch (tileData) {
                    case 1:
                        newTile.classList.add('waves');
                        break;
                    case 2:
                        newTile.classList.add('ground');
                        break;
                    case 9:
                        newTile.classList.add('sky');
                        break;
                    default:
                        newTile.classList.add('open-water');
                }

                newTile.classList.add(`x${x}y${y}`);

                this.dom.appendChild(newTile);

                // Add hidden areas
                if (this.hidden[y] && this.hidden[y][x] > 0) {
                    let newHidden = document.createElement('div');
                    newHidden.classList.add('tile', 'ground', 'hidden', `hidden-${this.hidden[y][x]}`);
                    newHidden.style.top = `${y * this.tileHeight}px`;
                    newHidden.style.left = `${x * this.tileWidth}px`;
                    newHidden.style.animationDelay = `-${y / 2}s`;
                    this.dom.appendChild(newHidden);
                }

                // Add decorations
                if (this.decoration[y] && this.decoration[y][x] > 0) {
                    let newDecoration = document.createElement('div');
                    newDecoration.classList.add('tile', `decoration-${this.decoration[y][x]}`);
                    newDecoration.style.top = `${y * this.tileHeight}px`;
                    newDecoration.style.left = `${x * this.tileWidth}px`;
                    newDecoration.style.animationDelay = `-${y / 2.0}s`;
                    this.dom.appendChild(newDecoration);
                }
            }); 
        });

        _container.appendChild(this.dom);
    }

    update(_dt) {
        this.dustCooldown -= _dt * 100;
        if (this.dustCooldown <= 0) {
            this.dustCooldown = Math.random() * 50;

            let allOpenWater = this.dom.querySelectorAll('.open-water');
            let selectedOpenWater = allOpenWater[Math.floor(Math.random() * allOpenWater.length)]
            let selectedX = parseFloat(selectedOpenWater.style.left.replace('px', ''));
            let selectedY = parseFloat(selectedOpenWater.style.top.replace('px', ''));

            let dustSprite = document.createElement('div');
            dustSprite.classList.add('dust');
            dustSprite.style.top = `${selectedY + this.tileHeight}px`;
            dustSprite.style.left = `${selectedX + this.tileWidth / 2}px`;
            dustSprite.style.scale = `${Math.random() * 3}`;
            dustSprite.style.opacity = `${Math.random()}`;
            this.dom.appendChild(dustSprite);
            
            setTimeout(() => { dustSprite.parentNode.removeChild(dustSprite); }, 1000);
        }
    }
}