import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';

class EventPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  setProducts = (products) => {
    const mapProducts = products
      .filter((item, index, arr) => {
        return arr.findIndex((findItem) => findItem.id === item.id) === index;
      })
      .map((item) => {
        return {
          ...item,
          quantity: item.quantity
            ? item.quantity
            : products.filter((filterItem) => filterItem.id === item.id).length,
        };
      });

    this.setState((state) => {
      return {
        ...state,
        products: mapProducts,
      };
    });
  };

  onDeleteItem = (evt) => {
    if (evt.target.closest('.btn')) {
      const id = evt.target.dataset.id;
      const items = this.state.products;
      const filteredItems = items
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => Boolean(item.quantity));
      storageService.setItem(APP_STORAGE_KEYS.cartData, filteredItems);
    }
  };

  onStorage = (evt) => {
    this.setProducts(evt.detail.data);
  };

  componentDidMount() {
    const products = storageService.getItem(APP_STORAGE_KEYS.cartData);
    this.setProducts(products ?? []);
    this.addEventListener('click', this.onDeleteItem);
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  render() {
    return `
      <div class="container">
      <form class="form">
      <input type="text" id="name" placeholder="Name">
      <input type="number" id="attendee" placeholder="Attendees">
      <textarea id="description" cols="30" rows="10" placeholder="Description..."></textarea>
      <select id="status">
          <option value="0">Free</option>
          <option value="1">Paid</option>
      </select>
      <button class="btn btn-primary">Save</button>
  </form>
      </div>  
      `;
  }
}

customElements.define('event-page', EventPage);
