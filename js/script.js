// ! recupero gli elemnti 
// bottoni
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// immagini
const src = document.querySelectorAll('.gallery img');

// ! aggiungo la classe active alla prima immagine 
let currentIndex = 0;
src[currentIndex].classList.add('active');

// ! funzionamento scorri foto
// aggiungo l'evento al bottone next
next.addEventListener('click', function(){
   // rimuovo la classe active
   src[currentIndex].classList.remove('active');
   
   // incremento l'indice
    currentIndex++;

    // valido la fine delle foto
    if(currentIndex === src.length){
        currentIndex = 0;
    }

    // aggiungo una nuova classe active
    src[currentIndex].classList.add('active');
})

// aggiungo l'evento al bottone prev
prev.addEventListener('click', function(){
    // rimuovo la classe active
    src[currentIndex].classList.remove('active');
    
    // decremento l'indice
     currentIndex--;
 
     // valido l'inizio delle foto
      if(currentIndex < 0){
          currentIndex = src.length - 1;
      }
 
     // aggiungo una nuova classe active
     src[currentIndex].classList.add('active');
 })