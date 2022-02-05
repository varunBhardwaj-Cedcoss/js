// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here 
const oopsGlobal = 5;
//local scope of this var
}

// Only change code above this line

function funct() {
  var output;
    output += myGlobal;
    fun1()
    output += oopsGlobal;
  return(console.log(output));
}