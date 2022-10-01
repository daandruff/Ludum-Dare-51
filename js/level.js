export class Level {
    width = 45;
    height = 45;
    data = [
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2]
    ];

    constructor(_container) {
        this.dom = document.createElement('div');
        this.dom.classList.add('level-container');

        // Add some css variables
        let cssVars = document.createElement('style');
        cssVars.innerText = `
            :root {
                --tileWidth: ${this.width}px;
                --tileHeight: ${this.height}px;
            }
        `;
        document.head.appendChild(cssVars);

        // Create dom elements for all tiles
        this.data.forEach((rowData, y) => {
            rowData.forEach((tileData, x) => {
                let newTile = document.createElement('div');
                newTile.classList.add('tile');
                newTile.style.top = `${y * this.height}px`;
                newTile.style.left = `${x * this.width}px`;

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
            }); 
        });

        _container.appendChild(this.dom);
    }
}