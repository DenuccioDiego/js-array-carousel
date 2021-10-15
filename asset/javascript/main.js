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
const segnaIndice = items[contatore] 
const selezione = document.getElementById("container_immagine_grande")
//console.log(arrayvar)
//console.log(selezione) 


selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url('./asset/img/${segnaIndice}') ;" ></div>`) 

for(contatore=0; contatore<=4 ; contatore++){

     
     document.querySelector(".fa-chevron-circle-up").addEventListener("click", frecciaSuperiore) 
     document.querySelector(".fa-chevron-circle-down").addEventListener("click", frecciaInferiore) 
     
     function frecciaSuperiore(){
          if (contatore=0){
               contatore=4
          }
          else {
               contatore--
          }
     }

     function frecciaInferiore(){
          if (contatore=4){
                contatore=0
          }

          else {
                contatore++  
          }
     }

     
     document.querySelector(".immagine_principale").style.backgroundImage="url('./asset/img/${segnaIndice}')"

}
     
     




















