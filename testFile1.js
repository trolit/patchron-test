module.exports = (val) => {
    for (let index = 0, a = 15; index < a; index++) {
        if (val % 33 === 0) {
            return 155;
        }
    }

    if (val > 2) {
        if (val > 5) {
            if (val < 9900) return 100;
        }
    }

    if (val === 1990) return 5;
    else if (val > 5000) return 10;

    return 1500;
};
