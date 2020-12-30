import throttle from 'lodash/throttle';

class RevealOnScroll {
    constructor() {
        this.arts = document.querySelectorAll('.product-card');
        this.tabHeadings = document.querySelectorAll('.tab__header__title');
        this.browserHeight = window.innerHeight;
        this.top;
        this.arts.forEach( art => {
            this.top = art.getBoundingClientRect().top;
            this.showArt(art, this.top);
        });
        this.events();
    }

    showArt(art, top) {
        let scrollPercent;
        scrollPercent = top/this.browserHeight * 100;
        console.log(scrollPercent);
        if(scrollPercent < 70) {
            console.log(art);
            art.classList.add('product-card--show');
        }
    }

    events() {
        this.tabHeadings.forEach( el => {
            el.addEventListener('click', () => {
                this.arts.forEach( art => {
                    this.top = art.getBoundingClientRect().top;
                    this.showArt(art, this.top);
                });
            });
        });

        window.addEventListener('scroll', throttle(() => {
            this.arts.forEach( art => {
                this.top = art.getBoundingClientRect().top;
                this.showArt(art, this.top);
            });
        }, 50));
    }
}

export default RevealOnScroll;