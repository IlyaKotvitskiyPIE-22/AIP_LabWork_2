function TheFunctionWithSwitch() {
    var a= 2.73;
    var b = 1.68;
    var x = Number(document.getElementById("task_4_numberX").value);

    switch(x) {
        case -2: 
            alert(Math.sin(Math.log(Math.abs(x))));
            break;
        case 3:
            alert((4 * x + b)**2);
            break;
        case 5:
            alert(1 / ( x**2 + a **2));
            break;
        default: alert("Введено некорректное число!")
    }
}




