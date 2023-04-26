import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { storageService } from '../../../services/StorageService';
import './Cards.scss';

class Cards extends Component {
  static get observedAttributes() {
    return ['title', 'image', 'description', 'price', 'id'];
  }

  addToCart = (evt) => {
    if (evt.target.closest('.btn')) {
      const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
      storageService.setItem(APP_STORAGE_KEYS.cartData, [...allItems, this.props]);
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.addToCart);
  }
  componentWillUnmount() {
    this.removeEventListener('click', this.addToCart);
  }

  render() {
    const { image, title, price, description } = this.props;
    return `
    <div class="card">
      <img class="image-fit" src="${image}"
        class="card-img-top" alt="image">
      <div class="card-body">
        <h5 class="card-title fix-line-of-title">${title}</h5>
        <p class="card-text fix-line-of-description">${description}</p>
          <div class="d-flex justify-content-between align-items-center border-top pt-2">
            <strong class="card-title pricing-card-title mb-0">${price}$</strong>
            <button class="btn btn-primary">Купить</button>
          </div>
       </div>
  </div>
   `;
  }
}
customElements.define('it-cards', Cards);
