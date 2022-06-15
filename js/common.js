let newCity = ' ';

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
    cities.push(newCity);
    localStorage.setItem("CITIES", JSON.stringify(cities));
}

