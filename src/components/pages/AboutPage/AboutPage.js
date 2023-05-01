import { Component } from '../../../core/Component';
import './AboutPage.scss';
import { slides } from './constants';
import '../../molecules/Slider';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';

class AboutPage extends Component {
  toRegistr = (evt) => {
    if (evt.target.closest('.header-btn')) {
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: `sign-up` });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.toRegistr);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.toRegistr);
  }
  render() {
    return `
    <header>
         <div class="header-description pt-5">
              <div class="header-title">
                  <it-slider  height="100px" width="900px" slides='${JSON.stringify(
                    slides,
                  )}'></it-slider>
              </div>
              <div class="header-text"> <span>beautyhouse</span> — это дом стиля и красоты, в который ты вернешься</div>
              <button class="header-btn"><a href="#registration">онлайн запись</a></button>         
         </div> 
         </header>        
      `;
  }
}

customElements.define('about-page', AboutPage);
