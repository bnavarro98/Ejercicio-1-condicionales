let calificacion = prompt("Ingrese una calificación entre 1 y 10")
calificacion = parseFloat(calificacion)

if(calificacion <1 || calificacion > 10 || isNaN(calificacion))
{
    alert("Por favor, ingrese un valor válido")
    location.reload()
}
else if(calificacion < 6)
{
    alert("Reprobado")
}
else if(calificacion >= 6 && calificacion <= 8)
{
    alert("Regular")
}
else if(calificacion === 9)
{
    alert("Bien")
}
else if(calificacion === 10)
{
    alert("Excelente")
}