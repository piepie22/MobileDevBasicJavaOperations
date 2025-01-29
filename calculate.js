function filter(arr, test) { // filter function utilized in chapter 5 
    let filtered = [];
    for (let element of arr) {
      if (test(element)) {
        filtered.push(element);
      }
    }
    return filtered;
  }
function map(arr, transform) { // map function utilized in chapter 5 
    let mapped = [];
    for (let element of arr) {
      mapped.push(transform(element));
    }
    return mapped;
  }
  function reduce(arr, combine, start) { // reduce function utilized in chapter 5
    let current = start;
    for (let element of arr) {
      current = combine(current, element);
    }
    return current;
  }
  function every(arr) { //put them in the order i want filter -> map -> reduce
    const filter = arr.filter(num => num >= 5); 
    const map = filter.map(num => num * 2);
    const reduced = map.reduce((sum, num) => sum + num, 0);
    return reduced;
  }
  const transform = every([2, 4, 6, 8, 10]); // array of numbers randomly thought
  //console log 
  console.log("Transformed Array:", transform); 
  
