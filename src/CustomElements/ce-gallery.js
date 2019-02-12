/* eslint-disable */
class CeGallery extends HTMLElement(){
  constructor(){
    super();
  }

  connectedCallback(){
    const title = document.createElement('div');
    title.textContent = this.title;
    this.appendChild(title);
  }
}

customElements.define('ce-gallery', CeGallery);