class PageElement {
	#romanNumberInputField;
	#decimalNumberInputField;
	#calculationTextArea;
	#calculateBtn;
	#resetBtn;

	constructor() {
		this.#romanNumberInputField = document.querySelector("#roman-number");
		this.#decimalNumberInputField = document.querySelector("#decimal-number");
		this.#calculationTextArea = document.querySelector("#calculation");
		this.#calculateBtn = document.querySelector("#calculate-btn");
		this.#resetBtn = document.querySelector("#reset-btn");
	}

	get romanNumberInputField() {
		return this.#romanNumberInputField;
	}

	get decimalNumberInputField() {
		return this.#decimalNumberInputField;
	}

	get calculationTextArea() {
		return this.#calculationTextArea;
	}

	get calculateBtn() {
		return this.#calculateBtn;
	}

	get resetBtn() {
		return this.#resetBtn;
	}
}

export default PageElement;
