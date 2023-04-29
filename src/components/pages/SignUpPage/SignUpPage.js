import { Component } from '../../../core/Component';
import '../../organisms/RegisterForm';
import './SignUpPage.scss';
import '../../molecules/Preloader';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { authService } from '../../../services/Auth';
import { APP_ROUTES } from '../../../constants/appRoutes';

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      errorMessage: '',
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  setError(error) {
    this.setState((state) => {
      return {
        ...state,
        errorMessage: error,
      };
    });
  }

  register = async ({ detail }) => {
    const { data } = detail;
    this.setIsLoading(true);
    try {
      const user = await authService.signUp(data.email, data.password);
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.service });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.signUp, this.register);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.signUp, this.register);
  }

  render() {
    const message = this.state.errorMessage;
    return `
        <it-preloader is-loading="${this.state.isLoading}">
            <div class="container sign-up-form">
                <h1 class="text-center sign-up-title">Sign Up</h1>
                <div class="row justify-content-center ">
                    <div class="col-6">
                        <div class="">
                            <div class="invalid-feedback d-block">${message}</div>
                            <register-form></register-form>
                        </div>
                    </div>
                <div>
            </div>
        </it-preloader>
    `;
  }
}

customElements.define('sign-up-page', SignUpPage);
