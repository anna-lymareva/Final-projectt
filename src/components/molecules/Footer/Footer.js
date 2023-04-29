import { Component } from '../../../core/Component';
import './Footer.scss';

class Footer extends Component {
  render() {
    return `
    <div class="container footer">
     <footer class="container d-flex justify-content-between border-top ">    
       <div class="d-flex flex-column flex-sm-row justify-content-between m-0 pt-2">
         <p style="color:rgb(246, 36, 71)">© 2022 Company, Inc. All rights reserved.</p>         
       </div>
       <div>
          <div class="icons d-flex justify-content-around pt-2">
            <img class="footer-link" src="../../../assets/images/icons/instagram.svg" alt="icon"> 
            <img class="footer-link" src="../../../assets/images/icons/twitter.svg" alt="icon"> 
            <img class="footer-link" src="../../../assets/images/icons/facebook.svg" alt="icon"> 
            <img class="footer-link" src="../../../assets/images/icons/whatsapp.svg" alt="icon"> 
          </div>  
       </div>
     </footer>
    </div>`;
  }
}
customElements.define('it-footer', Footer);
