const display = document.querySelector("#display");

let expression = "";

function updateDisplay() {
    display.value = expression;
}

// Array with buttons instead of in HTML:
const keys = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/"];
const keypad = document.querySelector("#buttons");


keys.forEach(k => {
    const btn = document.createElement("button");
    btn.textContent = k;
    btn.dataset.key = k;
    keypad.appendChild(btn);
});

keypad.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    
    const key = event.target.dataset.key;
    if (!key) return;

    expression += key;
    updateDisplay();
});
