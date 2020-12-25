import '../styles/main.scss';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import Modal from './modules/Modal';

new MobileMenu();
const contactBtns = document.querySelectorAll('.contact-btn');

let modal;
contactBtns.forEach( contactBtn => {
    contactBtn.addEventListener('click', evt => {
        evt.preventDefault();
        if(typeof modal == 'undefined') {
            import( './modules/Modal' ).then( Modal => {
                modal = new Modal.default();
                setTimeout( () => {
                    modal.openModal();
                }, 100);
            }).catch( () => console.log('Error in loading Modal') );
        } else {
            modal.openModal();
        }
    });
});