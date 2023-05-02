import { Component } from '../../../core/Component';
import './GalleryPage.scss';

class GalleryPage extends Component {
  render() {
    return `
    <div class="gallery-description container"> 
        <h1 class="gallery-title">Фото работ</h1> 
        <div class="gallery container ">
            <img  src="../../../assets/images/12.jpg" alt="image">
            <img  src="../../../assets/images/1.jpg" alt="image">
            <img  src="../../../assets/images/13.jpg" alt="image">
            <img  src="../../../assets/images/10.png" alt="image">
        </div>
        <p class="gallery-text">Нас отличает  качество,
        профессионализм, любовь к своему делу и скорость работы. <br><span> У нас есть все, что Вам нужно для гармоничного образа и хорошего настроения!</span></p>
    </div>
      `;
  }
}

customElements.define('gallery-page', GalleryPage);
