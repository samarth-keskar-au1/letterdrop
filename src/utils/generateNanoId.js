const { customAlphabet } = require('nanoid');

const generateNanoId = (idLength = 6) => {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nanoid = customAlphabet(alphabet, 6);
    return nanoid();
}

module.exports = generateNanoId;