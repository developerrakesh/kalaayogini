class Modal {
    constructor() {
        this.insertModal();
    }

    insertModal() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal wrapper wrapper--center-children" role="region" aria-modal="true">
            <form class="modal__form">
                <div class="modal__close" role="button" aria-label="close modal button"><img src="assets/images/svgs/x.svg" alt="close"></div>
                <h2 class="modal__title">Contact Us</h2>
                <p class="modal__msg">Please leave us a message and we will reach out to you.</p>
                <fieldset class="modal__user-input">
                    <input type="text" name="name" id="name" required placeholder="Name">
                    <input type="email" name="email" id="email" required placeholder="Email">
                    <input type="tel" name="phone" id="phone" placeholder="Phone No.">
                    <textarea name="msg" id="msg" cols="30" rows="7" placeholder="Message"></textarea>
                </fieldset>
                <button class="btn modal__btn submit-btn">Submit</button>
            </form>
        </div>
        `);
    }

    openModal() {
        document.querySelector('.modal').classList.add('modal--show');
        document.querySelector('.modal__close').addEventListener('click', () => {
            this.closeModal();
        });
        document.querySelector('.modal').addEventListener('click', evt => {
            if(evt.target.matches('.modal')) {
                this.closeModal();
            }
        });
    }

    closeModal() {
        document.querySelector('.modal').classList.remove('modal--show');
    }
}

export default Modal;