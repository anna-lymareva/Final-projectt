import { Component } from '../../../core/Component';
import { getFormData } from '../../../utils/form';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import './RegisterForm.scss';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  setError = (key, message) => {
    this.setState((state) => {
      return {
        ...state,
        errors: {
          ...state.errors,
          [key]: message,
        },
      };
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = getFormData(evt.target);

    if (!email) {
      this.setError('email', 'The field is required');
      return;
    }

    eventEmmiter.emit(APP_EVENTS.signUp, {
      data: {
        email,
        password,
      },
    });
  };

  toRegistr = (evt) => {
    if (evt.target.closest('.use-btn')) {
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: `sign-in` });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.toRegistr);
    this.addEventListener('submit', this.onSubmit);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.toRegistr);
    this.removeEventListener('submit', this.onSubmit);
  }

  render() {
    return `
    <form class="register-form">
      <div class="register">
        <label class="register-label form-label w-100">
          <p class="register-text">Введите email<p>
          <input name="email" type="emails" class="register-input form-control">
        </label>
        ${
          this.state.errors.email
            ? `
          <div class="invalid-feedback">
            ${this.state.errors.email.message}
          </div>
        `
            : ''
        }
      </div>
      <div class="register">
        <label class="register-label form-label w-100">
          <p class="register-text">Введите номер телефона<p>
          <input name="phone" type="tel" class="register-input form-control" required>
        </label>
      </div>
      <div class="register">
        <label class="register-label form-label w-100">
          <p class="register-text">Введите пароль<p>
          <input name="password" type="password" class="register-input form-control" required>
        </label>
      </div>
      <div class="register">
        <label class="register-label form-label w-100">
          <p class="register-text">Повторите пароль<p>
          <input name="confirm-password" type="password" class="register-input form-control" required>
        </label>
      </div>
      <button type="submit" class="btn reg-btn btn-danger mb-5">Зарегистрироваться</button>
      <div class="use-info mb-5">
          Уже зарегистрированы? <button class="use-btn">Вход</button>  
      </div>
    </form>
    `;
  }
}

customElements.define('register-form', RegisterForm);
