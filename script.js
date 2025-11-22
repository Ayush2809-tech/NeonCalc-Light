function press(v) {
    document.getElementById("display").value += v;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    try {
        document.getElementById("display").value =
            eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
function backspace() {
    var exp = document.getElementById("display").value;
    document.getElementById("display").value = exp.substring(0, exp.length - 1);
} 