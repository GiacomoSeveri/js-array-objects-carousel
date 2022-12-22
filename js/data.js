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



  const data = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp']

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
const gallery = document.querySelector('.gallery')

// ! creo un ciclo per stampare le foto
let banner = '';
for(let i = 0; i < data.length; i++){
   const imgElement = data[i];
   
   banner += ` 
               <img src="img/${imgElement.image}" alt="${imgElement.title}">
               <h6 class="text-center pt-3">${imgElement.title}</h6>
               <p class="text-center">${imgElement.text}</p>
               `
                       
}

const src = document.querySelectorAll('.gallery img');


// ! aggiungo la classe active alla prima immagine 
let currentIndex = 0;
data[currentIndex]['image'].classList.add('active');

// ! funzionamento scorri foto
// aggiungo l'evento al bottone next
next.addEventListener('click', function(){
  // rimuovo la classe active
  data[currentIndex]['image'].classList.remove('active');
  
  // incremento l'indice
   currentIndex++;

   // valido la fine delle foto
   if(currentIndex === data.length){
       currentIndex = 0;
   }

   // aggiungo una nuova classe active
   data[currentIndex]['image'].classList.add('active');
})

// aggiungo l'evento al bottone prev
prev.addEventListener('click', function(){
   // rimuovo la classe active
   data[currentIndex]['image'].classList.remove('active');
   
   // decremento l'indice
    currentIndex--;

    // valido l'inizio delle foto
     if(currentIndex < 0){
         currentIndex = data.length - 1;
     }

    // aggiungo una nuova classe active
    data[currentIndex]['image'].classList.add('active');
})