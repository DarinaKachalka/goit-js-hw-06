const form = document.querySelector(`.login-form`);
form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const { elements: { email, password } } = evt.currentTarget;
if (email.value === "" || password.value === "") {
    return alert (` All fields must be filled`);
}
    const Obj = {
        email: email.value,
        password: password.value,
    }
    console.log(Obj)
    evt.currentTarget.reset();
}

