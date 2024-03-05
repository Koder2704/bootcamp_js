function saluer() {
    console.log('HEY');
}


async function parler(phrase) {
    console.log('parle...');
    return phrase;
}


saluer()
parler('Salut gars, comment vas-tu ?')
    .then(async phrase => {
        const deuxiemePhrase = await phrase;
        console.log("Voici ce que j'ai dit précédemment:", phrase);
        return deuxiemePhrase;
    }).then(deuxiemePhrase => {
        console.log(deuxiemePhrase);
    })