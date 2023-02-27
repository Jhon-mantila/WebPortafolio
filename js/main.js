/*
<div class="card">
    <div class="img-principal">
        <img src="https://3ztech.com.co/wp-content/uploads/2022/11/pexels-dominika-roseclay-905163-scaled.jpg" alt="pc">
    </div>
    <div class="card-title">
      <div class="title-left">
          <h2>Card Title
          <p>Profesión</p>
          </h2> 
      </div> 
      <div class="title-right">
          <div class="arrow-circle">
              <span>&#8595;</span>
          </div>
      </div>
    
    </div>
    <div class="card-flap inactive-flap">
        <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ex autem eos earum ipsam dolorem impedit, et maxime sunt animi voluptatem tenetur odio temporibus eligendi aspernatur id, recusandae iure sint?</p>                    
        </div>
            <div class="card-actions">
                <a href="#" class="btn">Read more</a>
            </div>
    </div>
</div> 
*/
let person = [
  {
    imagen: 'https://3ztech.com.co/wp-content/uploads/2022/11/pexels-dominika-roseclay-905163-scaled.jpg',
    titulo: 'Card Title',
    profesion: 'Profesió',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ex autem eos earum ipsam dolorem impedit, et maxime sunt animi voluptatem tenetur odio temporibus eligendi aspernatur id, recusandae iure sint?',
    url: '#'
  },
  {
    imagen: 'https://3ztech.com.co/wp-content/uploads/2022/11/pexels-dominika-roseclay-905163-scaled.jpg',
    titulo: 'Card Title',
    profesion: 'Profesió',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ex autem eos earum ipsam dolorem impedit, et maxime sunt animi voluptatem tenetur odio temporibus eligendi aspernatur id, recusandae iure sint?',
    url: '#'
  }
];

const cardContainer = document.querySelector('.cards-container');
contador = 0;
for(let p of person){

  const card = document.createElement('div');
  card.classList.add('card');


      const divImgPrincipal = document.createElement('div');
      divImgPrincipal.classList.add('img-principal');

        const imgPrincipal = document.createElement('img');
        imgPrincipal.setAttribute('src', p.imagen);

        divImgPrincipal.appendChild(imgPrincipal);

      const divCardTitle = document.createElement('div');
      divCardTitle.classList.add('card-title');

        const divTitleLeft = document.createElement('div');
        divTitleLeft.classList.add('title-left');

          const h2Title = document.createElement('h2');
          h2Title.innerText = p.titulo;

          const pTitle = document.createElement('p');
          pTitle.innerText = p.profesion;

          h2Title.appendChild(pTitle);

          divTitleLeft.appendChild(h2Title);

        const divTitleRight = document.createElement('div');
        divTitleRight.classList.add('title-right');

          const divArrowCircle = document.createElement('div');
          divArrowCircle.classList.add('arrow-circle');
          divArrowCircle.addEventListener('click', () => idCardFlap(divCardFlap.id));

          const spanArrow = document.createElement('span');
          spanArrow.innerHTML = "&#8595;";

          divArrowCircle.appendChild(spanArrow);

          divTitleRight.appendChild(divArrowCircle);
        
        divCardTitle.append(divTitleLeft, divTitleRight);

      const divCardFlap = document.createElement('div');
      divCardFlap.classList.add('card-flap', 'inactive-flap');

      divCardFlap.id = 'card-flat-'+contador++;

      console.log(divCardFlap.id);

        const divDescription = document.createElement('div');
        divDescription.classList.add('card-description');

          const pDescription = document.createElement('p');
          pDescription.innerText = p.descripcion;

          divDescription.appendChild(pDescription);

        const divCardAction = document.createElement('div');
        divCardAction.classList.add('card-actions');

          const aUrlAction = document.createElement('a');
          aUrlAction.setAttribute('href', p.url);
          aUrlAction.innerText = "Read more";
          aUrlAction.classList.add('btn');

          divCardAction.appendChild(aUrlAction);

      divCardFlap.append(divDescription, divCardAction);

  card.append(divImgPrincipal,divCardTitle,divCardFlap);

  cardContainer.appendChild(card);

  console.log(card);


}

const menuMobile = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');

//const idArrowCircle = document.querySelector('#'+idCardFlap(card));
const cardFlap = document.querySelector('.card-flap');

burgerMenu.addEventListener('click', toogleMobileMenu);

//console.log(arrowCircle);

//idArrowCircle.addEventListener('click', toogleCardFlap);

function toogleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}

function idCardFlap(card){
  console.log("card: "+card);
  idArrowCircle = document.querySelector('#'+card);

  console.log(idArrowCircle);
  idArrowCircle.classList.toggle('inactive-flap');
  //return card;
  /*const cardid = document.querySelector('#'+card);
  console.log (cardid);
  cardid.classList.toggle('inactive-flap');*/
}

function toogleCardFlap(){
  idArrowCircle.classList.toggle('inactive-flap');
}