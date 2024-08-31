
function convertTemp() {
    const tempInput = document.getElementById('tempInput').value;
    const unit = document.getElementById('unit').value;
    let result;

    if (tempInput === "") {
        result = "Please enter a temperature.";
    } else if (unit === "Celsius") {
        result = `${tempInput}°C is ${(tempInput * 9/5) + 32}°F`;
    } else if (unit === "Fahrenheit") {
        result = `${tempInput}°F is ${((tempInput - 32) * 5/9).toFixed(2)}°C`;
    }

    document.getElementById('result').innerText = result;
}