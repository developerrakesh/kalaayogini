import throttle from 'lodash/throttle'

class HeaderScroll {
    constructor() {
        this.header = document.querySelector('.site-header');
        this.events();
    }

    events() {
        window.addEventListener('scroll', throttle( () => {
            if(scrollY > 60) {
                this.header.classList.add('site-header--small-height');
            } else {
                this.header.classList.remove('site-header--small-height');
            }
        }, 50));
    }
}

export default HeaderScroll;