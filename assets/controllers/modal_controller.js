import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['modalElement'];
    component = null;
    alertBox = null;

    initialize() {

    }


    connect() {
        window.addEventListener('modal:open', (event) => {
            // -----------------------
            if (window.innerWidth < 992) {
                 this.alertBox = document.getElementById('mobile-cart-popup');

                // On affiche le bandeau
                this.alertBox.classList.add('active');
                console.log("event", this.element);
                // On le cache automatiquement après 3 secondes
                setTimeout(() => {
                    this.alertBox.classList.remove('active');
                }, 3000);
            }
            // ----------------
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
