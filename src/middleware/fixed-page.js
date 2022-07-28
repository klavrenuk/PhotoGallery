class FixedPage {
    constructor() {
        this.scrollY = null;
        this.root = document.querySelector('#root');
    }

    set() {
        this.scrollY = window.scrollY;
        this.root.classList.add('root--h_fixed');
    }

    remove() {
        this.root.classList.remove('root--h_fixed');
        window.scrollTo({
            top: this.scrollY,
            behavior: 'instant'
        })
    }
}

export default new FixedPage();