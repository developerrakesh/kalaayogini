class ThemeChanger {
    constructor() {
        this.toggleBtn = document.querySelector('.site-header__nav__toggle-btn');
        this.events();
    }

    events() {
        this.toggleBtn.addEventListener('click', () => {
            this.toggleBtn.classList.toggle('site-header__nav__toggle-btn--on');
            if(this.toggleBtn.classList.contains('site-header__nav__toggle-btn--on')) {
                //document.documentElement.style.setProperty('--hue', '360');
                document.querySelector('html').classList.add('change-hue');
            } else {
                //document.documentElement.style.setProperty('--hue', '197');
                document.querySelector('html').classList.remove('change-hue');
            }
        });
    }
}

export default ThemeChanger;