function myFunction() {
    let iteration = document.getElementById("iteration").value
    let output = ramaHardy(iteration)

    document.getElementById("output").innerHTML = output
}

document.getElementById("buttonSubmit").addEventListener("click", myFunction);



function ramaHardy (iteration) {
  let output = `<table border="1"> 
  <td>No</td>
  <td>Number</td>
  <td>First Combination</td>
  <td>Second Combination</td>`
  let number = 1

  for (let i = 1; i < iteration; i++) {
    for (let j = 1; j < iteration; j++) {
      let firstNumber = Math.pow(i, 3) + Math.pow(j, 3)
      
      //do the iteration for second number
      for (let x = 1; x < iteration; x++) {
        for (let y = 1; y < iteration; y++) {
          let secondNumber = Math.pow(x, 3) + Math.pow(y, 3)
          if (firstNumber === secondNumber && i !== j && i !== x && i !== y && j !== x && j !== y && x !== y) {
            output += (`
            <tr>
            <td>${number}</td>
            <td>${firstNumber}</td>
            <td>${i}^3 + ${j}^3</td> 
            <td>${x}^3 + ${y}^3</td>
            </tr>`)
            number ++
          }
        }
      }
    }
  }
  return output + '</table>'
}