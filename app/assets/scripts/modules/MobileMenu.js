import debounce from 'lodash/debounce';

class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.mainNav = document.querySelector('.site-header__nav');
        this.header = document.querySelector('.site-header');
        this.browserHeight = window.innerHeight;
        this.events();
    }

    showNav() {
        this.mainNav.classList.toggle('site-header__nav--show');
        this.menuIcon.classList.toggle('site-header__menu-icon--close');
    }

    closeNav() {
        this.mainNav.classList.remove('site-header__nav--show');
        this.menuIcon.classList.remove('site-header__menu-icon--close');
    }

    changeNavPosition() {
        if(this.browserHeight < 400) {
            this.header.style.position = 'absolute';
        } else {
            this.header.style.position = 'fixed';
        }
    }

    events() {
        this.menuIcon.addEventListener('click', () => {
            this.showNav();
        });
        this.changeNavPosition();
        document.addEventListener('click', evt => {
            //to check if nav menu is clicked or not
            if(!(evt.target.matches('.site-header__menu-icon') || evt.target.matches('.site-header__nav') || evt.target.matches('.site-header__nav ul') || evt.target.matches('.site-header__nav li') || evt.target.matches('.site-header__nav a') || evt.target.matches('.site-header__nav__toggle-btn'))) {
                this.closeNav();
            }
        });
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
            this.changeNavPosition();
        }, 300));
    }
}

export default MobileMenu;