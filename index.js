//1. Imprime por consola el string 'Hello World'

//primera solución
console.log('Hello World')
//segunda solución
const greeting ='Hello World'
console.log(greeting)


//2.Declara una variable de las dos formas posibles, e imprime por consola los dos valores
// Declarar una variable usando 'let'
//let saludo1 = '¡Hola mundo!'
//console.log(saludo1)
//Declarar una variable usando 'const'
//const saludo2 = 'Hello, World!'
//console.log(saludo2) 

//3. Cambia ahora el valor de una de las dos variables e imprime por consola
// Declarar una variable usando 'let'
let greeting1 = '¡Hola mundo!'
console.log(greeting1)
// Cambiar el valor de la variable 'saludo1'
greeting1 = '¡Hola de nuevo mundo!'
console.log(greeting1)
// Declarar una variable usando 'const'
const greeting2 = 'Hello world!'
console.log(greeting2)

//4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola
const a = 2
const b = 3
console.log(a + b)

//5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas
//primera solución
const questionName = '¿Cómo te llamas?'
let yourName = 'Soy María Jesús'
let completeGreeting = questionName + ' ' + yourName
console.log(completeGreeting)
//segunda solución 
const questionSurName = '¿Y tu apellido?'
let yourSurName = 'Martín'
let completeGreeting2 = `${questionSurName} ${yourSurName}`
console.log(completeGreeting2)

//6. Crea una función que imprima por consola el string 'Hello World'
function printGreeting() {
    console.log('Hello World')
}
// tengo que llamar a la función para que imprima el mensaje
printGreeting()

//7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros
//primera solución
const x = 2
const y = 5
function multiply() {
    console.log(x * y)
}
multiply()

//segunda solución
function multiply2(a, b) {
    console.log(a * b)
}
// Llamar a la función con dos números como argumentos
multiply2(5, 3)

//8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro
//primera solución
const c = 3;
function riseNumber() {
    console.log(c ** 3)
} 
riseNumber()

//segunda solución
function riseNumber1(numero) { 
    console.log(numero ** 3)

 }
 riseNumber1(4);  // Llamar a la función con un número como argumento 

//9.