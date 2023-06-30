let dia = prompt("Ingrese un número entre 1 y 7, para decir que día de la semana es")
dia = parseFloat(dia)

if(dia <1 || dia > 7 || isNaN(dia) || Number.isInteger(dia) === false)
{
    alert("Por favor, ingrese un valor válido")
    location.reload()
}
else if(dia === 1)
{
    alert("Hoy es LUNES")
}
else if(dia === 2)
{
    alert("Hoy es MARTES")
}
else if(dia === 3)
{
    alert("Hoy es MIÉRCOLES")
}
else if(dia === 4)
{
    alert("Hoy es JUEVES")
}
else if(dia === 5)
{
    alert("Hoy es VIERNES")
}
else if(dia === 6)
{
    alert("Hoy es SÁBADO")
}
else if(dia === 7)
{
    alert("Hoy es LUNES")
}