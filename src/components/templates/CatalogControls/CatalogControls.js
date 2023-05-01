import { Component } from '../../../core/Component';
import '../../organisms/Navigation';
import '../../molecules/CategoryItems';
import '../../molecules/SearchForm';

class CatalogControls extends Component {
  static get observedAttributes() {
    return ['categories'];
  }

  render() {
    const categories = this.props.categories;
    return `
        <nav class="navbar navbar-expand-lg mt-3">
          <div class="container">
            <div class="collapse navbar-collapse d-flex justify-content-between">
              <category-items items='${categories}'></category-items>
              <search-form></search-form>
            </div>
          </div>
        </nav>
      `;
  }
}

customElements.define('catalog-controls', CatalogControls);
