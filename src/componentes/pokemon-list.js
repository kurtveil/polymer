import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class PokemonList extends PolymerElement  {
    static get is() { return 'employee-list'; }
    static get properties() {
      return {
        employees: {
          value() {
            return [
              {first: 'Bob', last: 'Smith'},
              {first: 'Sally', last: 'Johnson'},
              
            ];
          }
        }
      };
    }
  }

customElements.define('pokemon-list', PokemonList);