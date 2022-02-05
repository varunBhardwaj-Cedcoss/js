
function fun() {
    let a = {firstName:"varun", lastName:"bhardwaj"};
    //acces property with var
    a.firstName='tarun';
    a.middle='kumar';
    delete a.middle;
    console.log(a);
    
}
