
function fun() {

    let ch = "c";
   /* if (ch === 'a') {
        answer = "a";
      } else if (ch === 'b') {
        answer = "b";
      } else {
        answer = "c";
      }*/
    switch (ch) {
        case "a":
        case"c":
            console.log("A");
            break;
        case "b":
            console.log("B");
            break;
        default:
            console.log("wrong input");
    }
}
