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