function CheckPositiveNumber() {
    var numberA = Number(document.getElementById("numberA").value);
    var numberB = Number(document.getElementById("numberB").value);
    var numberC = Number(document.getElementById("numberC").value);

    if (numberA > 0) { alert("Высказывание верно");
    }
    else if (numberB > 0) { alert("Высказывание верно");
    }
    else if (numberC > 0) { alert("Высказывание верно");
    }
    else { alert("Высказывание не верно.")}
}



