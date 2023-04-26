import { Component } from '../../../core/Component';
import { slides } from './constants';
import '../../molecules/Slider';
import './GalleryPage.scss';

class GalleryPage extends Component {
  render() {
    return `
    <div class="gallery-description container"> 
        <h1 class="gallery-title">Фото работ</h1> 
        <it-slider height ="400px" slides='${JSON.stringify(slides)}'></it-slider>
             
    </div>
      `;
  }
}

customElements.define('gallery-page', GalleryPage);

/* <it-slider height ="400px" slides='${JSON.stringify(slides)}'></it-slider>    */