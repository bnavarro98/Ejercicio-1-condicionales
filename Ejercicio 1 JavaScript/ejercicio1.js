let pregunta1 = prompt("¿Eres bellisimo/a?", "");

if (pregunta1 === "Si" || pregunta1 === "si" || pregunta1 === "SI") {
    alert("Ciertamente");
} 
else if (pregunta1 === "No" || pregunta1 === "no" || pregunta1 === "NO") {
    alert("No te creo");
} 
else {
    alert("Lo siento, pero eso no es lo que te pregunté");
}