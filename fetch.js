
let myDatabase;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(results => results.json())
    .then(datas => {
        console.log(datas);
        myDatabase = datas;
    });