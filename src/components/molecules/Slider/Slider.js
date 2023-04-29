import { Component } from '../../../core/Component';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

import './Slider.scss';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

class Slider extends Component {
  static get observedAttributes() {
    return ['slides', 'width', 'height'];
  }

  inintSwiper() {
    new Swiper('.it-slider-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      spaceBetween: 50,
    });
  }

  componentDidMount() {
    this.inintSwiper();
  }

  render() {
    const { width, height } = this.props;
    return `
         <div class="it-slider-swiper swiper" style="height:${height ?? '300px'}; width:${
      width ?? '100%'
    }">
            <div class="swiper-wrapper">
              ${JSON.parse(this.props.slides)
                .map((slide) => {
                  return `
                    <div class="swiper-slide">${slide}</div> 
              `;
                })
                .join('  ')}
            </div>
            <div class="swiper-pagination"></div>     
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div> 
    `;
  }
}

customElements.define('it-slider', Slider);
