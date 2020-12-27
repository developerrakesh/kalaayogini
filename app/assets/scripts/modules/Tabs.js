class Tabs {
    constructor() {
        this.tabHeadings = document.querySelectorAll('.tab__header__title');
        this.tabPanes = document.querySelectorAll('.tab__content__pane');
        this.events();
    }

    events() {
        this.tabHeadings.forEach( tabHeading => {
            tabHeading.addEventListener('click', evt => {
                evt.preventDefault();

                //to remove active class from all tab headings
                this.tabHeadings.forEach( el => {
                    el.classList.remove('active');
                });

                //to add active class to the clicked tab heading
                evt.target.className += ' active';

                //to remove tab__content__pane--show class from all tab panes
                this.tabPanes.forEach( el => {
                    el.classList.remove('tab__content__pane--show');
                });

                //to add tab__content__pane--show class to tab pane controlled by corresponding tab heading
                document.querySelector(evt.target.getAttribute("href")).classList.add('tab__content__pane--show');
            });
        });
    }
}

export default Tabs;