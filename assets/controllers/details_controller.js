import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        this.element.textContent = 'Hello details';
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
