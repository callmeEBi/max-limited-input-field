let $ = document;
let mainInput = $.querySelector(".main_input");
let atSign = $.querySelector(".at");
let lengthNumber = $.querySelector(".length_number");
const maxLength = mainInput.getAttribute("maxlength");

mainInput.addEventListener("keyup", function () {
  atSign.style.color = "#757575";
  if (mainInput.value.trim() != "") {
    atSign.style.color = "#2f94d8";
    lengthNumber.innerHTML = maxLength - mainInput.value.trim().length;
    lengthNumber.style.color = "#757575";
  } else {
    lengthNumber.innerHTML = maxLength;
  }
  if (+mainInput.value.trim().length == maxLength) {
    lengthNumber.style.color = "red";
  }
});
