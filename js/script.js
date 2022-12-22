const data = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp',]

// ! recupero gli elemnti 
// bottoni
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// immagini
const gallery = document.querySelector('#carousel .gallery')
const tumbGallery = document.getElementById('thumb')

// ! creo un ciclo per stampare le foto
let banner = '';
for(let i = 0; i < data.length; i++){
    banner += `<img src="${data[i]}" alt="${data[i]}">`;
}

gallery.innerHTML = banner;
tumbGallery.innerHTML = banner;

const src = document.querySelectorAll('.gallery img');
const thumbSrc = document.querySelectorAll('#thumb img');


// ! aggiungo la classe active alla prima immagine 
let currentIndex = 0;
src[currentIndex].classList.add('active');
thumbSrc[currentIndex].classList.add('active');

// ! funzionamento scorri foto
// aggiungo l'evento al bottone next
next.addEventListener('click', function(){
   // rimuovo la classe active
   src[currentIndex].classList.remove('active');
   thumbSrc[currentIndex].classList.remove('active');
   
   // incremento l'indice
    currentIndex++;

    // valido la fine delle foto
    if(currentIndex === src.length){
        currentIndex = 0;
    }

    // aggiungo una nuova classe active
    src[currentIndex].classList.add('active');
    thumbSrc[currentIndex].classList.add('active');
})

// aggiungo l'evento al bottone prev
prev.addEventListener('click', function(){
    // rimuovo la classe active
    src[currentIndex].classList.remove('active');
    thumbSrc[currentIndex].classList.remove('active');
    
    // decremento l'indice
     currentIndex--;
 
     // valido l'inizio delle foto
      if(currentIndex < 0){
          currentIndex = src.length - 1;
      }
 
     // aggiungo una nuova classe active
     src[currentIndex].classList.add('active');
     thumbSrc[currentIndex].classList.add('active');
})