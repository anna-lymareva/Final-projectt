import { Component } from '../../../core/Component';
import { slides } from './constants';
import '../../molecules/Slider';
import './GalleryPage.scss';

class GalleryPage extends Component {
  render() {
    return `
    <div class="gallery-description "> 
    <div class="title">Фото работ</div> 
    <it-slider height ="400px" width ="85%" slides='${JSON.stringify(slides)}'></it-slider>        
    </div>
      `;
  }
}

customElements.define('gallery-page', GalleryPage);
