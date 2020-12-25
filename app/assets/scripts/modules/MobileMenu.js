class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.mainNav = document.querySelector('.site-header__nav');
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

    events() {
        this.menuIcon.addEventListener('click', () => {
            this.showNav();
        });
        document.addEventListener('click', evt => {
            //to check if nav menu is clicked or not
            if(!(evt.target.matches('.site-header__menu-icon') || evt.target.matches('.site-header__nav') || evt.target.matches('.site-header__nav ul') || evt.target.matches('.site-header__nav li') || evt.target.matches('.site-header__nav a'))) {
                this.closeNav();
            }
        });
    }
}

export default MobileMenu;