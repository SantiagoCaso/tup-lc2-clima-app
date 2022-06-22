function showCard(){
    const carta = document.getElementById("carta-clima");
    carta.removeAttribute("style");
    carta.setAttribute("style", "display: block");
}

const selctCities = document.getElementById("city-list");

function showCitiesSelect(newCity){
    let option = document.createElement('option');
    let valor = newCity;
    option.text= valor;
    selctCities.appendChild(option);
}