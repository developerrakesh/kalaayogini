class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.mainNav = document.querySelector('.site-header__nav');
        this.events();
    }

    showNav() {
        console.log('please show the navigation');
        this.mainNav.classList.toggle('site-header__nav--show');
        this.menuIcon.classList.toggle('site-header__menu-icon--close');
    }

    events() {
        this.menuIcon.addEventListener('click', () => {
            this.showNav();
        });
    }
}

export default MobileMenu;