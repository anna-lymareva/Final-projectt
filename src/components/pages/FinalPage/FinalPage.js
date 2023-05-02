import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import './FinalPage.scss';

class FinalPage extends Component {
  toRegistr = (evt) => {
    if (evt.target.closest('.final-btn')) {
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: `service` });
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
    <div class="final-container text-center">
      <div>
        <img class="final-link" src="../../../assets/images/icons/yes.svg" alt="icon"> 
        Ваша заявка принята!
       </div>    
        <p class="final-text">
            В течении 5 минут, наши операторы свяжутся с вами, для уточнения деталей и записи на услугу.<br>
            <span>Спасибо, что выбрали нас!</span>
        </p>
        <button class="btn mt-5 final-btn btn-danger">Продолжить</button>
    </div>
        `;
  }
}

customElements.define('final-page', FinalPage);
