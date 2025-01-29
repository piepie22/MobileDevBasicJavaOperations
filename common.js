function findCommonElements(a1, a2) { // function findCommon Elements
    return a1.filter(element => a2.includes(element)); //returning new array a1 and a2
  }
  const commonElements = findCommonElements([11, 99, 65, 43, 63], [11, 29, 32, 63, 72, 56]); // 2 arrays 
  //console log
  console.log("Common elements:", commonElements); 
