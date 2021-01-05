import '../styles/main.scss';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import ThemeChanger from './modules/ThemeChanger';
import Tabs from './modules/Tabs';
import HeaderScroll from './modules/HeaderScroll';
import RevealOnScroll from './modules/RevealOnScroll';
//import MsgModal from './modules/MsgModal';

//new MsgModal();
new MobileMenu();
new ThemeChanger();
new Tabs();
new HeaderScroll();
new RevealOnScroll();
const contactBtns = document.querySelectorAll('.contact-btn');

let modal;

let insertModal = setTimeout(() => {
    import('./modules/ContactModal').then( Modal => {
        modal = new Modal.default();
    }).catch( () => console.log('Error in loading Modal') );
}, 500);

contactBtns.forEach( contactBtn => {
    contactBtn.addEventListener('click', evt => {
        evt.preventDefault();
        if(typeof modal == 'undefined') {
            import( './modules/ContactModal' ).then( Modal => {
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

function insertMsgModal() {
    import('./modules/MsgModal').then( msg => {
        new msg.default();
    }).catch(() => { console.log('Error in loading msg') });
}

function showMsgModal() {
    document.querySelector('.msg-modal').classList.add('msg-modal--show');
}

function hideMsgModal() {
    document.querySelector('.msg-modal').classList.remove('msg-modal--show');
}

setTimeout(insertMsgModal, 3000);
setTimeout(showMsgModal, 3500);
setTimeout(hideMsgModal, 9000);