let numero = prompt("Ingresa un número, para decirte si es PAR o IMPAR")
numero = parseInt(numero)

let ParImpar = numero % 2

if (numero === 0 || ParImpar ===  0)
{
    alert("El número SI ES PAR")
}

else
{
    alert("El número NO ES PAR")
}
