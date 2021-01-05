class MsgModal {
    constructor() {
        this.insertMsg();
    }

    closeMsgModal() {
        document.querySelector('.msg-modal').classList.remove('msg-modal--show');
    }

    insertMsg() {
        document.body.insertAdjacentHTML('afterend', `
            <div class="msg-modal" aria-labelledby="popMsg">
                <h2 id="popMsg" class="msg-modal__title">Buying Options Coming Soon!!</h2>
                <button class="msg-modal__close">X</button>
            </div>
        `);
        document.querySelector('.msg-modal__close').addEventListener('click', this.closeMsgModal);
    }
}

export default MsgModal;