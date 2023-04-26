import { Component } from './core/Component';
import './core/Router/Router';
import { routes } from './constants/routes';

import './components/organisms/Navigation';
// import './components/pages/BlogPage';
import './components/pages/AboutPage';
import './components/pages/GalleryPage';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';
import './components/molecules/Footer';
import './components/pages/AdminPage/AdminPage';
import './components/pages/SignUpPage';
import './components/pages/SignInPage';
import './components/molecules/Preloader';
import './components/pages/SignOutPage';
import { authService } from './services/Auth';
import { eventEmmiter } from './core/EventEmmiter';
import { APP_EVENTS } from './constants/appEvents';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      user: null,
    };
  }

  setUser(user) {
    this.setState((state) => {
      return {
        ...state,
        user,
      };
    });
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  async authorizeUser() {
    this.setIsLoading(true);
    try {
      const user = await authService.authorizeUser();
      this.setUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  onAuthorizeUser = ({ detail }) => {
    this.setUser(detail.user);
  };

  componentDidMount() {
    this.authorizeUser();
    eventEmmiter.on(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  render() {
    return `
      <it-preloader is-loading="${this.state.isLoading}">
      <div class="main-layout">
      <it-navigation user='${JSON.stringify(this.state.user)}'></it-navigation>
        <main>
        <app-router>
        
          <app-route 
          path = "${routes.about.href}" 
          title="about" 
          component = "${routes.about.component}">
          </app-route>

          <app-route 
            path="${routes.catalog.href}" 
            title="Catalog" 
            component="${routes.catalog.component}">
          </app-route>

          <app-route 
            path="${routes.contacts.href}" 
            title="Contacts" 
            component="${routes.contacts.component}">
          </app-route>

          <app-route 
            path="${routes.cart.href}" 
            title="Cart" 
            component="${routes.cart.component}">
          </app-route>

          <app-route 
            path="${routes.gallery.href}" 
            title="Gallery" 
            component="${routes.gallery.component}">
          </app-route>

          <app-route 
            path="${routes.productView.href}" 
            title="Product" 
            component="${routes.productView.component}">
          </app-route>

          <app-route 
            path="${routes.admin.href}" 
            title="Admin Page" 
            component="${routes.admin.component}">
          </app-route>

          <app-route 
            path="${routes.signUp.href}" 
            title="Sign Up" 
            component="${routes.signUp.component}">
          </app-route>

          <app-route 
            path="${routes.signIn.href}" 
            title="Sign Up" 
            component="${routes.signIn.component}">
          </app-route>

          <app-route 
            path="${routes.signOut.href}" 
            title="Sign out" 
            component="${routes.signOut.component}">
          </app-route>

          <app-route 
            path="${routes.error.href}" 
            title="Error" 
            component="${routes.error.component}">
          </app-route>

          <app-outlet></app-outlet>

        </app-router>
        </main>
        <it-footer></it-footer>
      </div>
      </it-preloader>
    `;
  }
}

customElements.define('it-app', App);
