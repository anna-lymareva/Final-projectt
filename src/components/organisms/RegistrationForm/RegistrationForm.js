import { Component } from '../../../core/Component';
// import './RegistrationPage.scss';
import { getFormData } from '../../../utils/form';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';

class RegistrationForm extends Component {
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

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
  }
  render() {
    return `
    <div class="mb-3">
        <label class="form-label w-100">
          <p>Email<p>
          <input name="email" type="emails" class="form-control">
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
      <div class="mb-3">
        <label class="form-label w-100">
          <p>Password<p>
          <input name="password" type="password" class="form-control" required>
        </label>
      </div>
    <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <label for="date">Дата</label>
                <input type="date" name="date" id="date">
                <label for="time">Время</label>
                <input type="time" name="time" id="time">
                <label for="phone">Номер телефона</label>
                <input type="tel" name="phone" id="phone">
                <button type="submit" class="btn btn-primary">Register</button>
      `;
  }
}

customElements.define('registration-form', RegistrationForm);
