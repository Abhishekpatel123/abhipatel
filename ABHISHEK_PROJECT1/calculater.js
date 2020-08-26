first_input=document.getElementById("first_input");
function result() {
    let first_number=document.getElementById("first_input").value;
    console.log(first_number);
    let second_number=document.getElementById("second_input").value;
    console.log(second_number);
    let operation=document.getElementById("operation").value;
    console.log(operation);
    if (operation=="+") {
        var total=parseFloat(first_number) + parseFloat(second_number);
        console.log(total);
        
    }
    else if (operation=="-") {
        var total=parseFloat(first_number) - parseFloat(second_number);
        console.log(total);
        
    }
    else if (operation=="*") {
        var total=parseInt(first_number) * parseFloat(second_number);
        console.log(total);
        
    }
    else if (operation=="/") {
        var total=parseFloat(first_number) / parseFloat(second_number);
        console.log(total);
        
    }
    else if(operation=="%"){
        var total=parseFloat(first_number) % parseFloat(second_number);
        console.log(total);
    }
    else{
        console.log("invalid input operation");
    }
    document.getElementById("show_result").innerHTML =` YOUR RESULT IS ${total}  `;
    document.getElementById("show_result1").innerHTML=`${total}`;
    
    
}
