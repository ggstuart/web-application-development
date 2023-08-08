const btn = document.getElementById('my-btn');
const output = document.getElementById('output');

function insertParagraph() {
    const element = document.createElement("p");
    element.textContent = "hello";
    output.append(element);
}

btn.addEventListener('click', insertParagraph);