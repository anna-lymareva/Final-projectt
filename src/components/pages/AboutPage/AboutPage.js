import { Component } from '../../../core/Component';
import './AboutPage.scss';
// import { slides } from './constants';
import '../../molecules/Slider';

class AboutPage extends Component {
  render() {
    return `
    <header>

         <div class="header-description">
              <div class="header-title">
                  <p class="header-slide">You are beautiful</p>              
              </div>
              <div class="header-text"> <span>beautyhouse</span> — это дом стиля и красоты, в который ты вернешься</div>
              <button class="header-btn"><a href="#registration">онлайн запись</a></button>         
         </div> 
         </header>        
      `;
  }
}

customElements.define('about-page', AboutPage);
