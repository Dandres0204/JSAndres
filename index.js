let nombre = (prompt("Ingrese su nombre:"));
let edad = parseInt(prompt("Ingrese su Edad:"));

const name = nombre

let ingreso = edad <= 18 ? true : false;
    ingreso ? alert(nombre + " " + "Usted es menor de edad, pida ayuda a un Adulto"): alert("Bienvenido" + " " + nombre);

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

total_pagar > limite && alert("Has superado el valor de compras máximas este mes!");

}
let mensaje = "El total a pagar sin iva es: $" + total_pagar;
alert(mensaje);

function operaciones(operacion){
    if(operacion === "suma"){
        return (x, y) => x + y;
    }
    if(operacion === "tax"){
        return a => a * 0.19;
    }
    if(operacion === "division"){
        return (a,b) => a / b;
    }
    if(operacion === "interes"){
        return  a => ((a * 0.05) + a );
    }
    if(operacion === "multiplicacion"){
        return (a, b) => (a * b );
    }
}
let tax = operaciones("tax");
alert("El valor del Iva es de " + tax(total_pagar));

let suma = operaciones("suma");
const totalmasiva = suma(tax(total_pagar), total_pagar);
alert("El valor total a pagar es de " + totalmasiva);

const obsequios = ["viaje", "cena", "carro", "casa"];
let obsequioelegido = prompt("tienes derecho a elegir uno de los siguientes objetos:   " + obsequios.join("\n")).toLowerCase();
obsequios.includes(obsequioelegido);

if (obsequioelegido === ("viaje")) {
    alert ("Te ganaste un viaje a la Polinesia Francesa")}
    if (obsequioelegido === ("cena")) {
        alert("te ganaste una cena en la torre Eiffel")}
    if (obsequioelegido === ("carro")) {
        alert("te ganaste un carro a control remoto")} 
    if (obsequioelegido === ("casa")) {
        alert("te ganaste una casa en Alaska")
    }

let cuotas = prompt ("Ingrese el número de cuotas a diferir el valor")

let credit = cuotas <= 12 ? true : false;
credit ? alert("Has diferido el valor en cuotas que no superan un año, no tendrás intereses!"): alert("Has diferido el valor por un término mayor a un año, tus intereses son de 5% sobre el valor en cada cuota");

let division = operaciones("division");
const sininteres = division(totalmasiva,cuotas);
alert ("El valor de la cuota sin intereses es de " + sininteres);

if (cuotas >= 13) {
let interes = operaciones("interes");
const credit = interes(sininteres);
alert ("El valor de la cuota con intereses es de " + credit)}
else {
    alert("El valor de la cuota es de " + sininteres)
}

if (cuotas >= 13) {
    let multiplicacion = operaciones("multiplicacion");
    const totalventa = multiplicacion(credit, cuotas);
    alert ("El valor total con intereses es de " + totalventa)}
    else {
        alert("El valor total es de " + totalmasiva)
    }

const eliminar = (regalo) => {
        let posicion = obsequios.indexOf(regalo);
        if(posicion != -1){
          obsequios.splice(posicion, 1);
        }
      }
      eliminar(obsequioelegido);
alert ("Quedan los siguientes obsequios: " + obsequios.join("\n"))
let ultimoregalo = prompt("tienes derecho a elegir otro de los siguientes objetos:   " + obsequios.join("\n")).toLowerCase();
obsequios.includes(ultimoregalo);

    if (ultimoregalo === ("viaje")) {
    alert ("Te ganaste un viaje a la Polinesia Francesa")}
    if (ultimoregalo === ("cena")) {
        alert("te ganaste una cena en la torre Eiffel")}
    if (ultimoregalo === ("carro")) {
        alert("te ganaste un carro a control remoto")}
    if (ultimoregalo === ("casa")) {
        alert("te ganaste una casa en Alaska")}

function myFunction() {
    document.getElementById("demo").innerHTML = "";
    const val = document.getElementById("gastosmensuales").checked;
    if(val == true) {
        Swal.fire(nombre + " " + " el total con iva sin intereses es de compras por Ropa es de " + totalmasiva);
    } else {
        Swal.fire(nombre + " " + " el total con iva sin intereses es de compras por alimentacion es de " + totalmasiva);
    }
}
let shop = document.createElement("h1");

shop.innerHTML = "Tu carrito de compras es el siguiente:";
document.body.append(shop);


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
    Swal.fire({
        title: 'Sus Compras han finalizado.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })

// tarjeta emergeente
 function OpenModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'block'
  }
  function CloseModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'none'
  }
  
  localStorage.setItem("compras", JSON.stringify(carrito));
  let compras =  JSON.parse(localStorage.getItem("compras"));

  compras.forEach(function(element){
  let pop = document.createElement('div')
    pop.setAttribute("class","pop");
    pop.textContent = element
    popup2.appendChild(pop)
})

const lista = document.getElementById("lista");

fetch("./data.json")
.then(response => response.json())
.then(data => {
    data.forEach(regalo =>{
        const li = document.createElement("li");
        li.innerHTML = `
        <p>${regalo.nombrepremio}</p>
        <img src="${regalo.img}">
        `;
        lista.append(li);
    })
})
