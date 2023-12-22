function CalculateTheFunction() {
    var numberA = 4.8;
    var numberB = 0.51;
    var numberX = Number(document.getElementById("task_3_numberX").value);

    if (numberX <= -2) {
        alert(Math.log(Math.abs(numberX)) + Math.sqrt(numberA * numberX**2 + 1));
    }
    else if (numberX > 5){
        alert(Math.atan(numberB / (numberX**2 + 1)));
    }
    else if (-2 < numberX && numberX <= 5){
        alert(Math.sqrt(numberA**2 + numberX**2));
    }
}





