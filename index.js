import DecimalToRoman from "./DecimalToRoman.js";
import PageElement from "./PageElement.js";
import RomanToDecimal from "./RomanToDecimal.js";

const romanToDecimal = new RomanToDecimal();
const decimalToRoman = new DecimalToRoman();

const pageElement = new PageElement();
pageElement.calculateBtn.addEventListener("click", handleCalculateBtnClick);
pageElement.resetBtn.addEventListener("click", handleResetBtnClick);

function handleCalculateBtnClick() {
	let romanNumber = pageElement.romanNumberInputField.value.toUpperCase();
	let decimalNumber = pageElement.decimalNumberInputField.value;

	if (romanNumber !== "" && decimalNumber === "" && isValidRomanNumber(romanNumber)) {
		romanToDecimal.calculate(romanNumber);
	} else if (romanNumber === "" && decimalNumber !== "" && isValidDecimalNumber(decimalNumber)) {
		decimalToRoman.calculate(decimalNumber);
	} else {
		alert("enter valid value");
	}
}

function handleResetBtnClick() {
	pageElement.romanNumberInputField.value = "";
	pageElement.decimalNumberInputField.value = "";
	pageElement.calculationTextArea.textContent = "";

	pageElement.romanNumberInputField.disabled = false;
	pageElement.decimalNumberInputField.disabled = false;
	pageElement.calculationTextArea.disabled = false;
}

function isValidDecimalNumber(decimalNumber) {
	return /^[0-9]+$/.test(decimalNumber) && parseInt(decimalNumber) < 4000;
}

function isValidRomanNumber(romanNumber) {
	return /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(romanNumber);
}
