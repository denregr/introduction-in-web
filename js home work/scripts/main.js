
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
let negativeArray = document.createElement('H2');
let positiveArray = document.createElement('H2');
let container = document.querySelector('.tableArray');
container.appendChild(table);
container.appendChild(negativeArray);
container.appendChild(positiveArray);


function matrixArray(rows,columns){
  var arr = [];
  for(var i=0; i<rows; i++){
    arr[i] = [];
    for(var j=0; j<columns; j++){
      arr[i][j] = randomInteger(-10,10);//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
  }
  return arr;
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
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

var myMatrix = matrixArray(3,3);

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