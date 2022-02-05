
function fun() {
    let a= fun1();
    console.log(a);

  function fun1(){
      return false;
      //return early pattern for function
      console.log('bye');
  }
}
