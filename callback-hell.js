function getMeet(callback) {
    console.log('Walking to the butcher...');
    setTimeout(() => {
        console.log('Getting meet from the butcher');
        callback('beef');
    }, 2000);
}


function getBuns(callback) {
    console.log('Getting buns from the bakery');
    callback('buns');
}


function putMeetBetweenBuns(meet, buns, callback) {
    console.log('Preparing the burger...');
    callback(`Putting ${meet} inside ${buns}`);
}

const makeBurger = () => {
    // Callback hell 
    getMeet((meet) => {
        getBuns((buns) => {
            putMeetBetweenBuns(meet, buns, (finalResult) => {
                console.log(finalResult);
            });
        });
    });
}

makeBurger();