import { appPages } from '../../../constants/appPages';
import { Component } from '../../../core/Component';
// import { APP_EVENTS } from '../../../constants/appEvents';
// import { eventEmmiter } from '../../../core/EventEmmiter';
// import { storageService } from '../../../services/StorageService';
// import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';

import '../../../core/Router/Links';
import '../../molecules/MenuItems';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return `
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
           <div class="container">
              <div class=" header-logo-nav collapse navbar-collapse d-flex  justify-content-between">
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
