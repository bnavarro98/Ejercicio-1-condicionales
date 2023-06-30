let tipoVehiculo = prompt("Ingrese el tipo de vehículo (1.Coche      2.Moto       3.Autobús)")

let precioKm = 0
let kmsRecorridos = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos"))
let litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos"))
let extra = 0

if (tipoVehiculo === "1") {
  precioKm = 0.20
} 
else if (tipoVehiculo === "2") {
  precioKm = 0.10
} 
else if (tipoVehiculo === "3") {
  precioKm = 0.5
} 
else {
  alert("Tipo de vehículo no válido, intente de nuevo");
  location.reload()
}


if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
  extra = 5
} 
else if (litrosConsumidos > 100) {
  extra = 10
}

let totalPagar = (precioKm * kmsRecorridos) + extra

alert("El total a pagar es de $" + totalPagar.toFixed(2))
//location.reload()