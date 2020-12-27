class Tabs {
    constructor() {
        console.log('tabs here');
        this.tabHeadings = document.querySelectorAll('.tab__header__title');
        this.events();
    }

    events() {
        this.tabHeadings.forEach( tabHeading => {
            tabHeading.addEventListener('click', evt => {
                evt.preventDefault();
                //to remove active class from all tabheadings
                this.tabHeadings.forEach( el => {
                    el.classList.remove('active');
                });
                //to add active class to the clicked tabheading
                evt.target.className += ' active';
                console.log(evt.target.getAttribute("href"));
                console.log(evt.target.dataset.test);
            });
        });
    }
}

export default Tabs;