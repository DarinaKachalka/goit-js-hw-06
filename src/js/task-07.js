const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, function () {
    textEl.style.fontSize = inputEl.value + "px";
});