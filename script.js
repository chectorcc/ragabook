function addRaga () {
  	var myDiv = document.getElementById("row1");
  	var divClone = myDiv.cloneNode(true);
  	document.getElementById("row1").appendChild(divClone);
  }

//adding sargam

var sargam = [];
var sargamSecondClap = [];
var sargamWave = [];
var sargamThirdClap = [];


function displaySargam () {
  if (sargam.length <= 4){
  document.getElementById("clap").innerText = sargam;
  } else if (sargam.length > 4 && sargam.length <= 8) {
    document.getElementById("secondClap").innerText = sargamSecondClap;
  } else if (sargam.length <= 12) {
    document.getElementById("wave").innerText = sargamWave;
  } else if (sargam.length <= 16){
    document.getElementById("thirdClap").innertext = sargamThirdClap;
  }
}


function addSa () {
  if (sargam.length <= 4){
  sargam.push('S');
  displaySargam();
} else if (sargam.length > 4 && sargam.length <= 8){
  sargamSecondClap.push('S');
  displaySargam();
  } else if (sargam.length <= 12){
  sargamWave.push('S');
  displaySargam();
}
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

// add sargam to new array
// display array in first measure
// continue to add to the array
// if array has 4 items, add to next measure
