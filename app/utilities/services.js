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




export function login(username, password) {
    // If they're not null or undefined...
    if (username && password) {

        try {
            // Retrieving the user from our database:
            const authenticatedUser = users.find(user => user.username == username && user.password === password);
            
            return authenticatedUser;

        } catch(e) {
            alert("No match found ! Please register");
        }

    }
}