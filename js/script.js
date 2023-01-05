function changePic(target){
   // rimuovo la classe active
   src[currentIndex].classList.remove('active');
   thumbSrc[currentIndex].classList.remove('active');
   
   if(target === 'next'){
   // incremento l'indice
    currentIndex++;

    // valido la fine delle foto
    if(currentIndex === src.length){
        currentIndex = 0;
    }
   } else if(target === 'prev'){
    // decremento l'indice
    currentIndex--;
 
    // valido l'inizio delle foto
     if(currentIndex < 0){
         currentIndex = src.length - 1;
     }
   } else {
         currentIndex = target;
   }

    // aggiungo una nuova classe active
    src[currentIndex].classList.add('active');
    thumbSrc[currentIndex].classList.add('active');
}

const data = [
    {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];

// ! recupero gli elemnti 
// bottoni
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// immagini
const gallery = document.querySelector('#carousel .gallery')
const tumbGallery = document.getElementById('thumb')

// ! creo un ciclo per stampare le foto
let banner = '';
let thumbElement = '';
for(let i = 0; i < data.length; i++){
    banner += `<figure>
                <img src="${data[i].image}" alt="${data[i].title}">
                <figcaption>
                  <h3>${data[i].title}</h3>
                  <p>${data[i].text}</p>
                </figcaption>
               </figure>`;
}

for(let i = 0; i < data.length; i++) {
  thumbElement += `<img src="${data[i].image}" alt="${data[i].title}">`;
}

gallery.innerHTML = banner;
tumbGallery.innerHTML = thumbElement;

const src = document.querySelectorAll('.gallery figure');
const thumbSrc = document.querySelectorAll('#thumb img');


// ! aggiungo la classe active alla prima immagine 
let currentIndex = 0;
src[currentIndex].classList.add('active');
thumbSrc[currentIndex].classList.add('active');

// ! funzionamento scorri foto
// aggiungo l'evento al bottone next
next.addEventListener('click', function(){
   // richiamo la funzione 
   changePic('next');
});

// aggiungo l'evento al bottone prev
prev.addEventListener('click', function(){
     // richiamo la funzione 
   changePic('prev');
});

for (let i = 0; i < thumbSrc.length; i++) {
  const indexThumb = thumbSrc[i];
  indexThumb.addEventListener('click', function (){
    changePic(i)
  });
}