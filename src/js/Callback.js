export default class Callback {
  constructor() {
    this.callbackWidget = document.querySelector('.callback-widget');
    this.callbackForm = document.querySelector('.callback-form');
    this.calbackFormCloseButton = document.querySelector('.callback-form-close');
  }

  init() {
    this.callbackWidget.addEventListener('click', () => {
      this.callbackForm.classList.remove('hidden');
      this.callbackWidget.classList.add('hidden');
    });

    this.calbackFormCloseButton.addEventListener('click', () => {
      this.callbackWidget.classList.remove('hidden');
      this.callbackForm.classList.add('hidden');
    });
  }
}
