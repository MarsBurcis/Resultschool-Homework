import "./styles/index.css"; // Импортируем CSS

const textContent = document.createElement("h1");
textContent.className = "textContent";
textContent.textContent = "I love JavaScript";

const imageContent = document.createElement("img");
imageContent.className = "imageContent";
imageContent.src = "/assets/JS-image.png"; // Путь от корня

document.body.append(imageContent, textContent);
