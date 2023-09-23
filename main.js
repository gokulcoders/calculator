let result_output = document.getElementById("result");

function display(num){
    result_output.value += num;
}
function Calculate(){
    try{
        result_output.value = eval(result_output.value);
    }
    catch(err)
    {
        
        alert("Invalid!!!!!!!!")
    }
}
function Clear(){
    result_output.value=" ";
}
function del(){
    result_output.value = result_output.value.slice(0,-1);
}
