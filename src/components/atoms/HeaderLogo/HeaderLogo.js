import { Component } from '../../../core/Component';

import './HeaderLogo.scss';

class HeaderLogo extends Component {
  render() {
    return `
        <div class="header-logo">
            beauty<span>house</span>
        </div>
        `;
  }
}

customElements.define('header-logo', HeaderLogo);
