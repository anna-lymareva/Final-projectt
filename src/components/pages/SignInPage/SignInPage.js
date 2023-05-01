import { Component } from '../../../core/Component';
import './SignInPage.scss';
import '../../organisms/SignInForm';
import '../../molecules/Preloader';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { authService } from '../../../services/Auth';
import { APP_ROUTES } from '../../../constants/appRoutes';

class SignInPage extends Component {
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

  signIn = async ({ detail }) => {
    const { data } = detail;
    this.setIsLoading(true);
    try {
      const user = await authService.signIn(data.email, data.password);
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.service });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.signIn, this.signIn);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.signIn, this.signIn);
  }

  render() {
    const message = this.state.errorMessage;

    return `
        <it-preloader is-loading="${this.state.isLoading}">
            <div class="container sign-in-form">
                <h1 class="text-center sign-in-title">Вход</h1>
                <div class="row justify-content-center m-0">
                    <div class="">
                        <div class="">
                            <div class="invalid-feedback d-block">${message}</div>
                            <sign-in-form></sign-in-form>
                        </div>
                    </div>
                <div>
            </div>
        </it-preloader>
    `;
  }
}

customElements.define('sign-in-page', SignInPage);
