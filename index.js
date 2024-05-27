const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temperature;

function converter() {
  if (toFahrenheit.checked) {
    temperature = Number(textBox.value);
    // Formula FOR Celsius to Fahrenheit
    temperature = (temperature * 9) / 5 + 32;
    result.textContent = temperature.toFixed(1) + " Fahrenheit Degree";
  } else if (toCelcius.checked) {
    temperature = Number(textBox.value);
    // Formula FOR Celsius to Fahrenheit
    temperature = (temperature - 32) * (5 / 9);
    result.textContent = temperature.toFixed(1) + " Celsius Degree";
  } else {
    result.textContent = "Please Select a Unit";
  }
}
