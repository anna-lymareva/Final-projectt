import { APP_EVENTS } from '../../constants/appEvents';
import { Component } from '../Component';
import { eventEmmiter } from '../EventEmmiter';

export class Link extends Component {
  constructor() {
    super();
    this.isShadow = true;
  }

  static get observedAttributes() {
    return ['to'];
  }

  onClick = (evt) => {
    evt.preventDefault();
    eventEmmiter.emit(APP_EVENTS.changeRoute, { target: this.props.to });
  };

  componentDidMount() {
    this.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    return `
    <style>
      a {
        text-decoration: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;
        font-size: 1.2rem;
        scroll-behavior: smooth;
      }
    </style>  
      <a href="${this.props.to}">
        <slot></slot>
    </a>
      `;
  }
}

customElements.define('route-link', Link);
