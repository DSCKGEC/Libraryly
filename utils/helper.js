/* ------------ Helper Functions ----------- */

// getRandomHex ... takes length as parameter and generates a random alphanumeric code with specified length
const getRandomHex = (length) => {
    var result = '#';
    var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
};

module.exports = {
    getRandomHex,
};
