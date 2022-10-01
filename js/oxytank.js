export class Oxytank {
    dom = document.createElement('div');

    constructor(_container) {
        this.dom.classList.add('oxytank');
        this.dom.innerHTML = `
            <div class="oxytank-overlay"></div>
        `;
        this.overlay = this.dom.querySelector('.oxytank-overlay');

        _container.appendChild(this.dom);
    }

    update(_percent) {
        let top = 445 - Math.floor(_percent * 310);
        this.overlay.style.top = `${top}px`;
        this.overlay.style.backgroundPositionY = `-${top}px`;
    }
}