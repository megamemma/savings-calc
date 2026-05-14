const display = document.querySelector("#display");

let expression = "";

function updateDisplay() {
    display.value = expression;
}

// buttons on the site:
document.querySelectorAll("button[data-key]").forEach(btn => {
    btn.addEventListener("click", () => {
        expression += btn.dataset.key;
        updateDisplay();
    });
});

// keyboard (NumPad)