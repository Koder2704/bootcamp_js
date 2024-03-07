const API_URL = 'https://jsonplaceholder.typicode.com/users';
let apiDatas = [];


function getAllUsers() {
    try {
        fetch(API_URL)
            .then(res => res.json())
            .then(datas => {
                apiDatas = datas;
                console.log(datas)
            });
    } catch(error) {
        console.log('Something went wrong !');
    }
}

getAllUsers();