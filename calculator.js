let res = document.getElementById("inputext");

function display(number){
    res.value += number;

}    

function Result(){
    try{
        res.value = eval(res.value)

    }
    catch(e){
        alert("enter valid format")
    }

}


function clear1(){
    res.value=" ";
   
}
function delet(){
   
    res.value = res.value.slice(0,-1);

}