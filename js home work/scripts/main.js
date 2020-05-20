
//First task --- Parallelepiped
var area = document.querySelector('.AreaResult');
var buttonArea = document.querySelector('.resultAreaButton');

function parallelepipedArea(height, side) {
    return height * side
}

buttonArea.onclick = function () {
    var heightStorage = prompt('height' );
    var sideStorage = prompt('side' );
    area.textContent = parallelepipedArea(heightStorage,sideStorage);
};


//Second task --- Prime numbers
var primenumbers = document.querySelector('.PrimeNumbersResult');
var numbersButton = document.querySelector('.resultPrimeNumbersButton');

function primeNumbersArray(start, stop) {
    primeArray = [];
    if (start < 2) start = 2;

    for (var i = start;  i<=stop; i++) {
        var count = 0;
        for (var j=2; j<i; j++) {
            if (i%j) {continue;}
            count += 1;
        }
        if (!count) primeArray.push(i);
    }
    return primeArray
}

numbersButton.onclick = function () {
    var startStorage = prompt('start' );
    var endStorage = prompt('end' );
    primenumbers.textContent = primeNumbersArray(startStorage,endStorage);
};


//Third task --- Array in table
let table = document.createElement('TABLE');
let table2 = document.createElement('TABLE');
let negativeArray = document.createElement('H2');
let positiveArray = document.createElement('H2');
let container = document.querySelector('.tableArray');
let container2 = document.querySelector('.sankearray');
container.appendChild(table);
container2.appendChild(table2);
container.appendChild(negativeArray);
container.appendChild(positiveArray);

//array generator
function matrixArray(rows,columns){
  var arr = [];
  for(var i=0; i<rows; i++){
    arr[i] = [];
    for(var j=0; j<columns; j++){
      arr[i][j] = randomInteger(-10,10);
    }
  }
  return arr;
}

//random function
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// n-size array
function getArray(n) {
  let arr = new Array(n)
  for (let i = 0; i < n; i++) {
      arr[i] = randomInteger(1,4)
  }
  return arr;
}

let c = 0;

var mmmatrix = getArray(8).sort()
for (let row = 0; row < 8; row++) {
  if (row % 2 === 0) {
      for (let i = 8 - 1; i >= 0; i--) {
          aaa[i][row] = mmmatrix[c++];
      }
  } else {
      for (let i = 0; i < 8; i++) {
          aaa[i][row] = mmmatrix[c++];
      }
  }
}
console.log(aaa)

// n-size array print in table
for (let i = 0; i < aaa.length; i++) {
  let tr2 = document.createElement('TR');
  table2.appendChild(tr2); {
    for (let j = 0; j < aaa[i].length; j++) {
      let td2 = document.createElement('TD');
      td2.innerHTML = aaa[i][j];
      tr2.appendChild(td2)
    }
  }
}

function positiveNegativeArrays(matArr){
    let positiveArr = [];
    let negativeArr = [];
    let massStorage = [];
    for(let i=0; i<matArr.length; i++) {
        for(let j=0; j<matArr[0].length; j++){
            if (matArr[i][j] < 0) {
                negativeArr.push(matArr[i][j])
            }
            else if (matArr[i][j] > 0) {
                positiveArr.push(matArr[i][j])
            }
        }
  }
  massStorage.push(negativeArr);
  massStorage.push(positiveArr);
  return massStorage;
}

var myMatrix = matrixArray(8,8);

for (let i = 0; i < myMatrix.length; i++) {
  let tr = document.createElement('TR');
  table.appendChild(tr); {
    for (let j = 0; j < myMatrix[i].length; j++) {
      let td = document.createElement('TD');
      td.innerHTML = myMatrix[i][j];
      tr.appendChild(td)
    }
  }
}
var massStorage = positiveNegativeArrays(myMatrix);
negativeArray.textContent = massStorage[0];
positiveArray.textContent = massStorage[1];