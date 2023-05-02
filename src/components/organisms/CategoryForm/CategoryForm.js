import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

import './CategoryForm.Scss';

class CategoryForm extends Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    eventEmmiter.emit(APP_EVENTS.createCategory, { data });
    evt.target.reset();
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
        <label class="form-label text-danger">Создайте категорию</label>
        <input 
          name="name" 
          type="text" 
          class="form-control category-inputs" 
          placeholder="Имя категории"
          required
        >
      </form> 
    `;
  }
}

customElements.define('category-form', CategoryForm);
