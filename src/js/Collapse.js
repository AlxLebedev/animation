export default class Collapse {
  constructor() {
    this.toggleCollapseButton = document.querySelector('.toggle-colapse-button');
    this.collapseElement = document.querySelector('.collapse');
  }

  init() {
    this.toggleCollapseButton.addEventListener('click', () => {
      this.collapseElement.classList.toggle('active');
    });
  }
}
