const menuMobile = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');

const arrowCircle = document.querySelector('.arrow-circle');
const cardFlap = document.querySelector('.card-flap');

burgerMenu.addEventListener('click', toogleMobileMenu);

arrowCircle.addEventListener('click', toogleCardFlap);

function toogleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}

function toogleCardFlap(){
  cardFlap.classList.toggle('inactive-flap');
}



  // JavaScript
/*var cards = document.querySelector('.cards');
var cardItems = document.querySelectorAll('.card');
var zindex = 10;

cardItems.forEach(function(card) {
  card.addEventListener('click', function() {
    var isShowing = false;

    if (this.classList.contains('active')) {
      isShowing = true;
    }

    if (cards.classList.contains('showing')) {
      document.querySelector('.card.active').classList.remove('active');

      if (isShowing) {
        cards.classList.remove('showing');
      } else {
        this.style.zIndex = zindex;
        this.classList.add('active');
      }
    } else {
      cards.classList.add('showing');
      this.style.zIndex = zindex;
      this.classList.add('active');
    }

    zindex++;
  });
});*/

