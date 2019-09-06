import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { } from '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/paper-card/paper-card.js';
import './modal-box';

class Pokemon extends PolymerElement {
  static get properties() {
    return {

    }
  }

  static get template() {
    return html`
    <dom-module>
        <style>
            div{
              border-radius: 6px;
              padding: 10px;
              background-color: beige;
              width: 120px;
              text-align: center;
              display:inline-block;
            }
         </style>

              Lista Pokemon   
              <iron-collapse id="collapse">
              <div>Content goes here...</div>
            </iron-collapse>
            <div on-tap="buscar">
              buscar
            </div>
            <dom-repeat items="{{pokemon}}">
                <template>
                    <ul>  
                        <paper-card >
                            <div class="card-content">
                                [[item.name]]
                                <br>
                                
                              </div>
                        </paper-card>
                      </ul>
                  </template>
              </dom-repeat>
              <dom-repeat items="{{abilidades}}">
              <template>
                  <ul>  
                    [[item.name]]
                    </ul>
                </template>
            </dom-repeat>


        <iron-ajax
        auto
          url="https://pokeapi.co/api/v2/pokemon/"
          handle-as="json"
          last-response="{{pokemon}}"
          content-type="application/json"
          on-response="listaNombres"
          debounce-Duration = "300"
          >
       </iron-ajax>
       
       <iron-ajax
       auto
       url="https://pokeapi.co/api/v2/ability/"
       handle-as="json"
       last-response="{{abilidades}}"
       content-type="application/json"
       on-response="listaAbilidades"
       debounce-Duration = "300"
       >
       </iron-ajax>
       </dom-module>
    `;
  }

  listaNombres(e, request) {
    let response = request.response.results;
    this.pokemon = response;
    console.log(response)
  }
  listaAbilidades(e, request) {
    let response = request.response.results;
    this.abilidades = response;
    console.log(response)
  }
  buscar() {
    this.$.elajax.generateRequest();
  }
  abrirModal() {
    this.$.modal.open()
  }

}

window.customElements.define('pokemon-list', Pokemon);
