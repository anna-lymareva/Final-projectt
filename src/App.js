import { Component } from './core/Component';
import './core/Router/Router';
import './components/pages/AboutPage';
import './components/pages/ContactPage';
import './components/pages/GalleryPage';
import './components/pages/ServicesPage';
import './components/pages/ErrorPage';
import './components/pages/RegistrationPage';
import './components/pages/TeamPage';
import './components/pages/AdminPage';
import './components/molecules/Footer';
import './components/organisms/Navigation';
import './components/atoms/HeaderLogo';
import { routes } from './constants/routes';

class App extends Component {
  render() {
    return `
    <it-preloader>
      <div class="main-layout">             
          <it-navigation ></it-navigation>  
         <main>         
            <app-router>
                  <app-route path = "${routes.about.href}" title="about" component = "${routes.about.component}"></app-route>
                  <app-route path = "${routes.gallery.href}" title="gallery" component = "${routes.gallery.component}"></app-route>
                  <app-route path = "${routes.services.href}" title="services" component = "${routes.services.component}"></app-route>
                  <app-route path = "${routes.contacts.href}" title="contacts" component = "${routes.contacts.component}"></app-route>
                  <app-route path = "${routes.team.href}" title="team" component = "${routes.team.component}"></app-route>
                  <app-route path = "${routes.registration.href}" title="registration" component = "${routes.registration.component}"></app-route>
                  <app-route path = "${routes.admin.href}" title="admin" component = "${routes.admin.component}"></app-route>
                  <app-route path = "${routes.error.href}" title="error" component = "${routes.error.component}"></app-route>                  
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
