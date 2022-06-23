function showCard(){
    const carta = document.getElementById("carta-clima");
    carta.removeAttribute("style");
    carta.setAttribute("style", "display: block");
}

const selctCities = document.getElementById("city-list");

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function showCitiesSelect(){
    let cities = getCitiesFromLocalStorage();  
    for (let i = 0; i < cities.length; i++) {
        let option = document.createElement('option');
        let valor = cities[i];
        option.text= valor;
        selctCities.appendChild(option);
    }    
}

showCitiesSelect();

function showAlert(){
    const cartelAmarillo = document.getElementById("alert-no-cities");
    let cities = getCitiesFromLocalStorage();  
    if (cities.length === 0) {
        cartelAmarillo.removeAttribute("style");
        cartelAmarillo.setAttribute("style", "display: flex");
        console.log("No hay ciudades guardadas en el localStorage");
    }
}