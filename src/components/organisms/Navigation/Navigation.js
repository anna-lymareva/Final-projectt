// import { APP_EVENTS } from '../../../constants/appEvents';
import { appPages } from '../../../constants/appPages';
import { APP_ROUTES } from '../../../constants/appRoutes';
// import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
// import { eventEmmiter } from '../../../core/EventEmmiter';
// import { storageService } from '../../../services/StorageService';
import '../../molecules/MenuItems';
import './navigation.scss';
import '../../../core/Router/Link';
import '../../atoms/HeaderLogo';
import { ADMIN } from '../../../constants/userRoles';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      productsCount: 0,
    };
  }

  static get observedAttributes() {
    return ['user'];
  }

  getItems() {
    const user = JSON.parse(this.props.user);
    if (user) {
      if (user.email === ADMIN) {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn, APP_ROUTES.signOut].every(
            (item) => item !== menuItem.href,
          );
        });
      } else {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn, APP_ROUTES.signOut].every(
            (item) => item !== menuItem.href,
          );
        });
      }
    } else {
      return appPages.filter((menuItem) => {
        return [APP_ROUTES.signOut, APP_ROUTES.admin, APP_ROUTES.signUp, APP_ROUTES.signIn].every(
          (item) => item !== menuItem.href,
        );
      });
    }
  }
  // componentDidMount() {
  //   this.addEventListener()
  // }

  render() {
    return `
        <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <div class="header-logo-nav collapse navbar-collapse d-flex justify-content-between">
          <header-logo></header-logo>
          <menu-items 
              items='${JSON.stringify(appPages)}'
            ></menu-items>
          </div>
        </div>
      </nav>
        `;
  }
}

customElements.define('it-navigation', Navigation);
