import { Component } from '../../../core/Component';
import { getFormData } from '../../../utils/form';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import './SignInForm.scss';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = getFormData(evt.target);

    if (!email) {
      this.setError('email', 'The field is required');
      return;
    }

    eventEmmiter.emit(APP_EVENTS.signIn, {
      data: {
        email,
        password,
      },
    });
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
  }

  render() {
    return `
    <form class="sign-form">
      <div class="sign">
        <label class="form-label w-100">
          <p class="sign-text">Введите email<p>
          <input name="email" type="emails" class="sign-input form-control">
        </label>
      </div>
      <div class="sign">
      <label class=" form-label w-100">
        <p class="sign-text">Введите номер телефона<p>
        <input name="phone" type="tel" class="sign-input form-control" required>
      </label>
    </div>
      <div class="sign">
        <label class="form-label w-100">
          <p class="sign-text">Введите пароль<p>
          <input name="password" type="password" class="sign-input form-control" required>
        </label>
      </div>   
      <button type="submit" class="btn sign-btn btn-danger mb-5">Вход</button>
    </form>
    `;
  }
}

customElements.define('sign-in-form', SignInForm);
