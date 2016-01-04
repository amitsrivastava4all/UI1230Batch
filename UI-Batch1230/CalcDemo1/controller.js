window.addEventListener("load",init);
function init() {
    document.getElementById("add").addEventListener("click", doOperation);
    document.getElementById("subtract").addEventListener("click", doOperation);
    document.getElementById("multiply").addEventListener("click", doOperation);
    document.getElementById("divide").addEventListener("click", doOperation);
}
function doOperation(event){
    var result = 0;
    var firstNo = document.getElementById("firstNo");
    var secondNo = document.getElementById("secondNo");
    var buttonValue = event.srcElement.innerHTML;
    console.log(event);
    console.log("SRC Element ",event.srcElement);
    if(firstNo && secondNo){
        if(firstNo.value && secondNo.value){
            firstNo = isNaN(parseInt(firstNo.value))?0:parseInt(firstNo.value);
            secondNo = isNaN(parseInt(secondNo.value))?0:parseInt(secondNo.value);
            if(buttonValue=="Add"){
             result= add(firstNo,secondNo);
            }
            if(buttonValue=="Subtract"){
                 result= subtract(firstNo,secondNo);
            }

            var resultTxt = document.getElementById("result");
            if(resultTxt){
                resultTxt.value = result;
            }
        }
        else{
            alert("Blank Or Zero Not Allowed ");
        }
    }
    else{
        alert("Can't Do the Calculation Id Not Present");
    }

}
