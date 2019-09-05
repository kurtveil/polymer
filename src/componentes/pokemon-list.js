import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { } from '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-card/paper-card.js';

class Pokemon extends PolymerElement {
  static get properties() {
    return {

    }
  }

  static get template() {
    return html`
    <paper-card heading="Emmental" image="http://placehold.it/350x150/FFC107/000000" alt="Emmental">
    <div class="card-content">
      Emmentaler or Emmental is a yellow, medium-hard cheese that originated in the area around Emmental, Switzerland. It is one of the cheeses of Switzerland, and is sometimes known as Swiss cheese.
    </div>
    <div class="card-actions">
      
    </div>
  </paper-card>
    Lista Pokemon    
    <dom-module>
    <dom-repeat items="{{lista}}">
    <template>
    <ul>  
    <li>
    [[index]]
    [[item.name]]
    </li>
    </ul>
      
        </template>
          <iron-ajax
            auto
            url="https://pokeapi.co/api/v2/pokemon/"
            handle-as="json"
            last-response="{{item}}"
            content-type="application/json"
            on-response="respuestaRecibida"
            debounce-Duration = "300"
            >
         </iron-ajax>
         
         <iron-ajax
         auto
         url="https://pokeapi.co/api/v2/pokemon/"
         handle-as="json"
         last-response="{{item.id}}"
         content-type="application/json"
         on-response="respuestaRecibida"
         debounce-Duration = "300"
         >
      </iron-ajax>
    </dom-repeat>
    </dom-module>
    `;
  }

  respuestaRecibida(e, request) {
    let response = request.response.results;
    this.lista = response;

  }
  errorRecibido(e, error) {
    console.log(error.request);
    this.mensaje = 'Error en la solicitud, con código ' + error.request.status;

  }
  guardar() {
    this.$.elajax.generateRequest();
  }

}

customElements.define('pokemon-list', Pokemon);