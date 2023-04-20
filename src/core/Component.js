export class Component extends HTMLElement {
  constructor() {
    super();
    this.state = {};
    this.props = {};
    this.isShadow = false;
  }

  setState(callback) {
    this.state = callback(this.state);
    if (this.isShadow) {
      this.shadowRoot.innerHTML = this.render();
    } else {
      this.innerHTML = this.render();
    }
  }

  connectedCallback() {
    if (this.isShadow) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = this.render();
    } else {
      this.innerHTML = this.render();
    }
    this.componentDidMount();
  }

  disconnectedCallback() {
    this.componentWillUnmount();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);
    this.getAttributeNames().forEach((attributeName) => {
      this.props[attributeName] = this.getAttribute(attributeName);
    });
  }

  componentDidMount() {}
  componentWillUnmount() {}
  componentWillUpdate() {}
  render() {}
}

customElements.define('it-component', Component);
