import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };
    this.$rootElement = document.createElement("div");

    this.$rootElement.className = "app";

    const totalAmount = document.createElement("h1");
    totalAmount.className = "total-amount";
    totalAmount.textContent = "Итого: $";

    this.$total = document.createElement("span");
    this.$total.textContent = this.state.total;

    totalAmount.appendChild(this.$total);
    this.$rootElement.appendChild(totalAmount);

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    this.donateList = new List();
    this.$rootElement.appendChild(this.donateList.$rootElement);
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount: amount });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += Number(amount);
    this.$total.textContent = this.state.total;
  }
}
