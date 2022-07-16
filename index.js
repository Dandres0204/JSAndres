let nombre = (prompt("Ingrese su nombre:"));
let edad = parseInt(prompt("Ingrese su Edad:"));

const name = nombre

while (edad < 18) {
    alert(nombre + " " + "Usted es menor de edad, pida ayuda a un Adulto");
    break
}
let total_pagar = 0;
let cant_objets = parseInt(prompt("Ingrese la cantidad de objetos:"));
let limite = 1000;
var nombreobjects;
var carrito = [];

for (let i=0; i<cant_objets; i++) {
    nombreobjects = prompt("Ingrese el Nombre del objeto:");
    let precio = parseFloat(prompt("Ingrese el Precio:"));
    total_pagar += precio;


    let mensaje = "Ingresaste: " + nombreobjects + " por $" + precio;
    alert(mensaje);

    carrito.push(nombreobjects);

    if (total_pagar > limite) {
        alert("Has superado el valor de compras máximas este mes!");
        break;
    }
}
// let mensaje = "El total a pagar sin iva es: $" + total_pagar;
// alert(mensaje);

// function operaciones(operacion){
//     if(operacion === "suma"){
//         return (x, y) => x + y;
//     }
//     if(operacion === "tax"){
//         return a => a * 0.19;
//     }
//     if(operacion === "division"){
//         return (a,b) => a / b;
//     }
//     if(operacion === "interes"){
//         return  a => ((a * 0.05) + a );
//     }
//     if(operacion === "multiplicacion"){
//         return (a, b) => (a * b );
//     }
// }
// let tax = operaciones("tax");
// alert("El valor del Iva es de " + tax(total_pagar));

// let suma = operaciones("suma");
// const totalmasiva = suma(tax(total_pagar), total_pagar);
// alert("El valor total a pagar es de " + totalmasiva);

// const obsequios = ["viaje", "cena", "carro", "casa"];
// let obsequioelegido = prompt("tienes derecho a elegir uno de los siguientes objetos:   " + obsequios.join("\n")).toLowerCase();
// obsequios.includes(obsequioelegido);

// if (obsequioelegido === ("viaje")) {
//     alert ("Te ganaste un viaje a la Polinesia Francesa")}
//     if (obsequioelegido === ("cena")) {
//         alert("te ganaste una cena en la torre Eiffel")}
//     if (obsequioelegido === ("carro")) {
//         alert("te ganaste un carro a control remoto")} 
//     if (obsequioelegido === ("casa")) {
//         alert("te ganaste una casa en Alaska")
//     }

// let cuotas = prompt ("Ingrese el número de cuotas a diferir el valor")

// if (cuotas <= 12) {
//     alert("Has diferido el valor en cuotas que no superan un año, no tendrás intereses!")
//     } else {
//         alert("Has diferido el valor por un término mayor a un año, tus intereses son de 5% sobre el valor en cada cuota");
//     } 

// let division = operaciones("division");
// const sininteres = division(totalmasiva,cuotas);
// alert ("El valor de la cuota sin intereses es de " + sininteres);

// if (cuotas >= 13) {
// let interes = operaciones("interes");
// const credit = interes(sininteres);
// alert ("El valor de la cuota con intereses es de " + credit)}
// else {
//     alert("El valor de la cuota es de " + sininteres)
// }

// if (cuotas >= 13) {
//     let multiplicacion = operaciones("multiplicacion");
//     const totalventa = multiplicacion(credit, cuotas);
//     alert ("El valor total con intereses es de " + totalventa)}
//     else {
//         alert("El valor total es de " + totalmasiva)
//     }

// const eliminar = (regalo) => {
//         let posicion = obsequios.indexOf(regalo);
//         if(posicion != -1){
//           obsequios.splice(posicion, 1);
//         }
//       }
//       eliminar(obsequioelegido);
// alert ("Quedan los siguientes obsequios: " + obsequios.join("\n"))
// let ultimoregalo = prompt("tienes derecho a elegir otro de los siguientes objetos:   " + obsequios.join("\n")).toLowerCase();
// obsequios.includes(ultimoregalo);

//     if (ultimoregalo === ("viaje")) {
//     alert ("Te ganaste un viaje a la Polinesia Francesa")}
//     if (ultimoregalo === ("cena")) {
//         alert("te ganaste una cena en la torre Eiffel")}
//     if (ultimoregalo === ("carro")) {
//         alert("te ganaste un carro a control remoto")}
//     if (ultimoregalo === ("casa")) {
//         alert("te ganaste una casa en Alaska")}

// function myFunction() {
//     document.getElementById("demo").innerHTML = "";
//     const val = document.getElementById("gastosmensuales").checked;
//     console.log(val);
//     if(val == true) {
//         alert(nombre + " " + " el total con iva sin intereses es de compras por Ropa es de " + totalmasiva);
//     } else {
//         alert(nombre + " " + " el total con iva sin intereses es de compras por alimentacion es de " + totalmasiva);
//     }
// }
// let shop = document.createElement("h1");

// shop.innerHTML = "Tu carrito de compras es el siguiente:";
// document.body.append(shop);


carrito.forEach(function(element){
    let card = document.createElement('div')
    card.setAttribute("class","card");
        card.textContent = element
    document.body.appendChild(card)
 })

let tarjeta = document.getElementsByClassName("card");
for (var i=0; i< tarjeta.length; i++) {
    tarjeta[i].addEventListener("mouseover",function (event) {
        this.classList.toggle('blue'); 
      });
    }
