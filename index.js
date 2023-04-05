// Write your algorithm here
function hasTargetSum(array, target) {
  for(let i=0; i<array.length-1; i++) 
  {
    for(let j=i+1;j<array.length; j++) 
    {
      if(array[i]+array[j]===target) 
      {
        return true;
      }
    }
  }
  return false;
  
  
}

/* 
  Write the Big O time complexity of your function here
  Since the function has 2 loops, the time complexity is O(n*n) i.e O(n^2). 
*/

/* 
  Add your pseudocode here
  Iterate over the numbers in the array 
    Iterate over the remaining numbers in the array
      Check if the sum of the current number and any other number remaining in the array adds up to the target
        If the sum = target then return true otherwise the function returns false

*/

/*
  Add written explanation of your solution here
  I want to go through the entire array for every number comparing with the rest of the numbers in the array
  I could write a function with 2 for loops, one for looping over the numbers in the array 
  and the other for iterating over the rest of the numbers in the array checking whether for each number, 
  the sum of any number paired with it will match our target. 
  If our sum equals our target then our function returns true otherwise it returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
