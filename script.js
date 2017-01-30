var teenTaal = document.querySelector('#teenTaal');
var jhaptal = document.querySelector('#jhaptal');
var ektaal = document.querySelector('#ektaal');
var newTeenTaalCycle = document.querySelector('#newTeenTaalCycle');

// hide raga templates
init();
function init (){
teenTaal.style.display = 'none';
jhaptal.style.display = 'none';
ektaal.style.display = 'none';
}

//add raga templates according to which one is selected
function addRaga(){
  if (document.getElementById("talaForm").value === "Teentaal"){
      teenTaal.style.display ='block';
    } else if (document.getElementById("talaForm").value === "Jhaptal"){
      jhaptal.style.display = 'block';
    } else if (document.getElementById("talaForm").value === "Ektaal"){
      ektaal.style.display = 'block';
    }

}

// add an extra cycle
function addCycle () {
  if (document.getElementById("talaForm").value === "Teentaal"){
  	var divClone = newTeenTaalCycle.cloneNode(true);
  	teenTaal.appendChild(divClone);
  }
  }

//adding sargam

var sargam = [];
var sargamSecondClap = [];
var sargamWave = [];
var sargamThirdClap = [];

function addSa () {
    sargam.push('S');
    displaySargam();
}

function addRe () {
  sargam.push('R');
  displaySargam();
}

function addGa () {
  sargam.push('G');
  displaySargam();
}

function addMa () {
  sargam.push('M');
  displaySargam();
}

function addPa () {
  sargam.push('P');
  displaySargam();
}

function addDha () {
  sargam.push('D');
  displaySargam();
}

function addNi () {
  sargam.push('N');
  displaySargam();
}

function addRest () {
  sargam.push('-');
  displaySargam();
}

//display sargam

function displaySargam (){
  if (sargam.length <= 4){
     document.getElementById("sum").innerText = sargam;
   }  else if (sargam.length >= 4 && sargam.length <= 8) {
        sargamSecondClap = sargam.slice(4,8);
        document.getElementById("secondClap").innerText = sargamSecondClap;
   }  else if (sargam.length >= 8 && sargam.length <= 12) {
        sargamWave = sargam.slice(8,12);
        document.getElementById("wave").innerText = sargamWave;
   }  else if (sargam.length >= 12 && sargam.length <= 16) {
        sargamThirdClap = sargam.slice(12,16);
        document.getElementById("thirdClap").innerText= sargamThirdClap;
   }
}
