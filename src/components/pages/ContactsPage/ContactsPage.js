import { Component } from '../../../core/Component';
import './ContactPage.scss';

class ContactsPage extends Component {
  render() {
    return `
    <div class="container contact">
    <div class="contact-title">контакты</div>                      
    <div class="contact-info">
        <div class="contact-image">
            <img src="../../assets/images/contact.jpg" alt="img">
        </div>
        <div class="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.2592975037114!2d31.00216871580443!3d52.43821747979885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d46907104b6077%3A0x4b18482f9266106a!2z0YPQuy4g0KHQvtCy0LXRgtGB0LrQsNGPIDU2LCDQk9C-0LzQtdC70YwgMjQ2MDAz!5e0!3m2!1sru!2sby!4v1671182100314!5m2!1sru!2sby" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>            
    </div>
    <div class="contact-info-icons">                     
        <ul class="contact-icons">
            <li class="info">
              <img class="footer-link" src="../../../assets/images/icons/location.svg" alt="icon"> 
              <p>Беларусь, Гомель, Советская 56</p>                                 
            </li>
            <li class="info">            
              <img class="footer-link" src="../../../assets/images/icons/time.svg" alt="icon">   
              <p>Пн-Вс: 10:00 - 20:00</p>                    
            </li>
            <li class="info">
              <img class="footer-link" src="../../../assets/images/icons/phone.svg" alt="icon">
              <p>+375 (29) 8552560</p>                       
            </li>                  
        </ul>            
        </div>   
        </div>
        `;
  }
}

customElements.define('contacts-page', ContactsPage);
