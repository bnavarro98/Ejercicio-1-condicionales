let numeroCliente = prompt("Ingresa tu número de cliente, por favor")
numeroCliente = parseInt(numeroCliente)

if (isNaN(numeroCliente))
{
    alert("Por favor, ingresa un dato numérico")
}
else if (numeroCliente === 1000)
{
    alert("¡Felicidades, ganaste un premio!")
}
else
{
    alert("Lo sentimos, sigue participando")
}