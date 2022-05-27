

// getElementById("h1") nos daria por consola:  <h1 id="h1">Mi primera página Web</h1>
var h1 = document.getElementById("h1");
console.log(h1);

console.log(p1);


// getElementById("p1") nos daria por consola:  <p id="p1">Autor: Antonio</p>
var p1 = document.getElementById("p1");
console.log(p1);


// innerText:  nos daria solo el contenido de nuestro. Ejemplo: Mi primera página Web
console.log(h1.innerText);

console.log(p1.innerText);


// getElementsByTagName("p"): Muestra el valor de todos los parrafos en formato array.
var p= document.getElementsByTagName("p");
console.log(p);

// Para darle un id al parrafo que está en la posicion 1 del array. 
p[1].id = 'parrafo2';


// Para darle estilos a mis parrafos desde el archivo app.js
p[2].style.color = 'pink';

p[3].style.color = 'brown';