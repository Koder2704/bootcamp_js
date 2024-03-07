
async function register() {
    // Récupérer les champs correspondants:
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmation = document.getElementById('confirmation');

    const registerCredentials = {
        username: username.value,
        email: email.value,
        password: password.value,
        confirmation: confirmation.value
    };

    console.log(registerCredentials);

    try {
        const response = await fetch('http://localhost:5000');
        const datas = await response;
        console.log(datas);
    } catch (e) {
        console.log('Error occured:', e.message);
    }
}