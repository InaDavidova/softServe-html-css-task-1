import {citiesData}  from "./citiesData.js";

$(document).ready(function () {

    for(let [city, info] of Object.entries(citiesData)){
        $("main").append(`
            <div class="city" id="${city}">
                <img src="${info.picUrl}" alt="Picture of ${city}"/>    
                <div class="city-content">
                    <h2>${city}, ${info.country}</h2>
                    <p>${info.information.substring(0,150)}...</p>
                    <button>Show More</button>
                </div>
            </div>`);
    }

});

$("main").click(function(e){
    const element = e.target;

    if(element.tagName =="BUTTON" && element.textContent =="Show More"){
        element.textContent = "Show Less";
        element.previousElementSibling.textContent = citiesData[element.parentElement.parentElement.id].information;

    } else if(element.tagName =="BUTTON" && element.textContent =="Show Less"){
        element.textContent = "Show More";
        element.previousElementSibling.textContent = citiesData[element.parentElement.parentElement.id].information.substring(0, 150) + '...';
    }
})