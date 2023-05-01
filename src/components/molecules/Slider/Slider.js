import { Component } from '../../../core/Component';
import Swiper, { Autoplay } from 'swiper';
import './Slider.scss';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

class Slider extends Component {
  static get observedAttributes() {
    return ['slides', 'width', 'height'];
  }

  inintSwiper() {
    new Swiper('.it-slider-swiper', {
      modules: [Autoplay],
      slidesPerView: 1,
      spaceBetween: 50,
      autoplay: {
        delay: 1000,
      },
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
          </div> 
    `;
  }
}

customElements.define('it-slider', Slider);
