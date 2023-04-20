import { Component } from '../../../core/Component';

class ContactPage extends Component {
  render() {
    return `
         <h1>ContactPage</h1>
      `;
  }
}

customElements.define('contact-page', ContactPage);
