let name = (prompt("Ingrese su nombre:"));

let edad = parseInt(prompt("Ingrese su Edad:"));

while (edad < 18) {
    alert(name + " " + "Usted es menor de edad, pida ayuda a un Adulto");
    break
}
let total_pagar = 0;
let cant_objets = parseInt(prompt("Ingrese la cantidad de objetos:"));
let limite = 1000;

for (let i=0; i<cant_objets; i++) {
    let nombreobjects = prompt("Ingrese el Nombre del objeto:");
    let precio = parseFloat(prompt("Ingrese el Precio:"));
    total_pagar += precio;
    let mensaje = "Ingresaste: " + nombreobjects + " por $" + precio;
    alert(mensaje);
    console.log(mensaje);

    if (total_pagar > limite) {
        alert("Has superado el valor de compras máximas este mes!");
        break;
    }

}
let mensaje_final = "El total a pagar sin iva es: $" + total_pagar;
alert(mensaje_final);
console.log(mensaje_final);

let ivacol = a => a * 0.19; 
let iva = ivacol(total_pagar)

alert("El valor del Iva es de " + iva)

const totalmasiva = (a, b) => a + b;
let totalconiva = (totalmasiva (iva, total_pagar))

alert ("El valor total a pagar es de " + totalconiva)


let nuemerodecuotas = prompt ("Ingrese el número de cuotas a diferir el valor")

if (nuemerodecuotas <= 12) {
    alert("Has diferido el valor en cuotas que no superan un año, no tendrás intereses!");
    } else {
        alert("Has diferido el valor por un término mayor a un año, tus intereses son de 5% sobre el valor en cada cuota");
    } 

const valorcuota = (a,b) => a / b;
let valorcuotasininteres = (valorcuota(totalconiva,nuemerodecuotas))
alert ("El valor de la cuota sin intereses es de " + valorcuotasininteres)

if (nuemerodecuotas >= 13) {
const cuotaconinteres = a => ((a * 0.05) + a )
let cuotamasinteres = cuotaconinteres(valorcuotasininteres)
alert ("El valor de la cuota con intereses es de " + cuotamasinteres)}
else {
    alert("El valor de la cuota es de " + valorcuotasininteres)
}

if (nuemerodecuotas >= 13) {
    const totalventaconinteres = (a, b) => (a * b )
    let totalfinal = totalventaconinteres(cuotamasinteres, nuemerodecuotas)
    alert ("El valor total con intereses es de " + totalfinal)}
    else {
        alert("El valor total es de " + totalconiva)
    }

function myFunction() {
    document.getElementById("demo").innerHTML = "";
    const val = document.getElementById("gastosmensuales").checked;
    console.log(val);
    if(val == true) {
        alert(name + " " + " el total con iva sin intereses es de compras por Ropa es de " + totalconiva);
    } else {
        alert(name + " " + " el total con iva sin intereses es de compras por alimentacion es de " + totalconiva);
    }
}
alert()

