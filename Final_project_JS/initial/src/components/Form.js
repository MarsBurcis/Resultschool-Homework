import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.props = props;
    this.state = {
      amount: "",
    };
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";
    // ...
    this.$donateFormDonateInput = document.createElement("input");
    this.$donateFormDonateInput.className = "donate-form__donate-input";
    this.$donateFormDonateInput.name = "amount";
    this.$donateFormDonateInput.type = "number";
    this.$donateFormDonateInput.max = "100";
    this.$donateFormDonateInput.min = "1";
    this.$donateFormDonateInput.required = true;
    this.$donateFormDonateInput.value = this.state.amount;
    this.$input = this.$donateFormDonateInput;

    this.$donateFormSubmitButton = document.createElement("button");
    this.$donateFormSubmitButton.className = "donate-form__submit-button";
    this.$donateFormSubmitButton.type = "submit";
    this.$donateFormSubmitButton.textContent = "Задонатить";

    const donateFormInputLabel = document.createElement("label");
    donateFormInputLabel.className = "donate-form__input-label";
    donateFormInputLabel.textContent = "Введите сумму в $";
    donateFormInputLabel.appendChild(this.$donateFormDonateInput);
    this.$button = this.$donateFormSubmitButton;

    this.$rootElement.appendChild(donateFormInputLabel);
    this.$rootElement.appendChild(this.$donateFormSubmitButton);

    this.$donateFormDonateInput.addEventListener(
      "input",
      this.handleInput.bind(this)
    );
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.$donateFormSubmitButton.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = "";
      this.$donateFormDonateInput.value = "";
    }
  }
  get isValid() {
    const amount = Number(this.state.amount);
    return amount >= 1 && amount <= 100;
  }
}
