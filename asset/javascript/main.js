const items = [
     '01.jpg',
     '02.jpg',
     '03.jpg',
     '04.jpg',
     '05.jpg'
];

const title = [
     'Svezia',
     'Svizzera',
     'Gran Bretagna',
     'Germania',
     'Paradise'
];

const text = [
     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
     'Lorem ipsum',
     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let contatore = 0;
let segnaIndiceImmagine = items[contatore];
let segnaIndiceTitolo = title[contatore];
let segnaIndiceTesto = text[contatore];



let selezione = document.getElementById("container_immagine_grande");
let cancello = document.querySelector('.immagine_principale');

let selectionImmaginiPiccole = document.querySelector(".container_immagini_piccole");



     
for (contatore=0; contatore<=items.length-1; contatore++){
     segnaIndiceImmagine = items[contatore];
     selectionImmaginiPiccole.insertAdjacentHTML("beforeend", `<img class="immagini_carosello" src="../asset/img/${segnaIndiceImmagine}">`); 
     }

     

     contatore = 0;
     segnaIndiceImmagine = items[contatore];
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndiceImmagine}') ;" >  <div class="descrizione_immagine"><div class=""><h1>${segnaIndiceTitolo}</h1><span>${segnaIndiceTesto}</span></div></div> </div>`);
     
     let selectionGruppoImmagini = document.querySelector(`img[src*="../asset/img/${segnaIndiceImmagine}"]`); 
     selectionGruppoImmagini.setAttribute("id", "illuminata");

     document.getElementById("su").addEventListener("click", frecciaSuperiore); 
     document.getElementById("giù").addEventListener("click", frecciaInferiore);
     

function frecciaSuperiore(){
      
     if(contatore<=0){
          contatore=items.length-1;
     }
     else{
          contatore=contatore-1;
     }
     
     segnaIndiceImmagine = items[contatore];
     segnaIndiceTitolo = title[contatore];
     segnaIndiceTesto = text[contatore];
    
     cancello = document.querySelector('.immagine_principale').remove();
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndiceImmagine}') ;" >  <div class="descrizione_immagine"><div class=""><h1>${segnaIndiceTitolo}</h1><span>${segnaIndiceTesto}</span></div></div> </div>`);

     let cancelEffeto = document.getElementById("illuminata").removeAttribute('id');
     selectionGruppoImmagini = document.querySelector(`img[src*="../asset/img/${segnaIndiceImmagine}"]`);
     selectionGruppoImmagini.setAttribute("id", "illuminata");   
}

function frecciaInferiore(){
     
     if(contatore>=items.length-1){
          contatore=0;
     }
     else{
          contatore++;
     }
     
     segnaIndiceImmagine = items[contatore];
     segnaIndiceTitolo = title[contatore];
     segnaIndiceTesto = text[contatore];

     cancello = document.querySelector('.immagine_principale').remove();
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndiceImmagine}') ;" >  <div class="descrizione_immagine"><div class=""><h1>${segnaIndiceTitolo}</h1><span>${segnaIndiceTesto}</span></div></div> </div>`);

     let cancelEffeto = document.getElementById("illuminata").removeAttribute('id');
     selectionGruppoImmagini = document.querySelector(`img[src*="../asset/img/${segnaIndiceImmagine}"]`);
     selectionGruppoImmagini.setAttribute("id", "illuminata");
}
















