let newCity = ' ';
const cartelVerde = document.querySelector(".mensaje.green")
const cartelRojo = document.querySelector(".mensaje.red")
const cartelAmarillo = document.querySelector(".mensaje.yellow")

function validCity(num1) {
    if (num1 > 0) {
        return true;
    }else if (num1 <= 0){
        return false;
    }
}

function addNewCityToLocalStorage() {
    let ciudad = document.getElementById("add-city").value;
    // registra la ciudad con mayusculas gracias a .toUpperCase() y sin espacios al final o adelante gracias a .trimp() 
    newCity = ciudad.toUpperCase().trim();

    try {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&appid=c4d912fb3ee953d0623afe3268b33688&units=metric&lang=es')
        .then(response => response.json())
        .then(datos => {
            let codigo = datos.cod;
            if (codigo == 200) {
                let cities = getCitiesFromLocalStorage();
                if (cities.indexOf(newCity) === -1) {
                    cities.push(newCity);
                    localStorage.setItem("CITIES", JSON.stringify(cities));
                    console.log("Se añadio la nueva ciudad con exito");
                    cartelAmarillo.removeAttribute("style");
                    cartelAmarillo.setAttribute("style", "display: none");
                    cartelVerde.removeAttribute("style");
                    cartelVerde.setAttribute("style", "display: flex");
                } else if (cities.indexOf(newCity) > -1) {
                    cartelVerde.removeAttribute("style");
                    cartelVerde.setAttribute("style", "display: none");
                    cartelAmarillo.removeAttribute("style");
                    cartelAmarillo.setAttribute("style", "display: flex");
                    console.log(newCity + ' Ya existe dentro del array de CITIES del localStorage');
                } else {
                    console.log("Huvo un error al añadir la nueva ciudad");
                    cartelRojo.removeAttribute("style");
                    cartelRojo.setAttribute("style", "display: flex");
                }            
            } else if (codigo == 404){
                console.log("Ciudad no encontrada o ciudad inexistente");
                cartelRojo.removeAttribute("style");
                cartelRojo.setAttribute("style", "display: flex");
            }
        })
    } catch (error) {
        console.log("NO se encuentra la ciudad introducida")
        console.log(error);
        cartelRojo.removeAttribute("style");
        cartelRojo.setAttribute("style", "display: flex");

    }
}




