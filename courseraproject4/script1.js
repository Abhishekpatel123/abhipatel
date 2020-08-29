
function hello() {
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].charAt(0);

        if (name != 'j' && name != 'J') {
            console.log("Hello " + arr[i]);
        }
    }

}
