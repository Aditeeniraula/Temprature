const textbox = document.getElementById("box");
const cel = document.getElementById("cel");
const fah = document.getElementById("fah");
const result = document.getElementById("para");
let temp;

function convert() {
  if (cel.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "F";
  } else if (fah.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) / 1.8;
    result.textContent = temp.toFixed(1) + "C";
  } else {
    result.textContent = "Select a Unit!!";
  }
}
