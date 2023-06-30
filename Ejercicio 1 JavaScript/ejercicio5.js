let numero1 = prompt("Ingresa un primer número")
let numero2 = prompt("Ingresa un segundo número")

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

if (numero1 < numero2)
{
    alert(numero1 + " Es el menor")
}
else if (numero2 < numero1)
{
    alert(numero2 + " Es el menor")
}
