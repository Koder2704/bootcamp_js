const ENDPOINT =`https://api.giphy.com/v1/gifs/search?q=hilarous&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;


function getGIFs() {
    fetch(ENDPOINT).then((response) => {
        new Promise((resolve, reject) => {
            if (response.ok === true) {
                resolve(response.json());
            } 
            else {
                reject('Check the url or the api key if they are both correct !');
            }
        }).then(datas => console.log(datas));
    });
    
}

getGIFs();