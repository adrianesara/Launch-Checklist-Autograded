// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } 
    if (isNaN(testInput)=== true) {
        return "Not a Number"
    } else {
        return "Is a Number"    
    }
}
 
    

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required!");
    }
    if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number"){
        alert("That is not a valid number");
    } 

    if (validateInput(fuelLevel) < 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = ("Shuttle not ready for launch");
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("fuelStatus").innerHTML = ("There is not enough fuel for the journey");
    }    
    if (validateInput(cargoLevel) > 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = ("Shuttle not ready for launch");
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("cargoStatus").innerHTML = ("There is too much mass to take off");
        
    } else {
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilot} is ready for launch`);
        document.getElementById("copilotStatus").innerHTML = (`Co-Pilot ${copilot} is ready for launch`);
        document.getElementById("launchStatus").innerHTML = ("Shuttle ready for launch");
        document.getElementById("launchStatus").style.color = "green";
    }
}
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;