let nivel = prompt("Elige un nivel para el curso:      1.Course,     2.Carrera    o    3.Master")
let opcionbeca = prompt("¿Tienes alguna beca? (Teclea      1.SI      o     2.NO)")

let CostoCourse = 4999.00
let CostoCarrera = 3999.00
let CostoMaster = 2999.00
let total = 0.00

let BecaFacebook = 0.80
let BecaGoogle = 0.85
let BecaJesua = 0.50

let DuracionCourse = "2 meses"
let DuracionCarrera = "6 meses"
let DuracionMaster = "12 meses"

if (nivel === "1" && opcionbeca === "1") {
    let tipobeca = prompt("¿Qué beca tienes? 1.Beca Facebook 2. BecaGoogle 3.Beca Jesua")

    switch (tipobeca) {
        case "1":
            total = CostoCourse * BecaFacebook
            alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)
            break

        case "2":
            total = CostoCourse * BecaGoogle
            alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)
            break

        case "3":
            total = CostoCourse * BecaJesua
            alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)
            break

    }
    //location.reload()
}

else if (nivel === "2" && opcionbeca === "1") {
    let tipobeca = prompt("¿Qué beca tienes? 1.Beca Facebook 2. BecaGoogle 3.Beca Jesua")

    switch (tipobeca) {
        case "1":
            total = CostoCarrera * BecaFacebook
            alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)
            break

        case "2":
            total = CostoCarrera * BecaGoogle
            alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)
            break

        case "3":
            total = CostoCarrera * BecaJesua
            alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)
            break

    }
    //location.reload()
}

else if (nivel === "3" && opcionbeca === "1") {
    let tipobeca = prompt("¿Qué beca tienes? 1.Beca Facebook 2. BecaGoogle 3.Beca Jesua")

    switch (tipobeca) {
        case "1":
            total = CostoMaster * BecaFacebook
            alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)
            break

        case "2":
            total = CostoMaster * BecaGoogle
            alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)
            break

        case "3":
            total = CostoMaster * BecaJesua
            alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)
            break

    }
    //location.reload()
}

else if (nivel === "1" && opcionbeca === "2") {

    total = CostoCourse
    alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCourse)

    //location.reload()
}

else if (nivel === "2" && opcionbeca === "2") {

    total = CostoCarrera
    alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionCarrera)

    //location.reload()
}

else if (nivel === "3" && opcionbeca === "2") {

    total = CostoMaster
    alert("El costo total de tu curso será de $" + total.toFixed(2) + " y tendra una duración de " + DuracionMaster)

    //location.reload()
}


