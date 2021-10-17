
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

let contatore = 0;  //contatore che servirà per determinare l'indice di un array
let segnaIndiceImmagine = items[contatore]; //grazie a questo indice prederemo solamente l'indice esatto di un array esatto 
let segnaIndiceTitolo = title[contatore];//come sopra ma per il titolo
let segnaIndiceTesto = text[contatore];// come sopra ma per la il testo descrittivo


let selezione = document.getElementById("container_immagine_grande");  //selezione container sx tramite id
let cancello = document.querySelector('.immagine_principale'); //selezione immagine principale tramite la classe .immagine_principale

let selectionImmaginiPiccole = document.querySelector(".container_immagini_piccole"); // selezione container dx tramite classe


// questo ciclo servirà a stampare le immagini presenti nell'array 
for (contatore=0; contatore<=items.length-1; contatore++){  //il contatore dovrà essere massimo e/o uguale alla lunghezza dell'array-1  
     
     segnaIndiceImmagine = items[contatore]; //richiamo la variabile altrimenti non verrà letto alcun valore
     selectionImmaginiPiccole.insertAdjacentHTML("beforeend", `<img class="immagini_carosello" src="../asset/img/${segnaIndiceImmagine}">`); //inserisco una immagine a ogni giro di ciclo finchè non si arriverà alla condizone di avere tutti gli slot occupati dalle immagini dell'array
}
 

contatore = 0; //resetto il contatore che dopo il for sarà 4 quindi lo riportiamo a 0
segnaIndiceImmagine = items[contatore]; // richiamo la varibile 


//creo un div che contiene l'immagine principale con annidati altri div che contengono titolo e descrizione 
//url dell'img contiene un escape che richiama la variabile incaricata di selezionare l'indice dell'array che il contatore sta indicando  
selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndiceImmagine}') ;" >  <div class="descrizione_immagine"><div class=""><h1>${segnaIndiceTitolo}</h1><span>${segnaIndiceTesto}</span></div></div> </div>`);
     

let selectionGruppoImmagini = document.querySelector(`img[src*="../asset/img/${segnaIndiceImmagine}"]`); //selezione tramite css selector img[attributo]. L'attributo selezionato è src. 
selectionGruppoImmagini.setAttribute("id", "illuminata"); //aggiunto id(creato per effetto illuminato con bordo) al tag img che  

//seleziono le frecce che avranno il compito di cambiare immagine tramite l'evento click 
document.getElementById("su").addEventListener("click", frecciaSuperiore); 
document.getElementById("giù").addEventListener("click", frecciaInferiore);
     
function cancellaAndStampa(){
     //richiamo le variabili nella funzione 
     segnaIndiceImmagine = items[contatore];
     segnaIndiceTitolo = title[contatore];
     segnaIndiceTesto = text[contatore];
    
     cancello = document.querySelector('.immagine_principale').remove();// rimuovo l'immagine precedente 
     //inserisco la nuova immagine sempre considernado che la variabile segnaIndiceImmagine è cambiata per effetto del if o else che hanno aumentato o diminuito il contatore che indica l'indice dell'array 
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndiceImmagine}') ;" >  <div class="descrizione_immagine"><div class=""><h1>${segnaIndiceTitolo}</h1><span>${segnaIndiceTesto}</span></div></div> </div>`);

     //dichiaro la variabile che ha il compito di eliminare l'effetto della img dx selezionata
     let cancelEffeto = document.getElementById("illuminata").removeAttribute('id');
     
     //selezione tramite attributo src che punterà alla stessa immagine che è stata stampata in grande e avrà l'effetto desiderato 
     selectionGruppoImmagini = document.querySelector(`img[src*="../asset/img/${segnaIndiceImmagine}"]`); 
     selectionGruppoImmagini.setAttribute("id", "illuminata");  //id="illuminata" inserito nell'img selezionata l'effeto 

}

function frecciaSuperiore(){ 
      
     if(contatore<=0){               //condizione data considerando che il contatore non deve andare al di sotto del numero 0 perchè coincide con la posizione dell'array 
          contatore=items.length-1;  // ricarichiamo il contatore "scarico" 
     }
     else{
          contatore=contatore-1;    // diminuiamo il contatore considerando che la freccia che punta Su coincide con un decremento dell'indice dell'array
     }

     cancellaAndStampa() //annido una funzione all'interno di un'altra (vedi sopra per vedere cosa fa)   
}

function frecciaInferiore(){ 
     //questa funziona ha la stessa funzione di quella precedente ma cambiano solamente le condizioni che avranno ruoli opposti
     if(contatore>=items.length-1){
          contatore=0;
     }
     else{
          contatore++;
     }
     
     cancellaAndStampa()
}
















