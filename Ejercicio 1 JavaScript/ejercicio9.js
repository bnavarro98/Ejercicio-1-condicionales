let costoHelado = 50; // Costo base del helado sin topping

let topping = prompt("Elija el topping Para su helado: Oreo, KitKat, Brownie o sin topping");

if (topping !== "Sin topping" && topping !== "sin topping" && topping !== "SIN TOPPING" &&
    topping !== "Oreo" && topping !== "oreo" && topping !== "OREO" &&
    topping !== "KitKat" && topping !== "kitkat" && topping !== "KITKAT" &&
    topping !== "Brownie" && topping !== "brownie" & topping !== "BROWNIE")
{
    alert("Ingrese un sabor válido");
    location.reload()
}

else if (topping === "Sin topping" || topping === "sin topping" || topping === "SIN TOPPING")
{
    alert("El costo del helado sin topping es de $" + costoHelado + " MXN");
    //location.reload()
}
else if (topping === "Oreo" || topping === "oreo" || topping === "OREO") 
{
  costoHelado = costoHelado + 10;
  alert("El costo del helado con topping " + topping + " es de $" + costoHelado + " MXN");
  //location.reload()
} 
else if (topping === "KitKat" || topping === "kitkat" || topping === "KITKAT") 
{
  costoHelado = costoHelado + 15;
  alert("El costo del helado con topping " + topping + " es de $" + costoHelado + " MXN");
  //location.reload()
} 
else if (topping === "Brownie" || topping === "brownie" || topping === "BROWNIE") 
{
  costoHelado = costoHelado + 20;
  alert("El costo del helado con topping " + topping + " es de $" + costoHelado + " MXN");
  //location.reload()
}
