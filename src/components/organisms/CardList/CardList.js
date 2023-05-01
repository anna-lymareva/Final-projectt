import { Component } from '../../../core/Component';
import './CardList.scss';
import '../../molecules/Card';

class CardList extends Component {
  static get observedAttributes() {
    return ['products'];
  }

  render() {
    const products = JSON.parse(this.props.products);

    return `
        <div class="container card-list">
            ${products
              .map((item) => {
                return `
                <div class="col-sm-3 mb-3 card-col">
                    <it-card
                        image='${item.preview}'
                        title='${item.title}'
                        price='${item.price}'
                        id="${item.id}"
                    ></it-card>
                </div>
                `;
              })
              .join(' ')}
        </div>
        `;
  }
}

customElements.define('card-list', CardList);
