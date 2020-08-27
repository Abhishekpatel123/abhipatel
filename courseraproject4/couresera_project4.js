var arr=["abhishek", "abhinav", "jack", "JON", "priyanshu", "madhur","aditya" ]; //names in array
// hello goodby
for (let i = 0; i < arr.length; i++) {
    const name = arr[i];
    var char=name.charAt(0);
    if (char=='j' || char=='J') {
        console.log("Goodby " + arr[i]);
        
    }
    else{
        console.log("Hello " + arr[i]);
    }

    
}
