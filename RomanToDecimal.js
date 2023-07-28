class RomanToDecimal {
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

		this.#values.set("", 0);
		this.#values.set("I", 1);
		this.#values.set("V", 5);
		this.#values.set("X", 10);
		this.#values.set("L", 50);
		this.#values.set("C", 100);
		this.#values.set("D", 500);
		this.#values.set("M", 1000);
	}

	calculate(romanNumber) {
		this.#decimalNumber = 0;
		this.#romanNumber = romanNumber;

		for (let i = 0; i < romanNumber.length; ++i) {
			if (i < romanNumber.length - 1 && this.#values.get(romanNumber[i]) < this.#values.get(romanNumber[i + 1])) {
				this.#decimalNumber -= this.#values.get(romanNumber[i]);
			} else {
				this.#decimalNumber += this.#values.get(romanNumber[i]);
			}
		}

		this.#decimalNumber = "" + this.#decimalNumber;
		this.#decimalNumberInputField.value = this.#decimalNumber;
		this.#calculationTextArea.textContent = this.#getCalculationSteps();

		this.#decimalNumberInputField.disabled = true;
		this.#romanNumberInputField.disabled = true;
		this.#calculationTextArea.disabled = true;
	}

	#getCalculationSteps() {
		let romanNumber = this.#romanNumber;
		let decimalNumber = this.#decimalNumber;

		const steps = [];

		const step1 = romanNumber;
		const step2 = [];
		const step3 = [];
		const step4 = [];
		const step5 = [];
		const step6 = decimalNumber;

		for (let i = 0; i < step1.length; ++i) {
			if (i < step1.length - 1 && this.#values.get(step1[i]) < this.#values.get(step1[i + 1])) {
				step2.push(step1[i] + step1[i + 1]);
				step3.push("(" + step1[i + 1] + " - " + step1[i] + ")");
				step4.push("(" + this.#values.get(step1[i + 1]) + " - " + this.#values.get(step1[i]) + ")");
				step5.push(this.#values.get(step1[i + 1]) - this.#values.get(step1[i]));
				i++;
			} else {
				step2.push(step1[i]);
				step3.push(step1[i]);
				step4.push(this.#values.get(step1[i]));
				step5.push(this.#values.get(step1[i]));
			}
		}

		steps.push(step1);
		if (step2.toString() !== step1.toString()) steps.push(step2.join(" + "));
		if (step3.toString() !== step2.toString()) steps.push(step3.join(" + "));
		if (step4.toString() !== step3.toString()) steps.push(step4.join(" + "));
		if (step5.toString() !== step4.toString()) steps.push(step5.join(" + "));
		if (step6.toString() !== step5.toString()) steps.push(step6);

		return steps.join("\n");
	}
}

export default RomanToDecimal;
