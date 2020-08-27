
var arr = ["abhishek", "abhinav", "jack", "JON", "priyanshu", "madhur", "aditya"];
function Goodby() {
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].charAt(0);
        if (name == 'j' || name == 'J') {
            console.log("Goodby " + arr[i]);


        }
    }
}
