function calculateFactorial(n) { //function calculateFactorial(n)
    let factorial = 1; 
    for (let i = 1; i <= n; i++) { //for loop increasing value
      factorial *= i;
    }
    return factorial;
  }
  const factorial = calculateFactorial(4); //chose number 4 to calculate
  //console log
  console.log("Factorial:", factorial);
