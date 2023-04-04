
//Ejercicio 1

//genero un array con 10 posiciones
let numeros = new Array(10);
//cargo el array con valores aleatorios
function cargarArray(){

   for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Math.floor(Math.random() * (50 - 1) + 1);    
   }
   return numeros;
}
let resultado = cargarArray();
//elimino valores repetidos
function eliminarValoresRepetidos(){
    
    resultado = resultado.filter((valor, indice) => {
        return resultado.indexOf(valor) === indice;
      }
    );
}

eliminarValoresRepetidos();


console.log(resultado);

//ordeno el array de forma ascendente

let ordenarArray = (a, b)=> { 
    if(a == b) return 0; 
    if(a < b)  return -1;
    return 1;
}

resultado.sort(ordenarArray);


console.log(resultado);  


//desordeno el array

function listaDesordenada(){
     
    let lista = resultado.sort((a, b)=> Math.random()-0.5);

    return lista;
}

let newLista = listaDesordenada();


console.log(newLista);


//ejercicio 2

let array = [1, 2, 3, 4, 5, 6];

function mostrarElementos(){

    let i = 0;

    while (i < array.length) {
    
        console.log(array[i]);
        i++;
    }   
}

mostrarElementos();


function mostrar(){
    
    for (let i = 0; i < array.length; i++) {
         
        console.log(array[i]);
        
    }
}

console.log("los elementos del array son: ");
mostrar();


console.log("los elementos del array con for each son: ");

let resultadoArray = array.forEach(item => {
    console.log(item);
});

//le sumo 1 a los elementos del array

let newArray = array.map(item => item + 1);

console.log(newArray);

//Genero copia del array con elementos incrementados en 1

const copiaArray = [...newArray].map(item => item + 1);

console.log("la copia del array es: ");
console.log(copiaArray);

//calculo el promedio

function promedio(acum, num){
    return acum + num;
}

let promedioArray = array.reduce(promedio)/array.length;


console.log("el promedio es: " + promedioArray);


//ejercicio 3


//genero un array de numeros
let numeros2 = new Array(10);

let generar = function(){
    for (let i = 0; i < numeros2.length; i++) {
       
        numeros2[i] = Math.floor(Math.random() * (50 - 1) + 1);
        
    }
    return numeros2;
}

let resultado2 = generar();


let nuevoArray = resultado2.map(item=> Math.pow(item, 2));

console.log("el nuevo array: ");
console.log(nuevoArray);


//ejercicio 4

let valores =  [ 1, -4, 12, 0, -3, 29, -150];

let positivos = valores.filter(valor => valor > 0);

console.log(positivos);

function sumarPositivos(acum, num){
    return acum + num;
}

console.log("la suma de los numeros positivos es: " + positivos.reduce(sumarPositivos));


//ejercicio 5

let nombres =  ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

//obtengo nombres con 6 letras o mas
let nombres2 = nombres.filter(n => n.length >= 6);

console.log(nombres2);

//obtengo los nombres que empiezan con M
let nombres3 = nombres.filter(n => n[0]=='M');

console.log(nombres3);


//obtengo los elementos ordenados alfabeticamnte

let nombres4 = nombres.sort(function(a, b){
    if(a < b) return -1; 
    if(a > b) return 1; 
    return 0;
})

console.log(nombres4);


//obtengo iniciales de los elementos del array

let nombres5 = nombres.map(n => n[0]);

console.log(nombres5);

//obtengo nombres en mayusculas

let nombres6 = nombres.map(item => item.toUpperCase());

console.log(nombres6);


//quiero saber si hay nombres que comienzan con j

let nombres7 = nombres.some(n => n[0]=='J');

console.log(nombres7);


//ejercicio 6


/*
let colores =  ["azul", "amarillo", "rojo", "verde", "café", "rosa"];


let color = prompt('ingrese un color: ', '');

let resultadoColor = colores.some(n => n === color.toLowerCase());

alert(resultadoColor);
*/

//ejercicio 7

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = arrayNumeros.filter(n=> n%2 == 0);

console.log("el array con los numeros pares es: ");
console.log(pares);


//ejercicio 8

let palabras = ["oso", "hablar", "caminar", "utilidad", "encontrar", "correr", "nadar"];

let arrayVocales = ["a", "e", "i", "o", "u"];


function vocales(){
    let nuevoArrayVocales = [];
    
    for (let i = 0; i < palabras.length; i++) {
        
        let arrayTexto = palabras[i].toLowerCase();
    
        let nombre = arrayTexto[0];

        for (let j = 0; j < arrayVocales.length; j++) {
            
            if(nombre.charAt(0) == arrayVocales[j]){

                nuevoArrayVocales.push(palabras[i]);
            }
            
        }

    }
    return nuevoArrayVocales;
}

let nuevoArrayVocales = vocales();

//muestro el array con las palabras que empiezan con una vocal
console.log(nuevoArrayVocales);


//ejercicio 9


let arrayIntercambio = ["Juan", "Pablo", "Rodrigo", "German", "Marcelo", "Roberto"];


//genero la funcion intercambiar
function intercambiar(pos1, pos2){
   
   let aux; 

  if(pos1 < arrayIntercambio.length && pos2 < arrayIntercambio.length && pos1 >=0 && pos2 >=0){ 
    
    aux = arrayIntercambio[pos1];
    arrayIntercambio[pos1] = arrayIntercambio[pos2];
    arrayIntercambio[pos2] = aux;
  
  }else{

    console.log("el/los valores ingresado no son posiciones validas");
  
  }  
 
}

intercambiar(0, arrayIntercambio.length-1);

console.log("el array intercambiado es: ");
console.log(arrayIntercambio);

