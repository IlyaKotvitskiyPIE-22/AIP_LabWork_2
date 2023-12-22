function AverageNumber() {
    var firstNumber = Number(document.getElementById("firstNumber").value);
    var secondNumber = Number(document.getElementById("secondNumber").value);
    var thirdNumber = Number(document.getElementById("thirdNumber").value);

    if ((secondNumber < firstNumber && firstNumber < thirdNumber) || (thirdNumber < firstNumber && firstNumber < secondNumber)) {
        alert(firstNumber);
    }

    else if ((firstNumber < secondNumber && secondNumber < thirdNumber) || (thirdNumber < secondNumber && secondNumber < firstNumber)) {
        alert(secondNumber);
    }

    else if ((firstNumber < thirdNumber && thirdNumber < secondNumber) || (secondNumber < thirdNumber && thirdNumber < firstNumber)) {
        alert(thirdNumber);
    }
    else {
        alert("Числа равны или не введены.")
    }
}



