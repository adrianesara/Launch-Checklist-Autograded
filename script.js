// Write your JavaScript code here!

const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        let pilotNameinput = document.querySelector("input[name=pilotName]").value;
        let coPilotNameinput = document.querySelector("input[name=copilotName").value;
        let fuelLeveInput = document.querySelector("input[name = fuelLevel").value;
        let cargoMassInput = document.querySelector("input[name=cargoMass").value;
        event.preventDefault();
        formSubmission(document, document.getElementById("faultyItems"), pilotNameinput, coPilotNameinput, fuelLeveInput, cargoMassInput);
     
    })      
        
    })
           
 
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });