import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['modalElement'];
    component = null;

    initialize() {

    }


    connect() {
        window.addEventListener('modal:open', (event) => {
            this.component = document.getElementById('header-cart');
            this.component.addEventListener('click', this.openModal());
            // console.log("component",component);
            console.log("event", this.element);
            setTimeout(() => {
                this.component.classList.remove('isVisible');
            }, 5000);
        });
    }


    openModal() {
        // this.modal.style.display = "block";
        // window.alert("lorem ipsum")
        console.log(this.component.style.visibility)
        // this.component.style.visibility = 'visible';
        this.component.classList.add('isVisible');
    }

    closeModal() {
        this.modal.hide();
    }


}
