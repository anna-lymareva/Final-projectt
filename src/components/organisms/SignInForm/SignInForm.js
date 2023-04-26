import { Component } from '../../../core/Component';
import { getFormData } from '../../../utils/form';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';

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
    <form>
      <div class="mb-3">
        <label class="form-label w-100">
          <p>Email<p>
          <input name="email" type="emails" class="form-control">
        </label>
      </div>
      <div class="mb-3">
        <label class="form-label w-100">
          <p>Password<p>
          <input name="password" type="password" class="form-control" required>
        </label>
      </div>
   
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
    `;
  }
}

customElements.define('sign-in-form', SignInForm);
