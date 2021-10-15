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

const arrayvar = items[0]
const selezione = document.getElementById("container_immagine_grande")
console.log(arrayvar)
console.log(selezione)

selezione.insertAdjacentHTML("afterbegin", `<div class="immagine_principale" style="background-image: url("../img/${arrayvar}");" ></div>`) 
























