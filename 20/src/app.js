import { getRandomColor } from "./utils";
export default function initApp() {
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Изменить цвет страницы";
  button.addEventListener("click", () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });
  document.body.append(button);
}
