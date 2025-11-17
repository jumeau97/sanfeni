import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    next(event) {
        console.log("lorem");
    }

    connect() {
        this.element.textContent = 'Hello details';
        window.addEventListener('toggle:status', (event) => {
            console.log("ooohps")
        });
    }

     toggleState(event) {
        // console.log("changement d'etat");
        console.log(event);
        // const id = event.currentTarget.dataset.orderdetailId
        // const response = await fetch(`/admin/orderdetail/${id}/toggle-state`, { method: 'POST' })
        // if (response.ok) {
        //     location.reload()
        // }
    }
}
