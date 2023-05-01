import { Component } from '../../../core/Component';
import AccordionJS from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import './Accordion.scss';

class Accordion extends Component {
  initAccordion() {
    new AccordionJS('.accordion-container', {
      duration: 400,
      showMultiple: true,
    });
  }

  componentDidMount() {
    this.initAccordion();
  }

  render() {
    return `
    <div class="accordion-container ">
        <div class="ac">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger acc-title">Мастер маникюра</button>
            </h2>
            <div class="ac-panel">
            <p>
            <div class="terms">
                Условия:
                <ul>
                     <li>Удобный график работы</li>
                     <li>Дружная команда</li>
                     <li>Cамый высокий процент оплаты труда в городе</li>
                     <li>Полный соц. пакет, официальное трудоустройство, больничные</li>
                 </ul> 
             </div>
             <div class="requirements">
                Требования:
                 <ul>
                     <li>От мастера требуется желание расти и развиваться, иметь базовые навыки и свой инструмент</li>
                 </ul>
             </div>
             <div class="responsibilities">
                Обязанности:
                 <ul>
                     <li>Быть вежливой, ухоженной и качественно выполнять свою работу</li>
                 </ul>
             </div>
        </p>
            </div>
        </div>  
        <div class="ac">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger">Бровист</button>
            </h2>
            <div class="ac-panel">
            <p>
            <div class="terms">
                Условия:
                <ul>
                     <li>Удобный график работы</li>
                     <li>Дружная команда</li>
                     <li>Cамый высокий процент оплаты труда в городе</li>
                     <li>Полный соц. пакет, официальное трудоустройство, больничные</li>
                 </ul> 
             </div>
             <div class="requirements">
                Требования:
                 <ul>
                     <li>От мастера требуется желание расти и развиваться, иметь базовые навыки и свой инструмент</li>
                 </ul>
             </div>
             <div class="responsibilities">
                Обязанности:
                 <ul>
                     <li>Быть вежливой, ухоженной и качественно выполнять свою работу</li>
                 </ul>
             </div>                   
        </p>
            </div>
        </div>  
        <div class="ac">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger">Визажист</button>
            </h2>
            <div class="ac-panel">
            <p>
                        <div class="terms">
                            Условия:
                            <ul>
                                 <li>Удобный график работы</li>
                                 <li>Дружная команда</li>
                                 <li>Cамый высокий процент оплаты труда в городе</li>
                                 <li>Полный соц. пакет, официальное трудоустройство, больничные</li>
                             </ul> 
                         </div>
                         <div class="requirements">
                            Требования:
                             <ul>
                                 <li>От мастера требуется желание расти и развиваться, иметь базовые навыки и свой инструмент</li>
                             </ul>
                         </div>
                         <div class="responsibilities">
                            Обязанности:
                             <ul>
                                 <li>Быть вежливой, ухоженной и качественно выполнять свою работу</li>
                             </ul>
                         </div>
                    </p>
            </div>
        </div>  
    </div>
        `;
  }
}

customElements.define('it-accordion', Accordion);
