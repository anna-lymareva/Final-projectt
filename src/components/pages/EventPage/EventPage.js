import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';
import './EventPage.scss';
import '../../molecules/Accordion';

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
    <div class="vacancy-container">
    <div class="vacancy-title mt-0">Вакансии</div>
    <div class="vacancy-info">
                <p class="vacancy-text">
                <span>Beautyhouse</span> - это работодатель, который заботится о каждом сотруднике и создает комфортную и безопасную атмосферу для творческой самореализации, карьерного и личностного роста.
            </p>
            <p class="vacancy-contact">Наш дружный коллектив всегда нуждается в квалифицированных специалистах.
                Если ты готов присоединиться к нам — свяжись с нами по номеру <br><span>+375 25 545 83 56</span> </p>
            <div class="vacancy-title-min">Кто нам нужен:</div>
            </div> 
    <div class="mb-4">
        <it-accordion></it-accordion> 
    </div>
    </div>
      `;
  }
}

customElements.define('event-page', EventPage);
