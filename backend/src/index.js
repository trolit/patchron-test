const lodash = require('lodash');

module.exports = () => {
    if (process.env.NODE_ENV === 'test') process.exit(1);

    const value = 1;

    const a = {
        value: value
    };
};
