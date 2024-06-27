let history = [];
let currentInput = "";

function input(value) {
    if (currentInput.length < 15) {
        currentInput += value;
        updateResult(currentInput);
    }
}

function calculate() {
    try {
        let result = eval(currentInput);
        history.push(currentInput + " = " + result);
        currentInput = result.toString();
        updateHistory();
        updateResult(result);
    } catch {
        updateResult("Error");
    }
}

function clearDisplay() {
    currentInput = "";
    updateResult(0);
}

function toggleHistory() {
    const historyElement = document.getElementById("history");
    historyElement.style.display = historyElement.style.display === "none" ? "block" : "none";
}

function updateHistory() {
    const historyElement = document.getElementById("history");
    historyElement.innerHTML = history.join("<br>");
}

function updateResult(value) {
    document.getElementById("result").innerText = value;
}
