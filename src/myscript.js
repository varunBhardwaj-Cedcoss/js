
function fun() {
    let a= phoneticLookup("charlie");
    function phoneticLookup(val) {
        var result = "";
      
        var lookup = {
          "alpha": "Adams",
          "bravo": "Boston",
          "charlie": "Chicago",
          "delta": "Denver",
          "echo": "Easy",
          "foxtrot": "Frank"
        }; 
      
        result = lookup[val];
      
        return result;
      }
      console.log(a);
      
    
}
