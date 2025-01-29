function printEvenElements(arr) { //function print even elements 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {  //calling even numbers 
            continue; } // utilized using continue
        console.log("Even Number:", arr[i]); //console log 
        }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //array of numbers 
printEvenElements(numbers);
