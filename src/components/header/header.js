import template from './header.template';
import './header.css';

class Header {
  static draw() {
    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = template;
  }
}

export default Header;
