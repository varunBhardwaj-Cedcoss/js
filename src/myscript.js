//global var declaration
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here 
const oopsGlobal = 5;
return funct(oopsGlobal);
//local scope of this var
}

// Only change code above this line

function funct(a) {
  return(console.log(a+myGlobal));
}