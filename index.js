

let userinput = document.getElementById('input-user')
let result = document.getElementById('result')
function getUserResult(){
    if(userinput.value ===''){
        alert("Please provide the number")
        return false //it is used to stop after execution for loops break we have to use
    }

   if(userinput.value%2===0){
    result.innerHTML = "It is Even number"

   }
   else{
    result.innerHTML = "It is Odd number"
   }
}