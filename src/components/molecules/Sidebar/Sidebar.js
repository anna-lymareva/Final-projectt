import { Component } from '../../../core/Component';

class Sidebar extends Component {
  render() {
    return `
        <ul class="list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center border-0">
            <span class="me-1">Category</span>
            <img src="./images//icons//chevron-up-svgrepo-com.svg" alt="chevron" width="16" height="16">
          </button>
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4">
            <li><a href="#" class="nav-link active">Overview</a></li>
            <li><a href="#" class="nav-link">Updates</a></li>
            <li><a href="#" class="nav-link">Reports</a></li>
          </ul>
        </li>
      </ul>
        `;
  }
}

customElements.define('it-sidebar', Sidebar);
