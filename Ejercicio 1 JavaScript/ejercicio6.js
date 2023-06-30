let numero1 = prompt("Ingresa un primer número")
let numero2 = prompt("Ingresa un segundo número")
let numero3 = prompt("Ingresa un tercer número")
let menor

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)
numero3 = parseFloat(numero3)

if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3)
{
    alert("No puedes escribir 2 números iguales. Intenta de nuevo")
    location.reload()
}
else if(numero1 <= numero2 && numero1 <= numero3)
{
    menor = numero1
}
else if (numero2 <= numero1 && numero2 <= numero3)
{
    menor = numero2
}
else
{
    menor = numero3
}

alert("El número menor es: " + menor)