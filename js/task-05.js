const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

textInput.addEventListener("input", onInput);
function onInput(evt) {
    if (textInput.value.trim() === "") {
        textOutput.textContent = "Anonymous";
    }
    textOutput.textContent = textInput.value === "" ? "Anonymous" : textInput.value;
}
