// add a cycle
function addCycle() {
  // get the reference for the parent tables
  var tables = document.getElementById('teenTaal');
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("---------------");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into parent table
  tables.appendChild(tbl);
  // sets the border attribute of tbl to 2 and width to 1350px;
  tbl.setAttribute("border", "2");
  tbl.setAttribute('width', '1350px');
}

//new cycle object constructor
function NewCycle(){
  this.sum = ('');
  this.secondClap = ('');
  this.wave = ('');
  this.thirdClap = ('');
}

//sargam object
var sargam = {
  cycle1: new NewCycle()
}

//variable for keeping track of number of cycles
var cycleNum = Object.keys(sargam).length;

//adding and displaying  sargam
function addNode(note){
  // variable for keeping track of current cycle (cycle that the note is being added to)
  debugger;
  var currentCycle = sargam["cycle" + cycleNum];
  // variables for accessing the different sections of each cycle
  var current = teenTaal.children[cycleNum - 1];
  var currentSargam = current.getElementsByTagName('tr')[0];
  var currentSection = currentSargam.getElementsByTagName('td');

  if (currentCycle.sum.length < 4){
    currentCycle.sum += note;
    currentSection[0].innerText = currentCycle.sum;
  } else if (currentCycle.secondClap.length < 4){
    currentCycle.secondClap += note;
    currentSection[1].innerText = currentCycle.secondClap;
  } else if (currentCycle.wave.length < 4){
    currentCycle.wave += note;
    currentSection[2].innerText = currentCycle.wave;
  } else if (currentCycle.thirdClap.length < 4){
    currentCycle.thirdClap += note;
    currentSection[3].innerText = currentCycle.thirdClap;
    //when the thirdClap length is equal to 4
  } else if (currentCycle.thirdClap.length === 4 ){
  	//increase cycle num
    cycleNum++;
    //add new cycle
    sargam['cycle' + cycleNum] = new NewCycle();
    addCycle();
    //add note to that cycle
    sargam['cycle' + cycleNum].sum += note
  }
}
