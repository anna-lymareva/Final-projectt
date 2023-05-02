import { Component } from '../../../core/Component';
import '../../molecules/Pagination';
import '../../organisms/CardList';
import '../../templates/CatalogControls';
import './ServicePage.scss';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import '../../molecules/Preloader';
import { databaseService } from '../../../services/DatabaseService';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';

class ServicePage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      limit: 4,
      currentPage: 1,
      categories: [],
      isLoading: false,
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  sliceData(currentPage = 1) {
    const { limit } = this.state;

    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;

    const data = this.state.products;

    return data.slice(start, end);
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

  onFilterProductsByCategory = async (evt) => {
    const { selectedCategory } = evt.detail;
    const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
    const filtered =
      selectedCategory.name === 'Все услуги'
        ? products
        : products.filter((item) => item.category === selectedCategory.id);
    this.setState((state) => {
      return {
        ...state,
        products: filtered,
        currentPage: 1,
      };
    });
  };

  onSearch = async (evt) => {
    const { data } = evt.detail;
    const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
    this.setState((state) => {
      return {
        ...state,
        products: products.filter((item) => {
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

  setCategories(categories) {
    this.setState((state) => {
      return {
        ...state,
        categories,
      };
    });
  }

  getAllCategories = async () => {
    this.setIsLoading(true);
    try {
      const data = await databaseService.getCollection(FIRESTORE_KEYS.categories);
      this.setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    this.getProducts();
    this.sliceData();
    this.getAllCategories();
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
    <it-preloader is-loading="${this.state.isLoading}">
        <catalog-controls categories='${JSON.stringify(this.state.categories)}'></catalog-controls>
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
      </it-preloader>

    `;
  }
}

customElements.define('service-page', ServicePage);
