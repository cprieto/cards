module.exports.ENV = {
    port:3001
};
module.exports.getSetup = getSetup;

let DC = {
    handSize: 5,
    lineupSize: 5,
    initialPlayerDeck: {
        'Punch': 6,
        'Vulnerability': 4
    },
    outOfDeck: ['Starter'],
    characterCount: 1,
    characters: [
        {
            name: 'Aquaman',
            file: 'superhero/aquaman.json'
        },
        {
            name: 'Batman',
            file: 'superhero/batman.json'
        },
        {
            name: 'Cyborg',
            file: 'superhero/cyborg.json'
        },
        {
            name: 'Superman',
            file: 'superhero/superman.json'
        },
        {
            name: 'The Flash',
            file: 'superhero/theflash.json'
        },
        {
            name: 'Wonder Woman',
            file: 'superhero/wonderwoman.json'
        },
        {
            name: 'Green Lantern',
            file: 'superhero/superman.json'
        }
    ],
    cards: [
        //Starter
        {
            name: 'Punch',
            file: 'starter/punch.json',
            count: 35
        },
        {
            name: 'Vulnerability',
            file: 'starter/vulnerability.json',
            count: 20
        },
        {
            name: 'Weakness',
            file: 'starter/weakness.json',
            count: 20
        },
        //Super Power
        {
            name: 'Kick',
            file: 'superpower/kick.json',
            count: 20
        },
        {
            name: 'Super Strength',
            file: 'superpower/superstrength.json',
            count: 2
        },
        //Hero
        {
            name: 'Catwoman',
            file: 'hero/catwoman.json',
            count: 3
        },
        {
            name: 'Dark Knight',
            file: 'hero/darkknight.json',
            count: 1
        },
        {
            name: 'Kid Flash',
            file: 'hero/kidflash.json',
            count: 4
        },
        {
            name: 'The Fastest Man Alive',
            file: 'hero/thefastestmanalive.json',
            count: 2
        },
        //Villian
        {
            name: 'Doomsday',
            file: 'villian/doomsday.json',
            count: 2
        },
        {
            name: 'Gorilla Grodd',
            file: 'villian/gorillagrodd.json',
            count: 2
        },
        {
            name: 'The Penguin',
            file: 'villian/thepenguin.json',
            count: 2
        }
    ]
};

function getSetup(name) {
    switch (name.toUpperCase()) {
        case 'DC': return DC;
    }
    return DC;
}