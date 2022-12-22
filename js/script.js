// ! recupero gli elemnti 
// bottoni
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// immagini
const src = document.querySelectorAll('.gallery img');

// ! aggiungo la classe active alla prima immagine 
let currentIndex = 0;
src[currentIndex].classList.add('active');

