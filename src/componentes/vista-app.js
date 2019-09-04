import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { } from '@polymer/polymer/lib/elements/dom-repeat.js';

import './modal-box';
import '@polymer/iron-ajax/iron-ajax.js';


class Vista extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          padding:10px;
        }
        h2{
           font-size:1em;
           color:red;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <p>esto es polymer </p>
      <button on-click="doClick">clic</button>
        [[contador]]
      <modal-box id="modal">
        <h2>ModalBox  con slot</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore iusto consequatur praesentium tempora ratione magnam reprehenderit natus nemo molestias! Fugiat, dolores dolorem. Ullam, sapiente natus? Molestiae beatae minima sunt.</p>
        </modal-box>
        <h2>HOLA</h2>
      <button on-click="abrirModal">Abrir Modal</button>
      <button on-tap="guardar">
      Lista Pokemon
      </button>
      <dom-module>
      
      <dom-repeat items="{{lista}}">
            <template>
              <div>
              [[index]]
               [[item.name]]
               </div>
              </template>
              <iron-ajax
              auto
              url="https://pokeapi.co/api/v2/pokemon/{{item.id}}"
              handle-as="json"
              last-response="{{item.id}}"
              content-type="application/json"
              on-response="respuestaRecibida"
              debounce-Duration = "300"
              >
              </iron-ajax>
              </dom-repeat>
              </dom-module>
              
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
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'vista-app'
      },
      contador: {
        type: Number,
        value: 0

      }
    };
  }


  respuestaRecibida(e, request) {
    let response = request.response.results;
    this.lista = response;
    console.log(response);

  }
  errorRecibido(e, error) {
    console.log(error.request);
    this.mensaje = 'Error en la solicitud, con código ' + error.request.status;

  }
  guardar() {
    this.$.elajax.generateRequest();
  }

  doClick() {
    this.prop1 = 'estamos aprendiendo polymer';
    this.contador++;
  }
  abrirModal() {
    this.$.modal.open()
  }

}

window.customElements.define('vista-app', Vista);