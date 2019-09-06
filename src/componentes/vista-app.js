import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { } from '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './modal-box';


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
      
      <button on-click="doClick">clic</button>
        [[contador]]
      <modal-box id="modal">
        <h2>ModalBox  con slot</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore iusto consequatur praesentium tempora ratione magnam reprehenderit natus nemo molestias! Fugiat, dolores dolorem. Ullam, sapiente natus? Molestiae beatae minima sunt.</p>
        </modal-box>
      <button on-click="abrirModal">Abrir Modal</button>
    
    
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


  
  doClick() {
    this.contador++;
  }
  abrirModal() {
    this.$.modal.open()
  }

}

window.customElements.define('vista-app', Vista);