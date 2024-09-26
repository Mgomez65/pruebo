/*
Ejercio 3-1
let altura = 1.82 
let peso = 95 
let edad = 21;


let imc =  peso / (altura * altura)

if (imc >= 22 && edad >= 45 ) {
    console.log(`alto ${imc}`)
}else if (imc >= 22 && edad < 45 ){
    console.log(`mediio ${imc}`)
}else if (imc < 22 && edad < 45){
    console.log(`bajo  ${imc}`)
}else {
    console.log(`medio  ${imc}`)
}
*/
/*
Ejercio 3-2

let micro_A = 2.0 ;
let micro_B = 2.5;
let micro_C = 3.0; 

let cantidad_A = prompt("cantidad de pasajeros en el micro A ")
let cantidad_B = prompt("cantidad de pasajeros en el micro B ")
let cantidad_C = prompt("cantidad de pasajeros en el micro C ")

let kilometro_A = prompt("cantidad de kilometros del micro A ")
let kilometro_B = prompt("cantidad de kilometros del micro B ")
let kilometro_C = prompt("cantidad de kilometros del micro C ")


if (cantidad_A > 20 ) {
    console.log(`el total a pagar de una persona del micro A es: ${kilometro_A * micro_A} `)
    console.log(`el total a pagar del micro A es: ${(kilometro_A * micro_A)*cantidad_A} `)
}else if (cantidad_A <= 20   && cantidad_A > 0){
    console.log(`el total a pagar de una persona del micro A es: ${kilometro_A * micro_A} `)
    console.log(`el total a pagar del micro A es: ${(kilometro_A * micro_A)*20} `)
}else{
    console.log("el miccroA no hiso su rrecorido ")
}


if (cantidad_B > 20 ) {
    console.log(`el total a pagar de una persona del micro B es: ${kilometro_B * micro_B} `)
    console.log(`el total a pagar del micro B es: ${(kilometro_B * micro_B)*cantidad_B} `)
}else if (cantidad_B <= 20 && cantidad_B > 0 ){
    console.log(`el total a pagar de una persona del micro B es: ${kilometro_B * micro_B} `)
    console.log(`el total a pagar del micro B es: ${(kilometro_B * micro_B)*20} `)
}else{
    console.log("el miccro B no hiso su rrecorido ")
}

if (cantidad_C > 20 ) {
    console.log(`el total a pagar de una persona del micro C es: ${kilometro_C * micro_C} `)
    console.log(`el total a pagar del micro C es: ${(kilometro_C * micro_C)*cantidad_C} `)
}else if (cantidad_C <= 20  && cantidad_C > 0){
    console.log(`el total a pagar de una persona del micro C es: ${kilometro_C * micro_C} `)
    console.log(`el total a pagar del micro C es: ${(kilometro_C * micro_C)*20} `)
}else{
    console.log("el miccro C no hiso su rrecorido ")
}*/
/*

 Ejercio 3-3
const costoPrimero5 = 1.00;
const costoSiguientes3 = 0.80;
const costoSiguientes2 = 0.70;
const costoRestante = 0.50;

let dia = prompt("Escriba el día de la llamada");
let hora = prompt("Escriba si es la Mañana o Tarde  ")
let minutos  = parseFloat(prompt("Escriba cuántos minutos habló en la llamada"))


function obtenerInteres(dia, hora) {
    console.log(dia)
    if (dia === "domingo") {
        console.log("domingo")
        return 1.03; // 3% de impuesto
    } else {
        if (hora === "mañana") {
            return 1.15; // 15% de impuesto
        } else {
            return 1.10; // 10% de impuesto
        }
    }
}
let interes = obtenerInteres(dia,hora)


if (minutos <= 5 ) {
    console.log(`El costo de la llamada es: ${(minutos * costoPrimero5)* interes  }} `)
    
} else if (minutos > 5 && minutos <= 8 ){
    console.log(`El costo de la llamada es: ${ 5 + ((minutos - 5 * costoSiguientes3)* interes )}   `)    
}else if (minutos > 9 && minutos <= 10 ){
    console.log(`El costo de la llamada es: ${ (7.4 +  (minutos - 8 * costoSiguientes2 ))* interes} `)
}else{
    console. log (`El costo de la llamada es: ${( 8.8 +  (minutos - 10 * costoRestante ))* interes} `)
}
*/
/*
const sensillas = 20;
const dobles = 25;
const triples = 28 

let tipo = prompt("escriba el tipo de hambuerguesa ")

let cantidad = parseInt(prompt("escriba la cantidad de hamburguesas "))

let formaPago = prompt("Escriba la forma de pago: ")


function precio (precio){
    if (formaPago === "efectivo") {
        console.log(cantidad*precio)
    } else {
        console.log((cantidad*precio)*1.05)
    }
}

if( tipo == "sensillas"){
    precio(sensillas)
}else if(tipo == "dobles"){
    precio(dobles)
}else{
    precio(triples)
}
*/

