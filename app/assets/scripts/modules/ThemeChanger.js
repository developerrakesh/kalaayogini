class ThemeChanger {
    constructor() {
        this.toggleBtn = document.querySelector('.site-header__nav__toggle-btn');
        this.pageLinks = document.querySelectorAll('.page-link');
        this.params = new URLSearchParams(window.location.search);
        this.events();
    }

    //to add hue parameter to all links
    addParam() {
        this.pageLinks.forEach( el => {
            console.log(el.href);
            el.href +='?hue';
        });
    }

    //to remove hue parameter from all links
    removeParam() {
        this.pageLinks.forEach( el => {
            el.href = el.href.split('?').shift();
        });
    }
    events() {
        if(this.params.has('hue')) {
            document.querySelector('html').classList.add('change-hue');
            this.toggleBtn.classList.add('site-header__nav__toggle-btn--on');
            this.addParam();
        }
        this.toggleBtn.addEventListener('click', () => {
            this.toggleBtn.classList.toggle('site-header__nav__toggle-btn--on');
            if(this.toggleBtn.classList.contains('site-header__nav__toggle-btn--on')) {
                //document.documentElement.style.setProperty('--hue', '360');
                document.querySelector('html').classList.add('change-hue');
                this.addParam();
            } else {
                //document.documentElement.style.setProperty('--hue', '197');
                document.querySelector('html').classList.remove('change-hue');
                this.removeParam();
            }
        });
    }
}

export default ThemeChanger;