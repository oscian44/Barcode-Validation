//Barcode Validation
var codelength = ""
var odds = 0
var evens = 0
var input = document.getElementById("barcode")

//Vaidates Barcode
function validateCode(){
    var i = 0
    var rawcode = document.getElementById("barcode").value
    var outputcode = document.getElementById("displaycode")
    clearValues()
    //Checks if barcode is a number
    if(allnumeric(rawcode)){
        codelength = rawcode.length
        //Tests validity of a 13 digit barcode
        if(codelength == 13){
            for(i = 0; i < codelength; i += 2){
                odds = odds + Number(rawcode.charAt(i))
            }

            for(i = 1; i < codelength; i += 2){
                evens = evens + Number(rawcode.charAt(i))
            }
            
            var test = (odds + (evens*3)) % 10
            console.log(test)

            if((odds + (evens*3)) % 10 == 0){
                outputcode.value = outputcode.value + rawcode + " OK" + "\n"
            }else {
                outputcode.value = outputcode.value + rawcode + " INVALID" + "\n"
            }
        //Fixes Barcodes that are missing the final digit
        }else if(codelength == 12){
            for(i = 0; i <= codelength; i += 2){
                odds = odds + Number(rawcode.charAt(i))
            }

            for(i = 1; i <= codelength; i += 2){
                evens = evens + Number(rawcode.charAt(i))
            }

            var oddcalc = (60-(Number(evens)*3));
            var oddfixed = Number(oddcalc)-Number(odds);

            if((oddcalc + (evens*3)) % 10 == 0){
                outputcode.value = outputcode.value + rawcode + oddfixed + " FIXED" + "\n"
            }else {
                outputcode.value = outputcode.value + rawcode + " INVALID; Unable to fix." + "\n"
            }
        //Notifies if the barcode is less than 12 character
        }else{
            outputcode.value = outputcode.value + "Barcode INVALID; Unable to fix." + "\n"
        }
    //Notifies if the barcode isnt a valid number
    }else{
        outputcode.value = outputcode.value + "Barcode IS NOT a valid number." + "\n"
    }
}

//Clears values
function clearValues(){
    odds = 0
    evens = 0
    codelength = ""
}


//Tests is input is a number
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

//Listens for enter key to press button
  input.addEventListener("keyup", function(event) {
    if (event.key === 13) {
      event.preventDefault();
      document.getElementById("submitbarcode").click();
    }
  });