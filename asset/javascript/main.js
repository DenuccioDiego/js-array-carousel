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
let segnaIndice = items[contatore]
let selezione = document.getElementById("container_immagine_grande")
let cancello = document.querySelector('.immagine_principale')

//console.log(cancello)
//console.log(arrayvar)
//console.log(selezione) 


     //console.log(contatore)
     
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndice}') ;" ></div>`)
     document.getElementById("su").addEventListener("click", frecciaSuperiore) 
     document.getElementById("giù").addEventListener("click", frecciaInferiore)
     

function frecciaSuperiore(){
     //console.log(contatore) 
     
     //console.log(contatore)  
     if(contatore<=0){
          contatore=4
     }
     else{
          contatore=contatore-1
     }
     
     segnaIndice = items[contatore]
     //console.log(segnaIndice)
     //console.log(contatore)
     //document.querySelector('.immagine_principale').remove
     
     //console.log(cancello)
     cancello = document.querySelector('.immagine_principale').remove()
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndice}') ;" ></div>`)
     //console.log(contatore)
     
}

function frecciaInferiore(){
     
     if(contatore>=4){
          contatore=0
     }
     else{
          contatore++
     }
     
     segnaIndice = items[contatore]
     cancello = document.querySelector('.immagine_principale').remove()
     selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" id="svuoto" style="background-image: url('./asset/img/${segnaIndice}') ;" ></div>`)
     
     //console.log(contatore)
     
}

//console.log(contatore)














