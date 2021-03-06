module.exports.getSetup = function getSetup(name) {
    let root = '../config';
    let path = '/DC';
    switch (name.toUpperCase()) {
        case 'DC':
            path = '/DC';
            break;
    }
    let setup = require(root + path + '/setup.js').Setup;
    let Powers = require(root + path + '/powers.js');
    setup.powers = new Powers();
    return setup;
};