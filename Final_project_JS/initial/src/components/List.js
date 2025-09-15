import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    // ...
    const donatesContainerTitle = document.createElement("h2");
    donatesContainerTitle.className = "donates-container__title";
    donatesContainerTitle.textContent = "Список донатов";

    this.$listContainer = document.createElement("div");
    this.$listContainer.className = "donates-container__donates";

    this.$rootElement.appendChild(donatesContainerTitle);
    this.$rootElement.appendChild(this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}
