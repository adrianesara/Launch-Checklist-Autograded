// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
        const div = document.getElementById("missionTarget");
        div.innerHTML = `
        <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)=== true) {
        return "Not a Number";
    } else {
        return "Is a Number"
    }
}
 
    

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    validatePilot = validateInput(pilot)
    validateCopilot = validateInput(copilot)
    validateFuelLevel = validateInput(fuelLevel)
    validateCargoLevel = validateInput(cargoLevel)
    
    console.log('pilot: ' + validatePilot)
    console.log('copilot: ' + validateCopilot)
    console.log('fuel level: ' + validateFuelLevel)
    console.log('cargo level: ' + validateCargoLevel)

    if (validatePilot === "Empty" || validateCopilot === "Empty" || validateFuelLevel === "Empty" || validateCargoLevel === "Empty") {
        alert("All fields required!");  
    } else if (validateFuelLevel === "Not a Number" || validateCargoLevel === "Not a Number"){
        alert("That is not a valid number");
        
    }
    
    if (fuelLevel < 10000 && cargoLevel> 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready for Launch");
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("fuelStatus").innerHTML = ("Fuel level too low for launch");
        document.getElementById("cargoStatus").innerHTML = ("Cargo mass too heavy for launch");
        document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilot} is ready for launch`);
        document.getElementById("copilotStatus").innerHTML = (`Co-pilot ${copilot} is ready for launch`);
       
    }  else if (fuelLevel > 10000 && cargoLevel> 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready for Launch");
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("cargoStatus").innerHTML = ("Cargo mass too heavy for launch");
        document.getElementById("fuelStatus").innerHTML = ("Fuel level high enough for launch");
        document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilot} is ready for launch`);
        document.getElementById("copilotStatus").innerHTML = (`Co-pilot ${copilot} is ready for launch`);
    }  else if (fuelLevel < 10000 && cargoLevel < 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready for Launch");
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("cargoStatus").innerHTML = ("Cargo mass low enough for launch");
        document.getElementById("fuelStatus").innerHTML = ("Fuel level too low for launch");
        document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilot} is ready for launch`);
        document.getElementById("copilotStatus").innerHTML = (`Co-pilot ${copilot} is ready for launch`);   
    } else {
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilot} is ready for launch`);
        document.getElementById("copilotStatus").innerHTML = (`Co-pilot ${copilot} is ready for launch`);
        document.getElementById("launchStatus").innerHTML = ("Shuttle is Ready for Launch");
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("cargoStatus").innerHTML = ("Cargo mass low enough for launch");
        document.getElementById("fuelStatus").innerHTML = ("Fuel level high enough for launch"); 
    }
}

 async function myFetch() {
    let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json()
    });
 
    return planetsReturned;
}
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}
 
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;