export default class Liker {
  constructor() {
    this.likerField = document.querySelector('.liker-field');
    this.sendLikeButton = document.querySelector('.send-like-button');
  }

  init() {
    this.sendLikeButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      const randomIndex = Math.floor(Math.random() * 4) + 1;
      const newIMG = document.createElement('img');
      newIMG.src = './img/heart.png';
      newIMG.className = 'liker-img';
      newIMG.style.animationName = `heart${randomIndex}`;
      this.likerField.appendChild(newIMG);
      newIMG.addEventListener('animationend', () => {
        this.likerField.removeChild(newIMG);
      });
    });
  }
}
