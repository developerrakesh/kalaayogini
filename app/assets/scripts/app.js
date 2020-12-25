import '../styles/main.scss';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import ThemeChanger from './modules/ThemeChanger';

new MobileMenu();
new ThemeChanger();
const contactBtns = document.querySelectorAll('.contact-btn');

let modal;

let insertModal = setTimeout(() => {
    import('./modules/Modal').then( Modal => {
        modal = new Modal.default();
    }).catch( () => console.log('Error in loading Modal') );
}, 500);

contactBtns.forEach( contactBtn => {
    contactBtn.addEventListener('click', evt => {
        evt.preventDefault();
        if(typeof modal == 'undefined') {
            import( './modules/Modal' ).then( Modal => {
                clearTimeout(insertModal);
                modal = new Modal.default();
                setTimeout( () => {
                    modal.openModal();
                }, 50);
            }).catch( () => console.log('Error in loading Modal') );
        } else {
            modal.openModal();
        }
    });
});