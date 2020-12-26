import debounce from 'lodash/debounce';

class Modal {
    constructor() {
        this.insertModal();
        this.browserHeight = window.innerHeight;
        this.browserWidth = window.innerWidth;
    }

    insertModal() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal wrapper wrapper--center-children" aria-labelledby="contactTitle">
            <form class="modal__form">
                <div class="modal__close" role="button" aria-label="close modal button"><img src="assets/images/svgs/x.svg" width="16" height="16" alt="close"></div>
                <h2 class="modal__title" id="contactTitle">Contact Us</h2>
                <p class="modal__msg">Please leave us a message and we will reach out to you.</p>
                <fieldset class="modal__user-input">
                    <input type="text" name="name" id="name" required placeholder="Name" aria-label="name">
                    <input type="email" name="email" id="email" required placeholder="Email" aria-label="email">
                    <input type="tel" name="phone" id="phone" placeholder="Phone No." aria-label="phone number">
                    <textarea name="msg" id="msg" cols="30" rows="7" placeholder="Message" aria-label="message"></textarea>
                </fieldset>
                <button class="btn modal__btn submit-btn">Submit</button>
            </form>
        </div>
        <div class="modal-overlay"></div>
        `);
    }

    changeModalPosition() {
        if(this.browserWidth < 678) {
            if(this.browserHeight < 480) {
                document.querySelector('.modal').classList.add('modal--small-height-screen');
            } else {
                document.querySelector('.modal').classList.remove('modal--small-height-screen');
            }
        } else {
            if(this.browserHeight < 556) {
                document.querySelector('.modal').classList.add('modal--small-height-screen');
            } else {
                document.querySelector('.modal').classList.remove('modal--small-height-screen');
            }
        }
    }

    openModal() {
        document.querySelector('.modal').classList.add('modal--show');
        document.querySelector('.modal-overlay').classList.add('modal-overlay--show');
        this.changeModalPosition();
        document.querySelector('.modal__close').addEventListener('click', () => {
            this.closeModal();
        });
        document.querySelector('.modal').addEventListener('click', evt => {
            if(evt.target.matches('.modal')) {
                this.closeModal();
            }
        });
        window.addEventListener('keyup', evt => {
            if(evt.keyCode == 27) {
                this.closeModal();
            }
        });
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
            this.browserWidth = window.innerWidth;
            this.changeModalPosition();
        }, 300));
    }

    closeModal() {
        document.querySelector('.modal').classList.remove('modal--show');
        document.querySelector('.modal-overlay').classList.remove('modal-overlay--show');
    }
}

export default Modal;