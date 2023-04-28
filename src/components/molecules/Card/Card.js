import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';
import './card.scss';

class Card extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'price', 'id'];
  }

  addToCart = (evt) => {
    if (evt.target.closest('.btn')) {
      const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
      storageService.setItem(APP_STORAGE_KEYS.cartData, [...allItems, this.props]);
    }
    if (evt.target.closest('.card-btn')) {
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: `sign-up` });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.addToCart);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addToCart);
  }

  render() {
    const { image, title, price } = this.props;

    return `
      <div class="card">
        <img class="card-image" src="${image}" alt="image">
        <div class="card-body">
          <h5 class="card-title pb-5">${title}</h5>
          <div class='price-info d-flex justify-content-between align-items-center pt-3'>
            <strong class="card-price mb-0">
              ${price} BYN
            </strong>
            <button class="card-btn btn">Записаться</button>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define('it-card', Card);
