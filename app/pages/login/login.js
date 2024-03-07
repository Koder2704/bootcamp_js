// import { login } from "../../utilities/services"; 
const users = [
    {
        username: 'Mishael',
        email: 'mishael@gmail.com',
        password: '1234'
    },
    {
        username: 'Kryst',
        email: 'kryst@gmail.com',
        password: '1234'
    }, {
        username: 'Emmanuella',
        email: 'emmanuella@gmail.com',
        password: '1234'
    }, {
        username: 'Clinton',
        email: 'clinton@gmail.com',
        password: '1234'
    }, {
        username: 'Loic',
        email: 'loic@gmail.com',
        password: '1234'
    },

];



function login() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // If they're not null or undefined...
    if (username && password) {

        try {
            // Retrieving the user from our database:
            const authenticatedUser = users.find(user => user.username == username && user.password === password);
            console.log(authenticatedUser);
            localStorage.setItem('authenticated', JSON.stringify(authenticatedUser));
            return authenticatedUser;

        } catch(e) {
            alert("No match found ! Please register");
        }

    }
}

// const login = () => {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     if (!username || !password) {  
//         alert('Please, fill the form before submitting')
//     } else {
//         const form = document.querySelector('.form_container');
//         const aTag = form.appendChild('a');

//         console.log(aTag);
//     }
// }
