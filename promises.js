function makeBurger() {
    return new Promise((resolve, reject) => {
        console.log('Walking to the butcher...');

        setTimeout(() => {
            console.log('Getting meat from the butcher.');
            resolve('Beef');
        }, 2000);
    });
}






makeBurger()
    .then(
        meatType => {
            console.log('Getting the buns from the bakery');
            return [meatType, 'whole grains'];
    })
    .then(([meatType, bunsType]) => {
        console.log(`The ${meatType} with ${bunsType} burger is completed`);
})

