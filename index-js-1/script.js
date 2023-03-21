

/*

let Name= prompt('What is your name?', '---');

alert(`Your name is ${Name}!`);   

let isBoss = confirm("Are you ready?");

alert( isBoss ); // true if OK is pressed   
 
 
let numero= 5;
let cont;


cont=numero;

alert(`el numero es: ${cont}!`);*/   

/*

let result= prompt('ingrese un numero', '');

let answer= (result<=10) ? 'el numero es pequenio':

(result>10 && result <=90) ? 'el numero es mediano' :

(result > 90 && result < 100) ? 'el numero es grande': 

'el numero es casi grande';

alert(answer);*/
 
/*
if (result <= 10) {
    alert("el numero es pequenio");
    
}else if (result > 10 && result <= 90) {
    alert('el numero es mediano');
    
}else if (result > 90) {
    alert('el numero es grande');
}*/

/*

let userName= prompt('who is there', '');

 
if (userName=="admin") {
    let password = prompt('Password?', '');
    
    if(password=='TheMaster'){
        alert('Welcome!');
    }else if (password=='' || password===null) {
        alert('canceled');     
    }else{
        alert('wrong password');  
    }
  
} else if (userName=='' || userName===NULL) {
    alert('canceled!');  
 }else{
    alert( "I don't know you" );    
 }   

 */
 

 /*
 
 let num=0;  // el num en el while toma la condicion de false al ser 0
  
 num= prompt('ingrese un valor mayor que 100', 0);

 while(num <=100 && num){
    
    num= prompt('ingrese un valor mayor que 100', 0);

}  */


/*numeros primos*/
/* continue es como un iterador*/

/*
let valor=10; 

 nextPrime:
 for(let i=2; i<=valor; i++){

    for(let j=2; j<i; j++){

         if(i%j==0){
           continue nextPrime;
        } 
         alert(i);
    } 

}*/


/* si en el switch no se pone break ejecuta la siguiente linea asi hasta defaulta, si encuentra coincidencia 
y hay break muestra a partir de ahi */



/*
let num= 3+3;

switch (num) {
    case 2:
    alert("dfsdfd");    
    break;
    case 4:
    alert('23232');
    break;
    case 6:
    alert('correcto');
    
    default:
        alert('incorrecto');
        break;
}

let browser='';

if (browser == 'Edge') {
    alert( "You've got the Edge!" );


}else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {

    alert( 'Okay we support these browsers too' );
    
}else{
    alert( 'We hope that this page looks ok!' );
}

     
let a= +prompt('a?', '');

switch (a) {
    case 0:
    alert(0); 
    break;

    case 1:
    alert(1);
    break;
    
    case 2:

    case 3:
      alert( '2,3' );   
    break;
}

*/

/*

------------------------------------------------------------------------------

//tema-funciones--------------------------------


let userName = 'John';

let userName1= 'gaston';


function showMessage() {
  userName = "Bob"; // (1) changed the outer variable
  userName1 = '32';
  let message = 'Hello, ' + userName;
  let message1= 'hello, ' + userName + userName1;
  alert(message);
  alert(message1);  
  
}

alert( userName ); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function   

alert(userName1);

*/


/*

function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text + '.');
  }
  
  showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
  showMessage('Ann', "What's up?"); // Ann: What's up? (**)
  showMessage('hola', '32');

*/
    
/*
function showMessage(from, text) {

    from = '*' + from + '*' + from; // make "from" look nicer
  
    alert( from + ': ' + text );
  }
  
  let hi='hola';
  
  showMessage(hi, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  alert( hi ); // Ann*/

/*
  function showMessage(from, text = 'eres tu') {
    alert( from + ": " + text );   
  }
  
  showMessage("Ann"); // Ann: no text given
*/

/*
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if(checkAge(age)){
     alert('acceso aprobado')
  }else{
    alert('acceso denegado');
  }

  */

/*
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  
  function checkAge(age){
    return (age > 18) ? true: confirm('Did parents allow you?');
}

 function checkAge()
{
    return (age > 18) || confirm('Did parents allow you?'); //el or si la primera condicion es falsa muestra la segunda, lo mismo con el ?
}
    
*/

/*

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  function min(a, b) {
    return a < b ? a : b;
  }


alert(3, 5);
alert(3, -1);
alert(1, 1);

*/


/*

function pow(x, n){
     let result = x;

    for(let i=1; i < n ; i++){
        result *= x;
    }

    return result;
}
   

let x = prompt('ingrese x', 0);
let n = prompt('ingrese n', 0);


if(n < 1){

   alert(`Power ${n} is not supported, use a positive integer`);
} else {   
  alert( pow(x, n) );
}*/



//funciones de flecha

/*
let func = (arg1, arg2, ..., argN) => expression;


let func = function(arg1, arg2, ..., argN) {
    return expression;
  };

*/
//example

  //let sum = (a, b) => a + b;
  /* This arrow function is a shorter form of:

     let sum = function(a, b) {
     return a + b;
};
*/

/*

alert( sum(1, 2) ); // 3


let sayHi = () => alert("Hello!");

sayHi();

*/

/*
let age = prompt('what is your age?', 18);

//funcion creada dinamicamente

let welcome = (age < 18) ? () => alert('hello'):
() => alert("greetings!");

//ejecutamos la funcion
welcome();
*/

//funciones dinamicas con varias sentencias


/*
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  alert( sum(1, 2) ); // 3
*/

/*
 for(let i=0; i<5; i++){
     
    let ask = (question, yes , no) => confirm(question) ? yes(): no();
   

 ask(
    "Do you agree?",  
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  )      
}

*/

//objetos

/*

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax


let user= {   
  name: "jorge",
  age: 30,

}

let namuser;


let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};


//Podemos agregar, eliminar y leer archivos en cualquier momento.

//Se puede acceder a los valores de propiedad mediante la notación de puntos:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30


//Para eliminar una propiedad, podemos usar el delete operador:

delete user.age;


//También podemos usar nombres de propiedades de varias palabras, pero luego deben estar entre comillas:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted  
};


//La última propiedad de la lista puede terminar con una coma: 

let user = {
  name: "John",
  age: 30,
}
//Eso se llama coma "posterior" o "colgante". Hace que sea más fácil agregar/eliminar/mover propiedades, 
//porque todas las líneas se vuelven iguales. 

*/




/*
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"


let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

//usar el return en una variable permite utilizar sus variables
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.age + ": " + user.name); // John
 



for (key in object) {
  // executes the body for each key among object properties
}
//Por ejemplo, mostremos todas las propiedades de user:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}


let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

    
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
}

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}

let user ={}

user.Name='john'; 
user.SurName='smith';

user.name='pete';

delete user.name;


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj){

  for(let key in obj){
    return false;
  }
  return true;
}


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum=0;

for(let key in salaries){
   sum +=salaries[key];
}

alert(sum);

---------------------------------------------------

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){

  for(let key in menu){   
      if(typeof menu[key] == 'number')
         menu[key] *=  2;
  }
} 

multiplyNumeric(menu);

alert("width: " + menu.width + "height: " + menu.height + "title: " + menu.title);

     


Clonación y fusión, Object.assign
Entonces, copiar una variable de objeto crea una referencia más al mismo objeto.

Pero, ¿y si necesitamos duplicar un objeto?

Podemos crear un nuevo objeto y replicar la estructura del existente, iterando sobre sus propiedades y copiándolas en el nivel primitivo.

Como esto:

let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

clone.age = 45;     

alert( user.name ); // still John in the original object



/*
También podemos usar el método Object.assign .

La sintaxis es:

Object.assign(dest, ...sources)
El primer argumento destes un objeto de destino.
Otros argumentos son una lista de objetos de origen.
Copia las propiedades de todos los objetos de origen en el destino desty luego lo devuelve como resultado.

Por ejemplo, tenemos userun objeto, vamos a agregarle un par de permisos:

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

*/

/*

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }
También podemos usar Object.assignpara realizar una clonación de objetos simple:

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30

*/

/*


let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182
Ahora no basta con copiar clone.sizes = user.sizes, porque user.sizeses un objeto y se copiará por referencia, por lo que clonecompartirá userlos mismos tamaños:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one


//clon estructurado
La llamada structuredClone(object)clona el objectcon todas las propiedades anidadas.

Así es como podemos usarlo en nuestro ejemplo:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
El structuredClonemétodo puede clonar la mayoría de los tipos de datos, como objetos, matrices, valores primitivos.

  
Resumen
Los objetos se asignan y copian por referencia. En otras palabras, una variable almacena no el "valor del objeto", sino una "referencia" (dirección en la memoria) para el valor. Entonces, copiar una variable de este tipo o pasarla como un argumento de función copia esa referencia, no el objeto en sí.

Todas las operaciones a través de referencias copiadas (como agregar/eliminar propiedades) se realizan en el mismo objeto único.

Para hacer una “copia real” (un clon) podemos usar Object.assignla llamada “copia superficial” (los objetos anidados se copian por referencia) o una función de “clonación profunda” structuredCloneo usar una implementación de clonación personalizada, como _.cloneDeep (objetivo) .

*/
 
/*

//this, metodos, objetos, propiedades
let user = {
  name: "John", //propiedad
  age: 30,
//metodo
  sayHi() {  
    // "this" is the "current object"
    alert(this.name);
  },

  hola(){
    alert(this.age);
  },

  ad:{ //objeto dentro de objeto
     nombre: 'hola',
     edad: 35,

     holas(){
       alert(this.edad);
       
     }
  }

};

user.sayHi(); // John
user.hola(); // 30
user.ad.holas();
alert(user.ad.nombre);

function say(){
  alert('hola');
}

user.func = say(); //le puedo asignar a un objeto una funcion independiente

user.func();

let admin = user;
user = null;

alert(admin.sayHi());

*/

/**funciones de flecha-this */

//this en funciones de flecha

/*
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya*/

/*
Resumen
Las funciones que se almacenan en las propiedades del objeto se denominan "métodos".
Los métodos permiten que los objetos "actúen" como object.doSomething().
Los métodos pueden hacer referencia al objeto como this.
El valor de thisse define en tiempo de ejecución.

Cuando se declara una función, puede usar this, pero eso thisno tiene valor hasta que se llama a la función.
Una función se puede copiar entre objetos.
Cuando se llama a una función en la sintaxis del "método": object.method(), el valor de thisdurante la llamada es object.
Tenga en cuenta que las funciones de flecha son especiales: no tienen this. Cuando thisse accede dentro de una función de flecha, se toma desde fuera.

*/
 

/*

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
*/

/*
//ejercicio practica
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;//porque this hace referencia a la propiedad que tiene el objeto que contiene al metodo
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John

*/

/*

//ejercicio-2 practica
let calculator = {  
  
  read(){
    this.a = +prompt('ingrese el primer valor', 0);
    this.b =  +prompt('ingrese el segundo valor', 0);
    this.nombre = 'hola';
  },

  sum(){
    return this.a + this.b + this.nombre;
  },

  mul(){
    return this.a * this.b;
  }

}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

*/

/*

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};


   
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

*/

/*

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this; //retornar this permite concatenar las llamadas
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

*/


//Función constructora, constructores

/*
Las funciones constructoras técnicamente son funciones regulares. Sin embargo, hay dos convenciones:

Se nombran primero con mayúscula.
Deben ejecutarse solo con "new"operador.
Por ejemplo:

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
Cuando una función se ejecuta con new, realiza los siguientes pasos:

Se crea un nuevo objeto vacío y se le asigna this.
El cuerpo de la función se ejecuta. Por lo general, modifica this, agrega nuevas propiedades.
thisSe devuelve el valor de .

*/



//En otras palabras, returncon un objeto devuelve ese objeto, en todos los demás casos thisse devuelve.

//Por ejemplo, aquí returnse anula thisdevolviendo un objeto:

/*
function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- returns this object
}

alert( new BigUser().name );  // Godzilla, got that object


function SmallUser() {

  this.name = "John";

  return; // <-- returns this
}
  
alert( new SmallUser().name );  // John

  
//metodos en el constructor

function User(name) {

  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // My name is: John


/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/

/*
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true
*/

/*
function Calculator(){
  //metodos , propiedades serian: this.a = a; 
  this.read = function(){
     this.a = +prompt('ingrese el valor de a: ', 0);
     this.b = +prompt('ingrese el valor de b: ', 0);   
   }

   this.sum = function(){
     return this.a + this.b;
   }

   this.mul = function(){
    return this.a * this.b;
   }
}

let calculator = new Calculator();



calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


function Accumulator(startingValue){
   this.value = startingValue;

   this.read = function(){
     this.value += +prompt('ingrese un valor', 0);
   }
}


let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

let val = new function(){
  this.hola = hola;
  this.edad = edad;

  this.metodo = function(){
    this.never = never;
  }
}


let lista = [1, 2, 3];

alert(lista.length);

*/


/*
let num1 = prompt('ingrese un numero: ', 0);

let num2 = prompt('ingrese un numero: ', 0);

function resta(){
  return num1 - num2;
}

console.log(resta());

*/

//ejercicio-2


/*
function  pasarValor(a, b){
  b = a;
  a = b;

  console.log(a);
  console.log(b);
}

pasarValor(5 ,10);
*/


/*
let numero = prompt('ingrese un valor', 0);


function calcularFactorial(valor){
  const factorial = 1; 
  
  while(valor > 10){
      valor = prompt('ingrese un valor menor a 10: ', 0);    
  } 

  for(let i = 1; i <= valor; i++){
        
       factorial *=  i;
         
  }     
   
  if(valor > 1){
    return factorial;
  }else if(valor == 0){
    return 1;
  }else{
    return 0;
  } 


 }    

console.log(calcularFactorial(numero));

*/





/*
function Palindromo(){
  let strtext = prompt('ingrese un texto', '');
  const palabraReverso = strtext.split("").reverse().join("");

  return (strtext === palabraReverso) ? 'es palindromo' : 'no es palindromo';
}

alert(Palindromo());
  */ 


/*

let cadena = prompt('ingrese una cadena de texto', '');


alert(cadena.toUpperCase()); //muestro en mayúsculas
alert(cadena.toLowerCase()); //muestro en minúsculas

*/


/*
let nota = prompt('ingrese una nota numerica: ', 0);

let calificacionResultante = (nota >= 0 && nota <= 3) ? 'Muy deficiente': 
(nota > 3 && nota <= 5) ? 'Insuficiente': (nota > 5 && nota <= 6) ? 'Suficiente':
(nota > 6 && nota <= 7) ? 'Bien': (nota > 7 && nota <= 9) ? 'Notable':
(nota > 9 && nota <= 10) ?  'Sobresaliente': 
'la calificacion numerica excede los valores permitidos';
 
alert(calificacionResultante);

*/

/*


<script>

let arrayDia = [30, 31, 28]; //contemplo febrero

function cantDias(){
  
  let mes = prompt('ingrese un numero de mes', 0);
   
  
  while(mes > 12 || mes <= 0){
    
    mes = prompt('re-ingrese un numero de mes', 0);
 
  }
  
  if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    
      return arrayDia[1];
  
    }else{

     return arrayDia[0];
  }

  if(mes == 2){

    return arrayDia[2];
  
  }

}

alert(cantDias());

</script>

*/



/*
<script>


function Piramide() {
    let valor = '';
    let limite = prompt('ingrese un numero: ', 0);       
    
    while(limite > 10 || limite < 1 || isNaN(limite)){
       limite = prompt('re-ingrese un numero: ', 0);
    }

    for (i = 1; i <= limite; i++) {
        for (j = 1; j <= i; j++) {
            valor += j;
        }
        valor += "\n";
    }
    return valor;

}
   alert(Piramide());

</script>

*/
 
/*

function calcularCaja(cantStock, capacidadCaja){
  let cajas=0;
  if(cantStock < capacidadCaja){
    return 'la cantidad de cajas completas es : 0';

  }else{
    while(cantStock >= capacidadCaja){
      cantStock = cantStock - capacidadCaja;
      cajas++;
    }
  }

  return 'la cantidad de cajas completas es: ' + cajas + '\n' +
   'la cantidad de cajas sueltas es: ' + cantStock;
 
}

alert(calcularCaja(300, 27));

*/

/*

let tiendaDeCoches = {
  fordFiesta: 'fiesta',
  fordFocus: 'focus',
  valorFiesta: 2000000,
  valorFocus: 3500000,
  descuento: 0  
}

function calcularDescuento(){
  let articulo = prompt('ingrese el codigo de articulo: ', '');

  if(articulo.toString() == tiendaDeCoches.fordFiesta || articulo.toString() == tiendaDeCoches.fordFocus){
    
    if(articulo == tiendaDeCoches.fordFiesta){
       tiendaDeCoches.descuento = tiendaDeCoches.valorFiesta * 0.05;
    }
    else{
       tiendaDeCoches.descuento = tiendaDeCoches.valorFocus * 0.10;
    }

  }else{  
    return 'el codigo ingresado es inexistente';
  }
  
  return 'el descuento es: ' + tiendaDeCoches.descuento;
}


alert(calcularDescuento());

*/


/*
let tiendaDeCoches = {

  descuento: 0

}

  
  let codArticulo = prompt('ingrese un codigo de articulo: ', '');
  
  //realizo la validacion
  while(codArticulo != 'fiesta' || codArticulo.localeCompare != 'focus'){
    
    codArticulo = prompt('ingrese un codigo de articulo valido: ', '');

  }
  
  if(codArticulo === 'fiesta'){
      
        tiendaDeCoches.descuento = 0.05;
            
  }else if(codArticulo === 'focus'){
   
        tiendaDeCoches.descuento = 0.10;

  }

  alert('el descuento para el coche ford con el codigo: ' + codArticulo + ' es: $'  + tiendaDeCoches.descuento);
  
 */


  /*con split separo la cadena en subcadenas, 
invierto el orden de la cadena con replace 
y con join uno todos los elementos en una cadena*/

/*
const texto = prompt('ingrse una cadena de texto: ', '').toLowerCase(); //palabra de ejemplo

let palabraReverso = texto.split("").reverse().join("");  

let EsPalindromo = (texto === palabraReverso) ? 'es palindromo' : 'no es palindromo';

   
alert(EsPalindromo);
*/ 

     
/*

let nombres = {
  
  nombre: 'fgdfg',
  hola: () =>{
    nombre = 'dfgfdg';

    return this.nombre + 'dgfdfgfg';
  },

  holas: function(){
    return this.nombre.length;
  },

  hello: new function(){
    this.nombre  = 'gdfgdfg'.toUpperCase();
 
    return this.nombre;
  },

  
}; 
    
alert(nombres.hola() + nombres.holas() + ' ' + nombres.hello());
*/


/*
let constructor = new Array;

constructor.push('hola', 1, 2, 3, hola ={});
/*
for (let key in constructor) {
   alert(constructor[key]);
}
*/

/*
for (let keys of constructor) {
    alert(constructor[keys]);
}

*/
 


/*

function ucFirst(str){
  
  return str[0].toUpperCase() + str.slice(1);
}
*/

/*
let str = 'hello';

let palabra = str[0].toUpperCase() + str.slice(1);

console.log(palabra);

//otra manera de hacerlo
let str1 = 'oso'[0].toUpperCase() + 'oso'.slice(1);  //slice devuelve una copia de una parte del array

console.log(str1);

//lo hago con funcion

function ucFirst(str){

  if(!str) // si es una cadena vacia retorno la palabra
    return str;
  
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('hola'));  

//otro ejercicio de strings


function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('now') || lowerStr.includes('job');
}


console.log();

 

console.log( checkSpam('buy game now') );
console.log( checkSpam('free job') );
console.log( checkSpam("innocent dog") );



function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}


console.log(truncate("What I'd like to tell on this topic is:", 18));

console.log(truncate("Hi everyone!", 20));    



function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120') === 120); //true


*/

/*probando*/

/*
let array = [1, 2, 3, 4, 5, 6];

let array2 = [1, 3, 4, 7, 9, 'hola'];

console.log(array.reverse().join(''));
 
console.log(array);    


array.forEach(function(element){
  console.log(element);
})

array2.forEach(function(a){
  console.log(a);
})
  
*/


/*

const array = [1, 2, 3, 4, 5];
 
array.forEach((element) =>{
  return console.log(element);  
})  


//definiendo array como objeto
let arr = new Array(1, 2, 3, 5, 6);

arr[arr.length - 1] = 'gdfgdfg';

console.log(arr);


//una manera de definir un array
let arrr = [];

const posMax = arrr.length;

arrr[0] = 'grger';

arrr[1] = () =>{
  return {hola:'bybty' }; 
}


console.log(arrr[arrr.length - 1]);   
  
console.log(arrr[arrr.length - 1]()); 
  
console.log(arrr[posMax]);
  
console.log(arrr[1]().hola.toUpperCase()); //para ejecutar funcion



arr.push(17); // agrega n elementos a un array

console.log(arr); 

arr.pop()  //elimina el ultimo elemento de un array

console.log(arr); 

arr.shift() //quito el primer elemento del array

console.log(arr);

arr.unshift(34, 56);  //inserto nuevos elementos en el array desde el principio

console.log(arr);

console.log('muestro array');

for (const key of arr) {
  console.log(key); 
}

//no usar for in para arrays


/*array.length = 0; //borra la matriz*/


//declaro arreglo multidimensional, matrices

/*
let matriz = [
  
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]

];


console.log(matriz[0][matriz.length-1]);

*/


/*

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

console.log(styles);

styles[Math.floor((styles.length -1)/ 2)] = "Classics";

console.log(styles.shift());

styles.unshift("Rap", "Reggae");

console.log(styles);
 


function getMaxSubSum(arr) {
  
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {

    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);

    if(partialSum < 0) partialSum = 0;

  }

  return maxSum;

}


console.log(getMaxSubSum([-1, -2, -3, 38 , 35])); //== 5 //(the sum of highlighted items)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); //== 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); //== 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); //== 100
console.log(getMaxSubSum([1, 2, 3])); //== 6  //(take all)
console.log('---------------------------');  
console.log(getMaxSubSum([2, -3, -4]));

*/


/*
let arr = ["I", "study", "JavaScript"];


//arr.splice(1, arr.length);

//arr.splice(0, 1, "complex", "language"); //inserta al principio, reemplazando al valor que elimina
//console.log(arr);


let arrays = arr.slice(0, 2); //copia partes del array


console.log(arr.concat([3, 4], 5, 6)); //crea una array y lo junta con el array original

//como concatenar un array con un objeto
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr.concat(arrayLike) ); // 1,2,something,else

/*
arr.forEach(function(item, index, array) {
  // ... do something with item
});

*/

//["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);



/*  
let arr = ['dsfd', 1, 2];


["Bilbo", "Gandalf", "Nazgul"].forEach((item, index , array) => {
     console.log(`${item} is at index ${index} in ${array}`);
});


console.log(arr.includes(1));      
console.log(arr.includes('I')); // devuelve true si encuentra false si no encuentra
console.log(arr.indexOf('I')); // devuelve posicion sino -1
console.log(arr.lastIndexOf('I')); //busca de derecha a izquierda
  */    

//metodo find

/*
arr.find(function(item, index, array){

});*/

/*
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];


let user = users.find(item => item.name = 'Pete'); //es como un return, es como un objeto que tiene acceso al objeto en cuestion

console.log('dfsdgfgfdg');
console.log(user.name);  
*/



/*
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 2);

console.log(user.name); // John


let userz = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];


console.log(userz.findIndex(user => user.name == 'John')); //findindex devuelve la posicion de donde se encuentra un elemento

console.log(userz.findLastIndex(userz => userz.name == 'John')); //busca de derecha a izquierda


/* metodo filter
*/

/*
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

*/

/*

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];



let someUsers = users.filter(item => item.id < 4); 

console.log(someUsers.length);   


//metodo map

let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});


let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

console.log(lengths);

//metodo sort ---ordena los calores de forma creciente

let arr2 = [1, 15, 2];

arr2.sort();

console.log(arr2);


function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

arr2.sort(compare);

console.log(arr2);

*/

/*
let arr3 = [ 1, 2, 15, 3, 12 ];

arr3.sort( (a, b) =>  a - b);

console.log(arr3);  // 1, 2, 15



let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.reverse().join('').split(' '); // glue the array into a string using ;

console.log( str ); // Bilbo;Gandalf;Nazgul

let names = 'somos o no somos';

console.log(names.split('').filter(char => char!=' '));

*/
 


/*

let palabra = prompt('ingrese texto: ', '').split('').filter(charz => charz!= ' ').join(''); 

let savePalabra = palabra.split('').filter(char => char!=' ').reverse().join('');

let resultado = (palabra === savePalabra) ? 'es palindromos': 'no es palindromos';
  
alert(resultado);  
*/

/*
const re = /[\W_]/g;  //utilizo expresion regular

const texto = prompt("ingrese una cadena de texto: ", "").toLowerCase().replace(re, ''); //palabra de ejemplo

let palabraReverso = texto.split("").reverse().join("");  

let EsPalindromo = (texto === palabraReverso) ? "es palindromo" : "no es palindromo";
  

alert(EsPalindromo);
 
*/  

console.log(Array.isArray({})); 

/*arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);*/  
// ...
// thisArg is the optional last argument

let array = [1, 2, 3];

const numbers = [65, 44, 12, 4];   

/*
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index , array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});*/

/*
let result = numbers.forEach(devolver =>{
  console.log(numbers);
    
});  
*/
/*
const numberz = [65, 44, 12, 4];

let vars =[{name: 'Bilbo', name1: 'gonzalo'}, {saludo: 'Hola'}, {a:'Bien' }];

let arr= vars.find(item => item.saludo);

console.log(arr);

let nuevo = numberz.forEach(item => {
   console.log(numberz);
});

function myFunction(num) {
  return num * 10;
}
  
function dividir(num){
  return num/2;
}

*/


/*
const re = /[\W_]/g;  //utilizo expresion regular

const texto = prompt("ingrese una cadena de texto: ", "").toLowerCase().replace(re, ''); //palabra de ejemplo

let palabraReverso = texto.split("").reverse().join("");  

let EsPalindromo = (texto === palabraReverso) ? "es palindromo" : "no es palindromo";
  
alert(EsPalindromo);*/


/*
let arrays = [1, 2, 3, 37];

console.log(arrays);

let res = arrays.filter(function(e, index){
  return index%2 == 0 || e > 1;
}); //devuelve un array en base a una condicion


console.log(res);
 

const myArray = [
  { id: 1, name: "Mark" },
  { id: 2, name: "Sam" },
  { id: 3, name: "Sandy" },
  { id: 4, name: "Mark" },
]

let array2 = myArray.filter(elemento => elemento.name.includes('S')
&& elemento.id > 2);

console.log(array2);


let rez = arrays.map(iterar => iterar * 2);

let rezz = myArray.map(iterars => iterars.id);

console.log(rez);

console.log(rezz);

let forArray = arrays.forEach(element => {
  if(element%2==0){
    console.log(element);
  }
  else{
    console.log(element*2 );
  }
});


console.log(forArray);


let sueldos = [2000, 3000, 1500, 4000, 700];

console.log(sueldos);

for (let i = 0; i < sueldos.length; i++) {
  console.log(sueldos[i]);
  
}


console.log("------------");

sueldos.forEach(function(sueldo){
  console.log(")" + sueldo);
})


let a =[1, [2, 3], 4];
console.log(a[1]);

let b = a[1];

console.log(b[1]);


let aula =[
  {nombre: 'Juan', apellido: 'Perez', edad:'25'},
  {nombre: 'Marcos', apellido: 'Paz', edad:'28'},
  {nombre: 'Rodrigo', apellido: 'gonzalez', edad:'29'},
]

console.log(aula[1].nombre);


let alumno = {
  nombre: 'Juan',
  apellido: 'perez',
  cursos: ["Javascript", "PHP", "java"],
  
}

//this representa a la variable que se usa en el momento

console.log(alumno.cursos[0]);

*/

//ejercicios 1, 2, 3

let colores =["azul" ,"blanco" ,"negro" ,"verde" ,"rojo"];

//let pos = colores[0];

//console.log(pos[0]);

let saveElement = colores[2];
 
console.log(colores[0].charAt(0));

//ejercicio 4

function generarNumAleatorio(max, min){
  
  return Math.trunc(Math.random() *(max - min) + min);

} 

let res = generarNumAleatorio(1, 99);


console.log("El numero aleatorio generado es: " + res);


//ejercicio 6 y 7


let numeros = [];

rellenarArray(numeros);

function rellenarArray(){
   for(let i = 0; i<10; i++){
     numeros[i] = Math.trunc(Math.random()* (50 - 1) + 1);
   }

   return numeros;
}

let res1 = rellenarArray(); 

console.log("el array con 10 numeros aleatorios es: ");
console.log(res1);

//genero nueva copia del array

let copiaArray = [].concat(res1,7 , 8 , 'hola', Persona={Name:'Pablo', edad: 30});

console.log("el array original es:  \n");
console.log(res1);
console.log("----------------------"); 
console.log('la copia del array es: \n');
console.log(copiaArray);


//ejercicio 5
 
const array3 = [];

const objetoNum={
  num:1
}  


/*
 let like= arrr.map(function(e, index, arra){
   
   if(e > 4){
     console.log(e);
   }
   else{
    console.log(e*2);
   }
});
*/
 
function rellenarArray2(){
   
   for (let i = 0; i <= 10; i++) {
     
      if(objetoNum.num<=10){
        array3[i] = objetoNum.num++;
      }
    
   }

   return array3;
}

let res3 = (rellenarArray2());

console.log("El array con los numeros del 1 al 10 es:  \n");
console.log(array3);

/*
let arr=[1, 2, 4];

let arry = [].concat(arr, 7, 8, 9, 'hola', Persona={Name:'gonzalo'});
console.log(arry);
*/

/*
let arrayCadena=[];

function ingresarCadenasTexto(){
  let i=0;
   
   let cadena= prompt('ingrese un texto');
   arrayCadena.push( cadena);

   while(true){
    
    cadena = prompt('ingrese un texto');
   
     if(cadena=='cancelar')
        break;
    
    arrayCadena.push(cadena);  
 
   }
    return arrayCadena.join('-');
}  

let arra= ingresarCadenasTexto(); 

let recorrer = Array(arra).forEach(element => {
   alert(element);   
});
 */

function IngresarCadenas(){
  let resultado = "";
  do {
     
     let texto = prompt("Introduce un texto");
     
     if(texto=='cancelar'){
        break;
     }
     
     if(texto != null) {
        texto = texto.trim();  //quito los espacios con trim()
     } else {
         texto = "";
     }
       
     //si la variable resultado está vacía
     if ((resultado == "") && (texto != "")) {
        // concatenamos sin el guión
        resultado += texto;
  
     }// concatenamos usando guión
      else if ((resultado != "") && (texto != "")) {
         resultado += "-" + texto;
   
      } else {
           resultado = resultado;
        }
  
  } while(true);

  return resultado;
}

// si el texto ingresado es: "cancelar" mostramos el resultado por consola
alert(IngresarCadenas());



 