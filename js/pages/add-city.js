let newCity = ' ';
const cartelVerde = document.querySelector(".mensaje.green")
const cartelRojo = document.querySelector(".mensaje.red")
const cartelAmarillo = document.querySelector(".mensaje.yellow")

function agregarNombreCiudad(letCiudad){
    let ciudad = document.getElementById("add-city").value;
    newCity = ciudad;
    letCiudad = ciudad;
    return letCiudad;
}


function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}


function addNewCityToLocalStorage(newCity) {
    let cities = getCitiesFromLocalStorage();  
    if (cities.indexOf(newCity) === -1) {
        cities.push(newCity);
        localStorage.setItem("CITIES", JSON.stringify(cities));
        console.log("Se añadio la nueva ciudad con exito");
        cartelAmarillo.removeAttribute("style");
        cartelAmarillo.setAttribute("style", "display: none");
        cartelVerde.removeAttribute("style");
        cartelVerde.setAttribute("style", "display: flex");
    }  else if ( cities.indexOf(newCity) > -1) {
        cartelVerde.removeAttribute("style");
        cartelVerde.setAttribute("style", "display: none");
        cartelAmarillo.removeAttribute("style");
        cartelAmarillo.setAttribute("style", "display: flex");
        console.log(newCity + 'Ya existe dentro del array de CITIES del localStorage');
    }else{
        console.log("Huvo un error al añadir la nueva ciudad");
        cartelRojo.removeAttribute("style");
        cartelRojo.setAttribute("style", "display: flex");
    }
}

