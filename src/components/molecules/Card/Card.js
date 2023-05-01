import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import './card.scss';

class Card extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'price', 'id'];
  }

  toRegistr = (evt) => {
    if (evt.target.closest('.card-btn')) {
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
    const { image, title, price } = this.props;

    return `
      <div class="card">
        <img class="card-image" src="${image}" alt="image">
        <div class="card-body">
          <h5 class="card-title pb-5">${title}</h5>
          <div class='price-info d-flex justify-content-between align-items-center pt-3'>
            <strong class="card-price mb-0">
              от ${price} BYN
            </strong>
            <button class="card-btn btn">Записаться</button>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define('it-card', Card);
