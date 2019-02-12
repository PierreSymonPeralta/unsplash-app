
class CeGallery extends HTMLElement(){
  constructor(){
    super();
    this.title = 'Custom Element';
  }

  connectedCallback(){
    const title = document.createElement('div');
    title.textContent = this.title;
  }

}

customElements.define('ce-gallery', CeGallery);