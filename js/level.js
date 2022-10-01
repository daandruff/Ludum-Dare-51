export class Level {
    tileWidth = 40;
    tileHeight = 40;
    data = [
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2],
        [2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 9, 9, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2],
        [2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 2],
        [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2],
        [2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2],
        [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2],
        [2, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];

    hidden = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3],
        [],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [],
        [],
        [],
        [],
        [],
        [],
        [0, 0, 0, 2, 2],
    ];

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
            }); 
        });

        _container.appendChild(this.dom);
    }
}