"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "Hal", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

let newObject = {code:"", name: "Please Select One"};
teams.push(newObject);

const button = document.getElementById("button");
const teamInfo = document.getElementById("teamInfo");

window.onload = function() {
  initializeFootballSelect();
  button.onclick = buttononclicked
  
};
let selectElement = document.getElementById("footballTeams");

function initializeFootballSelect() {
  for (let i = 0; i < teams.length; i++) {
    let team = teams[i];
    let option = document.createElement("option");
    option.textContent = team.name;
    option.value = team.code;
    selectElement.appendChild(option);
  }
}
function buttononclicked() { 
  let selectedCode = selectElement.value;
// console.log(selectedCode);
  
for(let i=0; i<teams.length; i++){
   let teamsCode = teams[i].code;
   let teamsName = teams[i].name;
   if(selectedCode == teamsCode) {
    teamInfo.innerHTML = `this is the teams code ${teamsCode}`

    teamInfo.innerHTML = `This is the teams play ${teamsName}`
    teamInfo.innerHTML = `this is the teams code ${teamsCode}`
    teamInfo.innerHTML = `This is the teams play ${teamsName}`
   }
}

}