class DecimalToRoman {
	#values;
	#decimalNumberInputField;
	#romanNumberInputField;
	#calculationTextArea;
	#romanNumber;
	#decimalNumber;

	constructor() {
		this.#initValues();
		this.#decimalNumberInputField = document.querySelector("#decimal-number");
		this.#romanNumberInputField = document.querySelector("#roman-number");
		this.#calculationTextArea = document.querySelector("#calculation");
	}

	#initValues() {
		this.#values = new Map();

		this.#values.set(0, "");

		// Ones
		this.#values.set(1, "I");
		this.#values.set(2, "II");
		this.#values.set(3, "III");
		this.#values.set(4, "IV");
		this.#values.set(5, "V");
		this.#values.set(6, "VI");
		this.#values.set(7, "VII");
		this.#values.set(8, "VIII");
		this.#values.set(9, "IX");

		// Tens
		this.#values.set(10, "X");
		this.#values.set(20, "XX");
		this.#values.set(30, "XXX");
		this.#values.set(40, "XL");
		this.#values.set(50, "L");
		this.#values.set(60, "LX");
		this.#values.set(70, "LXX");
		this.#values.set(80, "LXXX");
		this.#values.set(90, "XC");

		// Hundreds
		this.#values.set(100, "C");
		this.#values.set(200, "CC");
		this.#values.set(300, "CCC");
		this.#values.set(400, "CD");
		this.#values.set(500, "D");
		this.#values.set(600, "DC");
		this.#values.set(700, "DCC");
		this.#values.set(800, "DCCC");
		this.#values.set(900, "CM");

		// Thousands
		this.#values.set(1000, "M");
		this.#values.set(2000, "MM");
		this.#values.set(3000, "MMM");
	}

	calculate(decimalNumber) {
		this.#decimalNumber = decimalNumber;
		let romanNumber = "";

		let placeValue = 1;
		for (let i = decimalNumber.length - 1; i >= 0; --i) {
			romanNumber = this.#values.get(parseInt(decimalNumber[i]) * placeValue) + romanNumber;
			placeValue *= 10;
		}

		this.#romanNumberInputField.value = romanNumber;
		this.#calculationTextArea.textContent = this.#getCalculationSteps();

		this.#decimalNumberInputField.disabled = true;
		this.#romanNumberInputField.disabled = true;
		this.#calculationTextArea.disabled = true;
	}

	#getCalculationSteps() {
		let romanNumber = this.#romanNumber;
		let decimalNumber = this.#decimalNumber;

		const steps = [];

		const step1 = decimalNumber;
		const step2 = [];
		const step3 = [];
		const step4 = romanNumber;

		let placeValue = 1;
		for (let i = step1.length - 1; i >= 0; --i) {
			let currNum = parseInt(step1[i]) * placeValue;
			step2.unshift(currNum);
			step3.unshift(this.#values.get(currNum));
			placeValue *= 10;
		}

		steps.push(step1);
		steps.push(step2.join(" + "));
		steps.push(step3.join(" + "));
		steps.push(step4);

		return steps.join("\n");
	}
}

export default DecimalToRoman;
