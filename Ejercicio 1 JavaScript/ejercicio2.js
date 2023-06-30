let numero = prompt("Ingresa un número y te diré si es divisible entre 2")
numero = parseInt(numero)
let residuo = numero % 2

if(residuo === 0 )
{
    alert("El número que ingresaste ES PERFECTAMENTE divisible entre 2")
}
else 
{
    alert("El número que ingresaste NO es divisible entre 2")
}