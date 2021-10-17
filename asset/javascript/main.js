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

let contatore = 0
let segnaIndiceImmagine = items[contatore]
let segnaIndiceTitolo = title[contatore]
let segnaIndiceTesto = text[contatore]



let selezione = document.getElementById("container_immagine_grande")
let cancello = document.querySelector('.immagine_principale')
let selectionImmaginiPiccole = document.querySelector(".container_immagini_piccole")
//console.log(selectionImmaginiPiccole)


     
     
     for ( contatore=0; contatore<=items.length-1; contatore++ ){
          segnaIndiceImmagine = items[contatore]
          selectionImmaginiPiccole.insertAdjacentHTML("beforeend", `<div class="immagini_carosello" style="background-image: url('./asset/img/${segnaIndiceImmagine}') ;" ></div>`) 
     }


//console.log(cancello)
//console.log(arrayvar)
//console.log(selezione) 

     //console.log(contatore)
     contatore = 0
     segnaIndiceImmagine = items[contatore]
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndiceImmagine}') ;" >  <div class="descrizione_immagine"><div class=""><h2>${segnaIndiceTitolo}</h2><span>${segnaIndiceTesto}</span></div></div> </div>`)
     document.getElementById("su").addEventListener("click", frecciaSuperiore) 
     document.getElementById("giù").addEventListener("click", frecciaInferiore)
     

function frecciaSuperiore(){
     //console.log(contatore) 
     
     //console.log(contatore)  
     if(contatore<=0){
          contatore=items.length-1
     }
     else{
          contatore=contatore-1
     }
     
     segnaIndiceImmagine = items[contatore]
     segnaIndiceTitolo = title[contatore]
     segnaIndiceTesto = text[contatore]
     //console.log(segnaIndice)
     //console.log(contatore)
     
     //console.log(cancello)
     cancello = document.querySelector('.immagine_principale').remove()
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndiceImmagine}') ;" >  <div class="descrizione_immagine"><div class=""><h2>${segnaIndiceTitolo}</h2><span>${segnaIndiceTesto}</span></div></div> </div>`)
     //console.log(contatore)
     
}

function frecciaInferiore(){
     
     if(contatore>=items.length-1){
          contatore=0
     }
     else{
          contatore++
     }
     
     segnaIndiceImmagine = items[contatore]
     segnaIndiceTitolo = title[contatore]
     segnaIndiceTesto = text[contatore]

     cancello = document.querySelector('.immagine_principale').remove()
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndiceImmagine}') ;" >  <div class="descrizione_immagine"><div class=""><h2>${segnaIndiceTitolo}</h2><span>${segnaIndiceTesto}</span></div></div> </div>`)
     //console.log(contatore)
     
}

//console.log(contatore)














