function myFunction() {
  let iteration = document.getElementById("iteration").value
  let output = ramaHardy(iteration)

  document.getElementById("output").innerHTML = output
}

document.getElementById("buttonSubmit").addEventListener("click", myFunction);



function ramaHardy (iteration) {
let output = `<table border="1" style="margin: auto;"> 
<td>No</td>
<td>Number</td>
<td>First Combination</td>
<td>Second Combination</td>`
let number = 1
let outputArr = []

for (let i = 1; i < iteration; i++) {
  for (let j = 1; j < iteration; j++) {
    let firstNumber = Math.pow(i, 3) + Math.pow(j, 3)
    
    //do the iteration for second number
    for (let x = 1; x < iteration; x++) {
      for (let y = 1; y < iteration; y++) {
        let secondNumber = Math.pow(x, 3) + Math.pow(y, 3)
        if (firstNumber === secondNumber && i !== j && i !== x && i !== y && j !== x && j !== y && x !== y) {
          outputTemp = []
          outputTemp.push(firstNumber, `${i}^3 + ${j}^3`, `${x}^3 + ${y}^3`)

          outputArr.push(outputTemp)
          number ++
        }
      }
    }
  }
}
let outputArrSorted = outputArr.sort(sortFunction)
console.log(outputArrSorted);

//eliminate the same number
outputArr = []
comparator = 0
outputArrSorted.forEach(element => {
  if (element[0] > comparator) {
    outputArr.push(element)
    comparator = element[0]
  }
});

//display to the HTML
let display = ''
outputArr.forEach((element, index) => {
  display += `
  <tr>
  <td>${index+1}</td>
  <td>${element[0]}</td>
  <td>${element[1]}</td>
  <td>${element[2]}</td>
  </tr>`
});
console.log(display);

return output + display + '</table>'
}

function sortFunction(a, b) {
if (a[0] === b[0]) {
    return 0;
}
else {
    return (a[0] < b[0]) ? -1 : 1;
}
}

// ramaHardy(30)