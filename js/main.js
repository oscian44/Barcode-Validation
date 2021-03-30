//Barcode Validation
var codelength = ""
var odds = 0
var evens = 0

function validateCode(){
    var rawcode = document.getElementById("barcode").value
    var outputcode = document.getElementById("displaycode")
    clearValues()
    if(allnumeric(rawcode))
        codelength = rawcode.length
        if(codelength == 13){
            for(i = 0; i <= codelength; i += 2){
                odds = odds + Number(rawcode.charAt(i))
            }

            for(i = 1; i <= codelength; i += 2){
                evens = evens + Number(rawcode.charAt(i))
            }

            if(odds + (evens*9) % 10 == 0){
                outputcode.value = outputcode.value + rawcode + " OK" + "\n"
            }else {
                outputcode.value = outputcode.value + rawcode + " INVALID" + "\n"
            }
        }else if(codelength == 12){

        }else{
            outputcode.list = outputcode.value + "Barcode INVALID; Unable to fix." + "\n"
        }
}

function clearValues(){
    odds = 0
    evens = 0
    codelength = ""
}

function allnumeric(inputtxt){
    var numbers = /^[0-9]/
    if(inputtxt.match(numbers)){
      return true;
    }
    else{
      alert('Please input numeric characters above zero only');
      rawcode.value = ""
      return false;
    }
  }