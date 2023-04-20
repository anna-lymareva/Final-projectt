import { Component } from '../../../core/Component';

class AdminPage extends Component {
  render() {
    return `
    <it-preloader is-loading="${this.state.isLoading}">
      <div class="container">
        <div class="mt-5">

        </div>
      </div>
    </it-preloader>
  `;
  }
}

customElements.define('admin-page', AdminPage);
