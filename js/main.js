//Barcode Validation
var rawcode = document.getElementById("barcode")
var outputcode = document.getElementById("displaycode")
var codelength = ""

function validateCode(){
    codelength = rawcode.length
    if(codelength == 13){

    }else if(codelength == 12){

    }else{
        outputcode = outputcode.innerHTML("Barcode INVALID; Unable to fix.")
    }
}