
var arr = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry" , "Paula" ,"Laura", "Jim" ];
function Goodby() {
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].charAt(0);
        if (name == 'j' || name == 'J') {
            console.log("Good by " + arr[i]);


        }
        else{
            console.log("Hello " + arr[i]);
        }
    }
}

