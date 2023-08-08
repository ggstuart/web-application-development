const btn = document.getElementById('my-btn');

function insertParagraph() {
    const element = document.createElement("p");
    element.textContent = "hello";
    document.body.append(element);
}

btn.addEventListener('click', insertParagraph);