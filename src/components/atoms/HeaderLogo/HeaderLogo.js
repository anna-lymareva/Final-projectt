import { Component } from '../../../core/Component';
import '../../../core/Router/Link';
import { APP_ROUTES } from '../../../constants/appRoutes';
import './HeaderLogo.scss';

class HeaderLogo extends Component {
  render() {
    return `
    <route-link to="${APP_ROUTES.about}">
    <a href="#" class="text-decoration-none">
        <div class="header-logo">
            beauty<span>house</span>
        </div>
    </a>    
    </route-link>    
        `;
  }
}

customElements.define('header-logo', HeaderLogo);
