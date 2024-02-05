function submitForm() {

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let creds = { email, password };
    console.log(creds);

    if (email.value && password.value) {
        alert(`Hello ${email.value}, welcome back !`);
    } else {
        if (!email.value) {
            alert('Email field is required !');
        } else if (!password) {
            alert('Password field is required !');
        }
        else if (!email.value && !password.value) {
            alert('Fill all the fields before submitting !');
        }
    }
}