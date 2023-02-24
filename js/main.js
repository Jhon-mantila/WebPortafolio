const menuMobile = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');

burgerMenu.addEventListener('click', toogleMobileMenu);

function toogleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // JavaScript
var cards = document.querySelector('.cards');
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
});

