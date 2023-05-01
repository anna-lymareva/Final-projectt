import { appPages } from '../../../constants/appPages';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { Component } from '../../../core/Component';
import '../../molecules/MenuItems';
import './navigation.scss';
import '../../../core/Router/Link';
import '../../atoms/HeaderLogo';
import { ADMIN } from '../../../constants/userRoles';

class Navigation extends Component {
  static get observedAttributes() {
    return ['user'];
  }

  getItems() {
    const user = JSON.parse(this.props.user);
    console.log(user);
    if (user) {
      if (user.email === ADMIN) {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      } else {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn, APP_ROUTES.admin].every(
            (item) => item !== menuItem.href,
          );
        });
      }
    } else {
      return appPages.filter((menuItem) => {
        return [APP_ROUTES.signOut, APP_ROUTES.admin].every((item) => item !== menuItem.href);
      });
    }
  }

  render() {
    return `
        <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <div class="header-logo-nav collapse navbar-collapse d-flex justify-content-between">
          <header-logo></header-logo>
          <menu-items 
              items='${JSON.stringify(this.getItems())}'
            ></menu-items>
          </div>
        </div>
      </nav>
        `;
  }
}

customElements.define('it-navigation', Navigation);
