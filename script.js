// Write your JavaScript code here!





window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let destination = pickPlanet(listedPlanets);
        console.log(destination)
        addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.image);
    })
    
    
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        let pilotNameinput = document.querySelector("input[name=pilotName]").value;
        let coPilotNameinput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        
        event.preventDefault();
        formSubmission(document, document.getElementById("faultyItems"), pilotNameinput, coPilotNameinput, fuelLevelInput, cargoMassInput);    
        
    })
           
 
   
    
    
})


