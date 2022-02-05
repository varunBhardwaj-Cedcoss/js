
function fun(){
const testArr = [1, 2, 3, 4, 5];

  console.log("Before: " + testArr);
  console.log(nextInLine(testArr, 6));
  console.log("After: " + testArr);
}
function nextInLine(arr, item) {
  
    let a=arr[0];
    arr.push(item);
    arr.shift();
    return a; 
  
  }
