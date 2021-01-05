import throttle from 'lodash/throttle';

class RevealOnScroll {
    constructor() {
        this.arts = document.querySelectorAll('.product-card');
        this.tabHeadings = document.querySelectorAll('.tab__header__title');
        this.browserHeight = window.innerHeight;
        this.top;
        //to show top placed arts initially
        this.arts.forEach((art, index, arr) => {
            this.top = art.getBoundingClientRect().top;
            this.showArt(art, index, arr, this.top);
        });

        this.scrollThrottle = throttle(this.calc, 50).bind(this);
        this.events();
    }
    
    showArt(art, index, arr, top) {
        let scrollPercent;
        scrollPercent = top/this.browserHeight * 100;
        if(scrollPercent < 70) {
            art.classList.add('product-card--show');
            if(index === arr.length - 1) {
                window.removeEventListener('scroll', this.scrollThrottle);
            }
        }
    }
    
    calc() {
        this.arts.forEach((art, index, arr) => {
            this.top = art.getBoundingClientRect().top;
            this.showArt(art, index, arr, this.top);
        });
    }
    
    events() {
        this.tabHeadings.forEach( el => {
            el.addEventListener('click', () => {
                this.calc();
            });
        });
        
        window.addEventListener('scroll', this.scrollThrottle);
    }
}

export default RevealOnScroll;