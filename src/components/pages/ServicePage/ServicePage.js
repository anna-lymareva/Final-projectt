import { Component } from '../../../core/Component';
import '../../molecules/Pagination';
import '../../organisms/CardList';
import '../../templates/CatalogControls';
import './ServicePage.scss';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { CATEGORIES } from '../../../constants/categories';
import { databaseService } from '../../../services/DatabaseService';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';

class ServicePage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      limit: 12,
      currentPage: 1,
    };
  }

  sliceData(currentPage = 1) {
    const { limit } = this.state;
    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;
    return this.state.products.slice(start, end);
  }

  onChangePaginationPage = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        currentPage: Number(evt.detail.page),
      };
    });
    window.scrollTo(0, { behavior: 'smooth' });
  };

  onFilterProductsByCategory = (evt) => {
    const { selectedCategory } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        products: this.state.products.filter((item) => item.category.id === selectedCategory.id),
        currentPage: 1,
      };
    });
  };

  onSearch = (evt) => {
    const { data } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        products: this.state.products.filter((item) => {
          return item.title.toLowerCase().includes(data.search.toLowerCase());
        }),
        currentPage: 1,
      };
    });
  };

  setProducts(products) {
    this.setState((state) => {
      return {
        ...state,
        products,
      };
    });
  }

  getProducts = async () => {
    try {
      const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getProducts();
    this.sliceData();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.on(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.on(APP_EVENTS.searchProducts, this.onSearch);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.off(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.off(APP_EVENTS.searchProducts, this.onSearch);
  }

  render() {
    return `
    <catalog-controls categories='${JSON.stringify(CATEGORIES)}'></catalog-controls>
    <div class="container mt-5 border-top">
        <div class="row mt-5">
          <div class="services-description">
            <card-list products='${JSON.stringify(
              this.sliceData(this.state.currentPage),
            )}'></card-list>
            <div class=''>
              <it-pagination 
                total="${this.state.products.length}"
                limit="${this.state.limit}"
                current="${this.state.currentPage}"
              ></it-pagination>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('service-page', ServicePage);
