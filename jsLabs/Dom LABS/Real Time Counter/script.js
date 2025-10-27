const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
    updateCharCount();
});

function updateCharCount() {
    const text = textInput.value;
    const charCountText = `Character Count: ${text.length}/50`;
    if (text.length >= 50) {
        textInput.value = text.slice(0, 50);
        charCount.style.color = "red";
        charCount.textContent = charCountText;
    } else {
        charCount.style.color = "black";
        charCount.textContent = charCountText;
    }

};


