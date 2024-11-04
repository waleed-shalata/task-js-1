document.addEventListener("DOMContentLoaded" ,function(){
    // السطر دا علشان اقفل الزرار 
    document.querySelector("#submit").disabled = true;
    document.querySelector("#task").onkeyup = function(){

        if(document.querySelector("#task").value.length > 5){
            document.querySelector("#submit").disabled = false;
        }else{
            document.querySelector("#submit").disabled = true;
        };

    };

});

document.querySelector("form").onsubmit = function(){
//السطر دا مسكت قيمه اللي بتدخل في انبوت
    var task = document.querySelector("#task").value;    
    var li = document.createElement("li");
    li.innerHTML = task;
    document.querySelector("#tasks").appendChild(li);
    document.querySelector("#task").value = ""; 
    document.querySelector("#submit").disabled = true;
    return false;
    
}
